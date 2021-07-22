import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 0 0;

  #ward {
    width: 100%;
    height: 5px;
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  max-width: 780px;
  height: 220px;
  background: var(--gray-800);
  padding: 16px 16px 50px 16px;
  border-radius: 8px;
  transition: filter 0.2s;
  animation: 1s ease-out 0s 1 slideInFromLeft;

  @keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0.1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

  @media (max-width: 768px) {
    max-width: 640px;
  }

  @media (max-width: 640px) {
    max-width: 540px;
  }

  @media (max-width: 480px) {
    max-width: 320px;
  }

  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }

  h4 {
    margin-left: 10px;
    margin-top: 10px;
    color: #A0AEC0;
  }

  h5 {
    margin-left: 10px;
    color: #A0AEC0;
  }

  & + div {
    margin-top: 26px;
  }
`;

export const PostHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 960px;
  margin: 24px 0 10px 0;
  justify-content: space-between;

  animation: 1s ease-out 0s 1 slideFromLeft;

  @keyframes slideFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0.1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
`;

export const PostHeaderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 6px;
  }

  h5 {
    margin-top: 4px;
    color: var(--yellow);
  }
`;

export const PostInfo = styled.div`
  background: #0a0a0a;
  height: 140px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  animation: 1s ease-out 0s 1 slideFromTop;

  @keyframes slideFromTop {
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

  h1 {
    margin-top: 32px;
    margin-left: 32px;
  }

  h3 {
    margin-top: 16px;
    margin-left: 32px;
  }
`;

export const PostBody = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 960px;

  font-size: 18px;
    line-height: 130%;

    background: var(--gray-800);
    padding: 24px;
    border-radius: 8px;


  animation: 1s ease-out 0s 1 slideFromLeft;

  @keyframes slideFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0.1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

  @media (max-width: 1024px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 640px;
  }

  @media (max-width: 640px) {
    max-width: 540px;
  }

  @media (max-width: 480px) {
    max-width: 320px;
    h1 {
      font-size: 16px;
    }

    h4 {
      font-size: 10px;
    }
  }




  h1 {
    margin-bottom: 10px;
    margin-top: 24px;
  }

  h4 {
    color: #A0AEC0;
    margin-bottom: 10px;
  }

`;

export const BackButton = styled.button`

  background: none;
  color: var(--gray-50);
  border: none;
  font-size: 16px;
  transition: filter 0.2s;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const PostBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentContainer = styled.div`
  width: 100%;
  max-width: 950px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0;
  padding: 24px;
  border-radius: 8px;
  background: var(--gray-800);

  animation: 1s ease-out 0s 1 slideFromLeft;

  @keyframes slideFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0.1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}


`;

export const Comment = styled.div`
  padding: 8px;
  background: #38404f;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid var(--gray-900);

  animation: 1s ease-out 0s 1 slideFromTop;

  @keyframes slideFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0.1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

  h4 {
    margin-bottom: 4px;
  }

  & + div {
    margin-top: 16px;
  }
`;

export const CommentButtonsContainer = styled.div`
  width: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LikeCommentButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: var(--gray-50);
  transition: color 0.2s;

  &:hover{
    color: #3bca4e;
  }

  svg {
    font-size: 18px;
  }
`;

export const SpinnerContainer = styled.h1`
//padding: 180px;
 svg {

     font-size: 16px;
     animation-name: spin;
     animation-duration: 700ms;
     animation-iteration-count: infinite;
     animation-timing-function: linear;

 @keyframes spin {
   from {
     transform: rotate(0deg);
   }

   to {
     transform: rotate(360deg);
   }
 }
}
`;

export const DeleteCommentButton = styled.button`
    background: none;
    border: none;
    color: var(--gray-50);
    transition: color 0.2s;

    &:hover {
      color: #eb1c50;
    }

    svg {
      font-size: 18px;

    }
`;

export const CommentBody = styled.div`

`;

export const SendButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: flex-end;

    button {
      background: none;
      border: none;
      transition: filter 0.2s;
      font-size: 16px;
      color: var(--gray-50);
      border: 2px solid #A0AEC0;
      margin-top: 24px;
      padding: 8px;
      border-radius: 8px;
      background: #38404f;

      &:hover {
        filter: brightness(0.8);
      }
    }
`;

export const FormContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreatePostContainer = styled.form`
  height: 500px;
  width: 720px;
  margin: 0 auto;
  border: 2px solid var(--yellow);
  margin-top: 50px;
  padding: 8px;
  background: var(--gray-800);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .cu {
    background: var(--gray-50);
    width: 660px;
    height: 50%;
    border: 3px solid var(--yellow);
    border-radius: 6px;
    color: black;
    font-weight: 500;
    margin: 0 auto;

  }

  .ql-editor {
    border-top: 1px solid var(--yellow);

    ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-50);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-800);
    border-radius: 8px;
  }
}


  .ql-snow {
    border: none;
  }

  .ql-container {
    font-size: 16px;
    height: 155px;
  }

`;

export const CreatePostInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CreatePostLabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-left: 2px;
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 18px;
`;

export const SubmitPostButton = styled.button`
  width: 95%;
  margin: 0 auto;
  padding: 12px;
  background: var(--yellow);
  border-radius: 24px;
  border: 2px solid var(--gray-900);
  font-weight: 500;
  font-size: 16px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const NoComment = styled.h4`
  padding: 16px;
`;

export const CommentForm = styled.form`
  width: 100%;
  textarea {
    width: 100%;
    margin-top: 16px;
    border-radius: 8px;
    resize: none;
    padding: 12px;
    font-size: 16px;
    font-weight: 500;

    animation: 1s ease-out 0s 1 slideFromTop;

  @keyframes slideFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0.1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  }


    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #fff;
    }

    ::-webkit-scrollbar-thumb {

      background: var(--yellow);
      border-radius: 8px;
    }

    &::placeholder {
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const LoginButtonContainer = styled.div`
  width: 40.5%;
  padding: 0 0 16px 0;
  display: flex;
  justify-content: flex-end;


`;

export const LoginButton = styled.button`
  color: var(--gray-50);
  font-weight: 500;
  font-size: 20px;
  border: none;
  background: none;
  transition: filter 0.5s;


  &:hover {
    filter: brightness(0.8);
  }
`;

export const UnderlineContainer = styled.div`
animation: 1s ease-out 0s 1 slideFromRight;

  @keyframes slideFromRight {
    0% {
      transform: translateX(200%);
      opacity: 0.1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const CustomUnderline = styled.div`
  background: var(--yellow);
  height: 3px;
  margin-top: 3px;
`;

export const PostOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostOuterOuterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeletePostButton = styled.button`
  background: none;
  margin-top: 10px;
  border: none;
  display: flex;
  align-items: center;
  color: var(--gray-50);
  transition: color 0.2s;

  &:hover {
    color: #c93030;
  }
  svg {
    font-size: 20px;
  }
`;