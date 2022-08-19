import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
        --color-primary:#FF577F;
        --color-primary-focus:#FF427F;
        --color-primary-negative:#59323F;

         /* gray tones  */
        --color-gray-0:#F8F9FA;
        --color-gray-1:#868E96;
        --color-gray-2:#343B41;
        --color-gray-3:#212529;
        --color-gray-4:#121214;

        /* feedback pallete  */
        --color-sucess:#3FE864;
        --color-negative:#E83F5B;
    }
    body{
      background-color: var(--color-gray-4);
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  ul,ol,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }
  * {
    scrollbar-width: auto;
    scrollbar-color: #d7d4d8 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: var(--color-gray-3);
    border-radius:0 4px 4px 0;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-2);
    border-radius: 10px;
    border: 3px solid var(--color-gray-3);
  }
`;
export default GlobalStyle;
