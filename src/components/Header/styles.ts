import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 120px;
  background: var(--yellow);
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;



  h1 {
    color: #000;
    margin-left: 40px;

    @media (max-width: 600px) {
      width: 100px;
      font-size: 16px;
    }
  }

  svg {
    color: #000;
    margin-left: 10px;
    font-size: 40px;

    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
`;

export const NavContainer = styled.div`
  margin-left: auto;
  margin-right: 24px;
  display: flex;

  h2 {
    color: #000;
    margin-right: 5px;
    transition: text-decoration 0.5s;

    @media (max-width: 600px) {
      font-size: 12px;
    }


    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 3px;
    }
  }

  svg {
    margin-right: 16px;
    font-size: 30px;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;