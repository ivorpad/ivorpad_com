import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import Header from './header'
import Footer from './Footer'
import styled, { injectGlobal } from 'styled-components'
import { theme, media } from '../components/styles'
import { lighten } from 'polished';


injectGlobal`
  :root {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    background: #F3F4F8;
    color: ${theme.main.black};
    line-height: 1.8;
  }
  a {
    color: ${theme.main.blue};
    text-decoration: none;
    transition: all .15s linear, border .15s ease-in-out;
  }
  code {
    font-size: 1.4rem
  }
  .content {
    p {
      font-family: ${theme.main.fontSansSerif};
      font-weight: 500;
      ${media.medium`
        font-weight: 300;
      `}
      line-height: 1.8;
    }
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

const HomepageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
`

class Layout extends React.Component {
  
  render() {

    const { children } = this.props;

    return <StaticQuery query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `} render={data => <>
            <Helmet title={data.site.siteMetadata.title} meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]} />
            <HomepageWrapper>
              <ThemeProvider theme={theme}>
                <Header siteTitle={data.site.siteMetadata.title} />
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Container className="main">
                  {children}
                </Container>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Container className="footer">
                  <Footer />
                </Container>
              </ThemeProvider>
            </HomepageWrapper>
          </>} />
  }
}

export default Layout
