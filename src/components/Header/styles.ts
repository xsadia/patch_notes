import styled from "styled-components";

export const FixedContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
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
`;

export const Container = styled.header`
  width: 100vw;
  height: 100px;
  background: var(--yellow);
  display: flex;
  align-items: center;


`;

export const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;

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
    font-size: 20px;
    margin-top: 5px;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;


export const UserGreeting = styled.h3`
  color: #000;
  margin: 4px 0 0 12px;
  span {
    color: blue;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  background: none;
  border: none;
  margin: 0 16px 0 10px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }

  svg {
    font-size: 20px;
  }
`;