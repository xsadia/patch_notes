import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 40px 0;

  #ward {
    background: var(--yellow);
    width: 100%;
    height: 100px;
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
`;

export const PostHeaderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 6px;
  }
`;

export const PostInfo = styled.div`
  background: #0a0a0a;
  height: 140px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

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

  p {
    font-size: 18px;
    line-height: 130%;

    background: var(--gray-800);
    padding: 24px;
    border-radius: 8px;
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

  textarea {
    margin-top: 16px;
    border-radius: 8px;
    resize: none;
    padding: 12px;
    font-size: 16px;
    font-weight: 500;

    &::placeholder {
      font-weight: 500;
      font-size: 14px;
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

  h4 {
    margin-bottom: 4px;
  }

  button {
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
  }

  & + div {
    margin-top: 16px;
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