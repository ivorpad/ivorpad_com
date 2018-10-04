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


export const Container = styled.div`
  width: 60%;


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