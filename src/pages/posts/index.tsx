import { Header as MyHeader } from "components/Header";
import { Container, PostContainer, PostInfo } from '../../styles/pages/Posts';
import Header from 'next/head';
import Link from 'next/link';
import { usePosts } from "services/hooks/usePosts";
import { useEffect, useState } from "react";
import { api } from "services/api";
import { GetServerSideProps } from "next";
import { useInfiniteQuery } from "react-query";

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

type PostProps = {
  posts: Post[];
};

export default function Posts({ posts }: PostProps) {
  /* const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const { data, isLoading, isFetching, error } = usePosts(currentPage);
    setPosts((prevPosts) => [...prevPosts, ...data as Post[]]);
  }, []); */



  console.log(posts, 'posts');

  return (
    <>
      <Header>
        <title>
          Patch notes
        </title>
      </Header>
      <MyHeader />
      <Container>

        {posts.map(post => (
          <Link href={`/posts/${post._id}`}>
            <PostContainer>
              <PostInfo>
                <h1>{post.title}</h1>
                <h3>{post.subtitle}</h3>
              </PostInfo>
              <h4>{post.user.username}</h4>
              <h5>{new Date(post.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}</h5>
            </PostContainer>
          </Link>
        ))}
        <div id="ward" />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/posts');

  return {
    props: {
      posts: data
    }
  };
};