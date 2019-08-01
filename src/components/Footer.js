import React, { Fragment } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

const FooterWrapper = styled.div`
  border-top: 1px solid ${props => lighten(0.66, props.theme.main.black)};
  padding-top: 2rem;
  font-family: ${props => props.theme.main.fontSansSerif};
  font-size: 1.1rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  color: ${props => lighten(0.2, props.theme.main.black)};
  /* font-weight: 300; */
  a {
    border-bottom: 2px solid ${props => lighten(0.3, props.theme.main.blue)};
    &:hover {
      border-bottom-color: ${props => lighten(0.15, props.theme.main.blue)};
      color: ${props => lighten(0.1, props.theme.main.blue)};
    }
  }
`

const Footer = () => {
  return <Fragment>
      <FooterWrapper>
        <div className="footer__left">
          <p>&copy; 2018 Ivor Padilla</p>
        </div>
        <div className="footer__right">
          <p>
            Built with <a href="https://gatsbyjs.org">GatsbyJS</a> and <a href="https://www.contentful.com/">
              Contentful
            </a>
          </p>
        </div>
      </FooterWrapper>
    </Fragment>
}

export default Footer
