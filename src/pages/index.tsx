import { Container } from "styles/pages/Home";
import Head from 'next/head';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Patch notes</title>
      </Head>
      <Container>
        <form >
          <label htmlFor="email">E-mail</label>
          <Input id="email" placeholder="E-mail" name="email" type="email" />
          <label htmlFor="email">Password</label>
          <Input id="email" placeholder="password" name="password" type="password" />
          <Button>Entrar</Button>
        </form>
      </Container>
    </>
  );
}
