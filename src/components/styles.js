import styled, { css, injectGlobal } from 'styled-components'
import { lighten, darken } from 'polished'

const sizes = {
  large: 1200,
  desktop: 992,
  medium: 768,
  small: 576,
};

export const theme = {
  main: {
    black: "#3d3d3d",
    blue: "#3d5afe",
    grey: "#828282",
    fontSerif: "'Merriweather', serif",
    fontSansSerif: "'Montserrat', sans-serif"
  }
}

// Iterate through the sizes and create a media template
/* eslint-disable-next-line no-unused-vars */
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {});

// Usage
// ${media.small`
//     background: red !important;
// `}


export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`

export const injectGlobalStyles = (theme) => {
  return injectGlobal`
      :root {
        font-size: 62.5%;
      }
      body {
        font-size: 1.6rem;
        background: #F3F4F8;
        color: ${theme.main.black};
      }
      a {
        color: ${theme.main.blue};
        text-decoration: none;
      }
      .content {
        p {
          font-family: ${theme.main.fontSerif};
          font-size: 1.6rem;
          font-weight: 300;
        }
        a {
          border-bottom: 2px solid ${lighten(0.3, `${theme.main.blue}`)};
          &:hover {
            border-bottom-color: ${lighten(0.15, `${theme.main.blue}`)};
            color: ${lighten(0.1, `${theme.main.blue}`)}
          }
        }
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 2em;
        grid-gap: 2em; /* firefox */
      }
    `

}

// .content {
//   p {
//     font-family: $primary-font-serif;
//     font-size: 1.6rem;
//     font-weight: 300;
//   }
//   a {
//     border-bottom: 2px solid lighten($primary-blue, 30%);
//     &:hover {
//       border-bottom-color: lighten($primary-blue, 15%);
//       color: darken($primary-blue, 10%)
//     }
//   }
// }