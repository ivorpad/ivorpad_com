import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const sizes = {
  extraLarge: 1200,
  large: 992,
  medium: 768,
  small: 576,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `
  return acc
}, {});

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`
export const TopbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`
export const Topbar = styled.div`
  width: 100%;
  background: white;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  border-bottom: 1px solid #e8e8e8;
  -webkit-font-smoothing: subpixel-antialiased;
`

export const LogoLink = styled(Link)`
  color: #3d3d3d;
  font-weight: bold;
  font-family: Merriweather, serif;
  text-decoration: none;

  &:hover {
    color: #3d5afe;
  }
`

export const Logo = styled.h1`
  color: #3D3D3D;
  font-size: 1.8em;
  margin: 0;
`