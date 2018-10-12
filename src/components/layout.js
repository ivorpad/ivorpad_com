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
import { injectGlobalStyles } from '../styles/globalStyles'

injectGlobalStyles();

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
            <Helmet 
              title={`${data.site.siteMetadata.title}`} 
              meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]} />
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
