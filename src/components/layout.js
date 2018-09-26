import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, injectGlobalStyles, theme } from './styles'
import { ThemeProvider, withTheme, injectGlobal } from 'styled-components'
import { lighten, darken } from 'polished'

import Header from './header'
import './layout.scss'
 
class Layout extends React.Component {
  render() {
    const { children, data, theme } = this.props;

    injectGlobalStyles(theme)

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
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <ThemeProvider theme={theme}>
              <Header siteTitle={data.site.siteMetadata.title} />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Container>{children}</Container>
            </ThemeProvider>
          </>
        )}
      />
    )
  }
}

export default withTheme(Layout)
