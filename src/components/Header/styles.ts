import styled from "styled-components";

export const FixedContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
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
  align-items: center;

  h1 {
    color: #000;
    margin-left: 40px;

    @media (max-width: 768px) {
      //width: 100px;
      font-size: 16px;
    }

    @media (max-width: 480px) {
      /* width: 100px; */
      font-size: 12px;
      margin-left: 10px;
      margin-right: 10px;
    }

    @media (max-width: 411px) {
      font-size: 8px;
      margin: 0 8px 0 10px;
    }
  }

  svg {
    color: #000;
    margin-left: 10px;
    font-size: 40px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      margin: 0;
    }

    @media (max-width: 411px) {
      font-size: 8px;
      margin: 0;
    }
  }
`;

export const NavContainer = styled.div`
  margin-left: auto;
  margin-right: 24px;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    margin-right: 0;
  }


  h2 {
    color: #000;
    margin-right: 5px;
    transition: text-decoration 0.5s;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }

    @media (max-width: 411px) {
      font-size: 8px;
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

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 0 6px 0 0;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      margin: 0 4px 0 0;
    }


    @media (max-width: 411px) {
      font-size: 10px;
      margin: 0 4px 0 0;
    }
  }
`;


export const UserGreeting = styled.h3`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  span {
    color: blue;
    margin-left: 8px;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
      font-size: 10px;
      margin: 0 0 0 8px;
    }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  margin: 0 16px 0 10px;
  transition: color 0.2s;

  @media (max-width: 768px) {
    margin: 0 12px 0 10px;
  }

  @media (max-width: 480px) {
    margin: 0;
  }

  &:hover {
    color: #c93030;
  }

  svg {
    font-size: 20px;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;