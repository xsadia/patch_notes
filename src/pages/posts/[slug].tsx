import { Header } from "components/Header";
import { FiArrowLeft } from 'react-icons/fi';
import { BiTrash } from 'react-icons/bi';
import { ImSpinner } from 'react-icons/im';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import Head from 'next/head';
import { PostBody, BackButton, CommentContainer, PostBodyContainer, Comment, SendButtonContainer, CommentBody, PostHeaderContainer, PostHeaderInfoContainer, NoComment, CommentForm, DeleteCommentButton, CommentButtonsContainer, LikeCommentButton, SpinnerContainer } from '../../styles/pages/Posts';
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { api } from "services/api";
import { FormEvent, useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useAuth } from "hooks/useAuth";
import { Spinner } from "components/Spinner";

type Comment = {
  likes: string[];
  _id: string;
  content: string;
  owner: User;
  createdAt: string;
};

type User = {
  username: string;
  _id: string;
};

type Post = {
  _id: string;
  title: string;
  content: string;
  comments: Comment[];
  user: User;
  createdAt: string;
};

export default function Post() {
  const { query, push } = useRouter();
  const { slug } = query;
  const [post, setPost] = useState<Post>({} as Post);
  const [comments, setComments] = useState<Comment[]>([] as Comment[]);
  const [textAreaData, setTextAreaData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLikeLoading, setIsLikeLoading] = useState(false);
  const { user, isAuthenticated } = useAuth();

  const getPost = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get(`posts/${slug}`);
    setPost(response.data.post);
    setComments([...response.data.comments]);
    setIsLoading(false);
  }, []);

  const handlePostComment = async (event: FormEvent) => {
    event.preventDefault();

    if (!isAuthenticated) {
      push('/');
    }

    if (textAreaData === '' || textAreaData === ' ') {
      return;
    }

    await api.post(`/comments/${slug}`, { content: textAreaData });

    const response = await api.get(`posts/${slug}`);

    setComments([...response.data.comments]);

    setTextAreaData('');
  };

  const handleDeleteComment = async (id: string) => {
    await api.delete(`/comments/${slug}/${id}`);

    const remainingComments = comments.filter(comment => comment._id !== id);

    setComments([...remainingComments]);
  };



  const handleLikeComment = async (id: string) => {
    setIsLikeLoading(true);
    await api.put(`/comments/${slug}/${id}/like`);
    setIsLikeLoading(false);
  };

  useEffect(() => {
    if (isLikeLoading) {
      return;
    }
    getPost();
  }, [getPost, isLikeLoading]);

  return (
    <>
      <Head>
        <title>
          Patch notes
        </title>
      </Head>
      <Header />
      <PostBodyContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <PostHeaderContainer>
              <PostHeaderInfoContainer>
                <h1>{post.title}</h1>
                <h4>{new Date(post.createdAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}</h4>
                <h5>{post.user?.username}</h5>
              </PostHeaderInfoContainer>
              <Link href="/posts"><BackButton> <FiArrowLeft /> Voltar</BackButton></Link>
            </PostHeaderContainer>

            <PostBody dangerouslySetInnerHTML={{ __html: post.content }} />
            <CommentContainer>
              {comments.length !== 0 ? (
                comments.map(comment => (
                  <Comment key={comment._id}>
                    <CommentBody>
                      <h4>{comment.owner.username}</h4>
                      <p>{comment.content}</p>
                    </CommentBody>
                    <CommentButtonsContainer>
                      {user
                        ? comment.owner._id === user._id
                          ? <DeleteCommentButton onClick={() => handleDeleteComment(comment._id)}><BiTrash /></DeleteCommentButton> : null : null}
                      {isLikeLoading
                        ? <SpinnerContainer ><ImSpinner /></SpinnerContainer>
                        : (
                          <LikeCommentButton onClick={() => handleLikeComment(comment._id)} >
                            {comment.likes.some(like => like === user?._id)
                              ? <AiFillLike />
                              : <AiOutlineLike />}{comment.likes.length}
                          </LikeCommentButton>
                        )
                      }
                    </CommentButtonsContainer>
                  </Comment>
                ))
              ) : (
                <Comment>
                  <CommentBody>
                    <NoComment>Nenhum comentário no momento :(</NoComment>
                  </CommentBody>
                </Comment>
              )}
              <CommentForm onSubmit={handlePostComment} >
                <textarea placeholder="Escreva um comentario..." value={textAreaData} onChange={e => setTextAreaData(e.currentTarget.value)} cols={50} rows={2}></textarea>
                <SendButtonContainer>
                  <button type='submit'>Comentar</button>
                </SendButtonContainer>
              </CommentForm>
            </CommentContainer>
          </>
        )}
      </PostBodyContainer>
    </>
  );
}