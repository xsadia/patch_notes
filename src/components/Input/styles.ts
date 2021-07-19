import styled, { css } from "styled-components";

type InputContainerProps = {
  isFilled: boolean;
};

export const InputContainer = styled.div<InputContainerProps>`
  margin-bottom: 16px;

  input {
    width: 320px;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    font-weight: 500;
    border: 4px solid var(--gray-800);


    ${props => props.isFilled && css`
      border-color: var(--yellow-600);
    `}

    /* &::placeholder {
      font-weight: 500;
      font-size: 16px;

    } */

    &:focus {
      border-color: var(--yellow-600);
    }
  }
`;