import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  *{
    padding: 0%;
    margin: 0;
    box-sizing: border-box;
  }

  body,html,#root{
    height: 100vh;
    width: 100%;
    
    font-family: ${({ theme }) => theme.fonts.poppins};

    overflow-x: hidden;

  }

  button,input{
    outline: 0;
    border:0;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: inherit
  }

  ul,ol{
    list-style: none;
  }

`;
