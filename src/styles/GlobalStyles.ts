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
    --secondary: #181818;
    --white: #fff;
    --content: #aaa;
    --netflix: #E50914;
    --light-container: rgba(51,51,51,.1);
    --light-border: #BAB9B8;
    --lighter-border: #565656;
    --dot: #646464;
    --light-button: rgba(109, 109, 110, 0.4);
    --light-button-hover: rgba(109, 109, 110, 0.7);
    --dark-text: #000;
    --highlighted-text: #46D369;
  }
`;
