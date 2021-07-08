import { Header as MyHeader } from "components/Header";
import { Container, PostContainer, PostInfo } from '../../styles/pages/Posts';
import Header from 'next/head';

export default function Posts() {
  return (
    <>
      <Header>
        <title>
          Patch notes
        </title>
      </Header>
      <MyHeader />
      <Container>

        <PostContainer>
          <PostInfo>
            <h1>Patch notes 1</h1>
            <h3>Muito massa notas</h3>
          </PostInfo>
          <h4>Erinzinho</h4>
          <h5>22 de Junho 2021</h5>
        </PostContainer>

        <PostContainer>
          <PostInfo>
            <h1>Patch notes 2</h1>
            <h3>Muito massa notas</h3>
          </PostInfo>
          <h4>Erinzinho</h4>
          <h5>22 de Junho 2021</h5>
        </PostContainer>

        <PostContainer>
          <PostInfo>
            <h1>Patch notes 3</h1>
            <h3>Muito massa notas</h3>
          </PostInfo>
          <h4>Erinzinho</h4>
          <h5>22 de Junho 2021</h5>
        </PostContainer>

      </Container>
    </>
  );
}