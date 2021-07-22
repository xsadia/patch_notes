import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: 1s ease-out 0s 1 slideFromTop;

  @keyframes slideFromTop {
  0% {
    transform: translateY(-20%);
    opacity: 0.1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 380px;
    height: 100%;
    max-height: 520px;
    background: #1A202C;
    border: 2px solid var(--yellow-600);
    padding: 74px;
    border-radius: 4%;

    label {
      font-size: 24px;
    }
  }
`;

export const RedirectButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  background: none;
  border: none;
  color: var(--gray-50);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  span {
    display: flex;
    align-items: center;
    color: var(--yellow);
    margin-left: 4px;
  }

  svg {
    margin-left: 8px;
  }
`;

export const FormHeader = styled.h1`
  margin-bottom: 24px;
`;