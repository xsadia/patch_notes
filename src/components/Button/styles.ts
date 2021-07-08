import styled from "styled-components";

export const Container = styled.div`
  button {
    padding: 10px;
    width: 320px;
    border-radius: 4px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 500;
    border: none;
    background: var(--yellow);
    transition: filter 0.2s;


    &:hover {
      filter: brightness(0.8);
    }
  }
`;