import { injectGlobal } from 'styled-components';
import { theme, media } from '../components/styles'
import { lighten } from 'polished'

const ios = () => {
  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (typeof (navigator) === "undefined") return;

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()) { return true; }
    }
  }

  return false;
}

export const injectGlobalStyles = () => {
  return injectGlobal`
  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: #F3F4F8;
    color: ${theme.main.black};
    line-height: 1.8;
  }

  p, li, blockquote, a, span, mark, label {
    font-family: ${theme.main.fontSansSerif};
  }
  
  a {
    color: ${theme.main.blue};
    text-decoration: none;
    transition: all .15s linear, border .15s ease-in-out;
  }
  .gatsby-highlight pre code span, .gatsby-highlight pre code {
    font-size: 1.4rem;
    font-family: ${theme.main.fontSerifCode};
  }
  code {
    /* font-size: 1.6rem; */
    color: ${theme.main.black};
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
    padding: 1px 5px;
    font-family: ${theme.main.fontSerifCode};
    font-size: 85%;

  }
  p, li, a, blockquote  {
    font-weight: ${ios() ? 500 : 300};
    ${media.medium`
      font-weight: 300;
    `}
    line-height: 1.8;
  }
  .content {
    h1, h2, h3, h4, h5, h6 {
      font-weight: 400;
      line-height: 1.5;
    }
    h1 { font-size: 3.6rem;  }
    h2 { font-size: 3rem; }
    h3 { font-size: 2.4rem; }
    h4 { font-size: 2.0rem; }
    h5 { font-size: 1.6rem; }
    h6 { font-size: 1.4rem; }
    a {
      border-bottom: 2px solid ${lighten(0.3, theme.main.blue)};
      &:hover {
        border-bottom-color: ${lighten(0.15, theme.main.blue)};
        color: ${lighten(0.1, theme.main.blue)}
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2em;
    grid-gap: 2em; /* firefox */
  }
`
}