import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default ({data}) => {
  const { title } = data.contentfulPost.title;
  const { html: body } = data.contentfulPost.body.childMarkdownRemark;

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: body}} ></div>
    </Layout>
  )
}

export const query = graphql `
    query blogQuery($slug: String!) {
      contentfulPost(slug: { eq: $slug } ) {
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