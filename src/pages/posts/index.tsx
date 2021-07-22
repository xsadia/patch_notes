import { Header as MyHeader } from "components/Header";
import { Container, CustomUnderline, DeletePostButton, LoginButton, LoginButtonContainer, PostContainer, PostInfo, PostOuterContainer, PostOuterOuterContainer, UnderlineContainer } from '../../styles/pages/Posts';
import Header from 'next/head';
import Link from 'next/link';
import { useCallback, useEffect, useState } from "react";
import { BiTrash } from 'react-icons/bi';
import { api } from "services/api";
import { useAuth } from "hooks/useAuth";

type User = {
  _id: string;
  username: string;
};

type Post = {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  user: User;
  createdAt: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isAuthenticated, user } = useAuth();

  const getPosts = useCallback(async () => {
    const response = await api.get(`/posts?page=${currentPage}&limit=5`);

    setPosts(previousPosts => [...previousPosts, ...response.data]);
  }, [currentPage]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setCurrentPage((currentPage) => currentPage + 1);
      }
    });

    intersectionObserver.observe(document.querySelector('#ward'));
    return () => intersectionObserver.disconnect();
  }, []);

  const handleDeletePost = async (id: string) => {
    await api.delete(`/posts/${id}`);
    const remainingPosts = posts.filter(post => post._id !== id);

    setPosts([...remainingPosts]);
  };

  return (
    <>
      <Header>
        <title>
          Patch notes
        </title>
      </Header>
      <MyHeader />

      <Container>
        {!isAuthenticated && (
          <LoginButtonContainer>
            <Link href='/'>
              <UnderlineContainer>
                <LoginButton>Login</LoginButton>
                <CustomUnderline />
              </UnderlineContainer>
            </Link>
          </LoginButtonContainer>
        )}
        {posts.map(post => (

          <PostContainer key={post._id}>
            <Link href={`/posts/${post._id}`} >
              <PostInfo>
                <h1>{post.title}</h1>
                <h3>{post.subtitle}</h3>
              </PostInfo>
            </Link>
            <PostOuterOuterContainer>
              <Link href={`/posts/${post._id}`} >
                <PostOuterContainer>
                  <h4>{post.user.username}</h4>
                  <h5>{new Date(post.createdAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}</h5>
                </PostOuterContainer>
              </Link>
              {user?.role === 'admin' ? (
                <DeletePostButton onClick={() => handleDeletePost(post._id)} ><BiTrash /></DeletePostButton>
              ) : null}
            </PostOuterOuterContainer>
          </PostContainer>

        ))}
        <div id="ward" />
      </Container>
    </>
  );
}
