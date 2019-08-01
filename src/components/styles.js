import styled, { css } from 'styled-components'

const sizes = {
  extraLarge: 1800,
  large: 1440,
  desktop: 992,
  medium: 768,
  small: 576,
};

export const theme = {
  main: {
    black: '#3d3d3d',
    blue: '#3d5afe',
    grey: '#828282',
    fontSerif: "'Merriweather', serif",
    fontSansSerif: "'Montserrat', sans-serif",
    fontSerifCode: "'Fira Mono', monospace"
  },
}

// Iterate through the sizes and create a media template
/* eslint-disable-next-line no-unused-vars */
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {});

export const PageWrapper = styled.div`
  width: 100%;
  ${media.large`
    width: 80%;
  `} 
  
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  padding: 3rem;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
`

export const Container = styled.div`
  width: 90%;
  position: relative;

  ${media.small`
    width: 80%;
  `}

  ${media.medium`
    width: 60%;
  `}

  ${media.large`
    width: 60%;  
  `} 

  ${media.extraLarge`
    width: 60%;
  `} 


  margin: 0 auto;
`