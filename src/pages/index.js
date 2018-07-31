import React from 'react'
import { Link } from 'gatsby';
import Introduction from '../components/Introduction';

import Layout from '../components/layout'

const IndexPage = (props) => (
  <Layout>
     <Introduction {...props} />
  </Layout>
)

export default IndexPage

export const query = graphql `
 query GetIntro {
	contentfulIntroduction {
    title
    featuredImage {
      file {
        url
      }
    }
		createdAt
		content {
			childMarkdownRemark {
				html
			}
		}
	}
}`