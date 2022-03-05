import { createGlobalStyle } from 'styled-components'


export const GLobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    body, html {
        font-family: 'Saira Semi Condensed', sans-serif;
        text-size-adjust: none;
        font-size: 100%;
        height: 100%;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
    }
    body {
        background: #fff;
    }
    h1, h2,h3,h4,h5,h6, p, span, strong,button {
      -webkit-font-smoothing: antialiased;
      font-family: 'Saira Semi Condensed', sans-serif;
        text-size-adjust: none;
    }
    @media(max-width: 800px) {
      html: font-size: 15px;
    }
    @media(max-width: 500px) {
      html {
        font-size: 16px;
      }
    }
`;