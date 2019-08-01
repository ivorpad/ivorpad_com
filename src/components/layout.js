import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import Header from './header'
import Footer from './Footer'
import styled, { injectGlobal } from 'styled-components'
import { theme, media } from '../components/styles'
import { lighten } from 'polished'
import { injectGlobalStyles } from '../styles/globalStyles'

injectGlobalStyles()

const HomepageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    margin-top: 3rem;
    @media screen {
    }
    margin-bottom: 5rem;

    @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
      margin-top: 10rem;
    }
  }
`

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={`${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: 'description',
                  content:
                    "I'm a passionate Front- End Web Developer who enjoys working with JavaScript. I also like to design and build beautiful and minimalistic interfaces.",
                },
                {
                  name: 'keywords',
                  content:
                    'javascript, developer, senior developer, web, web developer, frontend developer',
                },
              ]}
            />
            <HomepageWrapper>
              <ThemeProvider theme={theme}>
                <Header siteTitle={data.site.siteMetadata.title} />
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Container className="main">{children}</Container>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Container className="footer">
                  <Footer />
                </Container>
              </ThemeProvider>
            </HomepageWrapper>
          </>
        )}
      />
    )
  }
}

export default Layout
