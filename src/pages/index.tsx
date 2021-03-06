import { Container, FormHeader, RedirectButton } from "styles/pages/Home";
import Head from 'next/head';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { SubmitHandler, useForm } from "react-hook-form";
import { FiLogIn } from 'react-icons/fi';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useAuth } from "hooks/useAuth";
import { Header } from "components/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";

type SignInData = {
  email: string;
  password: string;
};

const signInSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatório'),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(signInSchema) });
  const { errors } = formState;
  const Router = useRouter();
  const { signIn, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/posts');
    }
  }, [isAuthenticated]);

  const handleSignIn: SubmitHandler<SignInData> = (values) => {
    signIn(values);
  };
  return (
    <>
      <Head>
        <title>Patch notes</title>
      </Head>
      <Header />
      <Container>

        <form onSubmit={handleSubmit(handleSignIn)} >
          <FormHeader>Login</FormHeader>
          <label htmlFor="email">E-mail</label>
          <Input id="email" placeholder="E-mail" type="email" error={errors.email} {...register("email")} />
          <label htmlFor="password">Password</label>
          <Input id="password" placeholder="password" type="password" error={errors.password} {...register("password")} />
          <RedirectButton type='button' onClick={() => Router.push('/signup')}>Não possui conta? <span>Cadastre-se<FiLogIn /></span></RedirectButton>
          <Button>Entrar</Button>
        </form>
      </Container>
    </>
  );
}
