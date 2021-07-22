import { Container, FormHeader, RedirectButton } from "styles/pages/Home";
import Head from 'next/head';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { FiLogIn } from 'react-icons/fi';
import { useAuth } from "hooks/useAuth";
import { Header } from "components/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { api } from "services/api";

type SignInData = {
  email: string;
  password: string;
  username: string;
};

const signInSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatório'),
  username: Yup.string().required('Nome de usuário').min(4, 'No mínimo 4 caracteres')
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(signInSchema) });
  const { errors } = formState;
  const Router = useRouter();
  const { isAuthenticated, signIn } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/posts');
    }
  }, [isAuthenticated]);

  const handleSignUp: SubmitHandler<SignInData> = async ({ email, password, username }) => {
    await api.post('/users/admin', { username, email, password });
    signIn({ email, password });
    Router.push('/posts');
  };
  return (
    <>
      <Head>
        <title>Patch notes</title>
      </Head>
      <Header />

      <Container>

        <form onSubmit={handleSubmit(handleSignUp)} >
          <FormHeader>Administrador</FormHeader>
          <label htmlFor="email">E-mail</label>
          <Input id="email" placeholder="E-mail" type="email" error={errors.email} {...register("email")} />

          <label htmlFor="username">Username</label>
          <Input id="username" placeholder="Username" type="text" error={errors.username} {...register("username")} />

          <label htmlFor="password">Password</label>
          <Input id="password" placeholder="password" type="password" error={errors.password} {...register("password")} />
          <RedirectButton type='button' onClick={() => Router.push('/')}>Já possui conta? <span>Faça o login<FiLogIn /></span></RedirectButton>
          <Button>Entrar</Button>
        </form>
      </Container>
    </>
  );
}
