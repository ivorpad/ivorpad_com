import React from 'react'
import { Link } from 'gatsby';
import Introduction from '../components/Introduction';
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = (props) => (
  <Layout>
     <Introduction {...props} />
  </Layout>
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