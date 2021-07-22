import { Header } from "components/Header";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { BackButton, BackButtonContainer, CreatePostContainer, CreatePostInputContainer, CreatePostLabelInputContainer, FormContainer, SubmitPostButton } from "styles/pages/Posts";
import { Input } from '../../components/Input';
import 'react-quill/dist/quill.snow.css';
import { FormEvent, useState } from "react";
import dynamic from "next/dynamic";
import { api } from "services/api";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "hooks/useAuth";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CreatePost() {
  const [quillData, setQuillData] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const { user } = useAuth();

  const Router = useRouter();

  useEffect(() => {
    if (user?.role !== 'admin') {
      Router.push('/posts');
    }
  });

  //TODO Set errors and validation
  const handleCreatePost = async (event: FormEvent) => {
    event.preventDefault();
    await api.post('/posts', { title, subtitle, content: quillData });

    Router.push('/posts');
  };

  return (
    <>
      <Header />
      <FormContainer onSubmit={handleCreatePost} >
        <CreatePostContainer>
          <BackButtonContainer>
            <Link href="/posts"><BackButton> <FiArrowLeft /> Voltar</BackButton></Link>
          </BackButtonContainer>
          <CreatePostInputContainer>
            <CreatePostLabelInputContainer>
              <label htmlFor="title">Título</label>
              <Input
                id="title"
                placeholder="Título"
                type="text"
                name="title"
                value={title}
                onChange={e => setTitle(e.currentTarget.value)}
              />
            </CreatePostLabelInputContainer>
            <CreatePostLabelInputContainer>
              <label htmlFor="email">Subtítulo</label>
              <Input
                id="subtitle"
                placeholder="Subítulo"
                type="text"
                name="subtitle"
                value={subtitle}
                onChange={e => setSubtitle(e.currentTarget.value)}
              />
            </CreatePostLabelInputContainer>
          </CreatePostInputContainer>
          <ReactQuill className='cu' value={quillData} onChange={setQuillData} />
          <SubmitPostButton type="submit" >Enviar</SubmitPostButton>
        </ CreatePostContainer>
      </FormContainer>
    </>
  );
};

CreatePost.getInitialProps = async () => {
  return {};
};