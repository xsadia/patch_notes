import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const PostContainer = styled.div`
  width: 100%;
  max-width: 780px;
  height: 220px;
  background: var(--gray-800);
  padding: 16px 16px 50px 16px;
  border-radius: 8px;
  transition: filter 0.2s;


  &:hover {
    filter: brightness(1.2);
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

  p {
    font-size: 18px;
    line-height: 120%;
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