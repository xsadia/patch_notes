import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --yellow: #ECC94B;
    --gray-900: #171923;
    --gray-800: #1A202C;
    --gray-50: #F7FAFC;
    --yellow-600: #B7791F;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: var(--gray-900);
    color: var(--gray-50);
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: var(--gray-800);
    }

    ::-webkit-scrollbar-thumb {

      background: var(--yellow);
      border-radius: 8px;
    }
}

  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body, input, textarea, button {
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
    }

  h1, h1, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html {
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
  }
`;
