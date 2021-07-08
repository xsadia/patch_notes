import styled, { css } from "styled-components";

type InputContainerProps = {
  isFilled: boolean;
};

export const InputContainer = styled.div<InputContainerProps>`
  margin-bottom: 10px;

  input {
    width: 320px;
    border-radius: 8px;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    border: 4px solid var(--gray-800);

    ${props => props.isFilled && css`
      border-color: var(--yellow-600);
    `}

    &:focus {
      border-color: var(--yellow-600);
    }
  }
`;