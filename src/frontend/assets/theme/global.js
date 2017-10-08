import { injectGlobal } from 'styled-components';
import harryPFont from '../fonts/HARRYP__.ttf';

const globalStyle = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro');

  @font-face {
    font-family: 'HarryP';
    src: url(${harryPFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
    color: #333;
  }

  h1 {
    font-family: 'HarryP';
    font-size: 3em;
  }
`;

export default globalStyle;
