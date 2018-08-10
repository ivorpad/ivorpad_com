import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const { title } = data.contentfulWork.title;
  const { html: body } = data.contentfulWork.body.childMarkdownRemark;

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} ></div>
    </Layout>
  )
}

export const query = graphql`
    query workQuery($slug: String!) {
      contentfulWork(slug: { eq: $slug } ) {
        body {
          childMarkdownRemark {
            html
          }
        }
        title {
          title
        }
      }
    }
`