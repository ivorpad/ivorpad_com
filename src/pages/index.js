import React from 'react'
import Introduction from '../components/Introduction';
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/styles'


const IndexPage = (props) => (
	<ThemeProvider theme={theme}>
		<Layout>
			<Introduction {...props} />
		</Layout>
	</ThemeProvider>
)

export default IndexPage

export const query = graphql`
 query GetIntro {
	contentfulIntroduction {
		title
		featuredImage {
			resize(width:200) {
				src
				height
			}
    }
		createdAt
		content {
			childMarkdownRemark {
				html
			}
		}
	}
	contentfulAuthor {
    name
  }
}`