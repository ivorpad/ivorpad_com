import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import Header from './header'
import Footer from './Footer'
import styled from 'styled-components'
import { theme, media } from '../components/styles'
import { GlobalStyle } from '../styles/globalStyles'

const HomepageWrapper = styled.div`
  
  ${media.medium`
    height: 100vh;
    display: flex;
    flex-direction: column;
  `}

  .main {
    flex: 1;
    margin-top: 3rem;
    @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
      margin-top: 10rem;
    }
    ${media.large`
      margin-top: 10rem;
    `};
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
              title={`${data.site.siteMetadata.title} | Full Stack Web Developer & Designer`}
              meta={[
                {
                  name: 'description',
                  content:
                    "I'm a passionate Full Stack Web Developer who enjoys working with JavaScript. I also like to design and build beautiful and minimalistic interfaces.",
                },
                {
                  name: 'keywords',
                  content:
                    'javascript, developer, senior developer, web, web developer, frontend developer',
                },
                {
                  name: 'viewport',
                  content: 'width=device-width,user-scalable=no'
                }
              ]}
            />
            <HomepageWrapper>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header siteTitle={data.site.siteMetadata.title} />
                <Container className="main">{children}</Container>
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
