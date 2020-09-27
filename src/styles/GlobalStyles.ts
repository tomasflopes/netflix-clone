import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html,body, :root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #141414;
    --white: #fff;
    --content: #aaa;
    --netflix: #E50914;
  }
`;
