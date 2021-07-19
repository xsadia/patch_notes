import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 380px;
    height: 100%;
    max-height: 420px;
    background: #1A202C;
    border: 2px solid var(--yellow-600);
    padding: 74px;
    border-radius: 4%;

    label {
      font-size: 24px;
    }
  }
`;
