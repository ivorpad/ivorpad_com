import React from 'react';
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const { title } = data.contentfulPage.title;
  const { html: body } = data.contentfulPage.body.childMarkdownRemark;

  return (
    <Layout>
     <div className="content">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }} ></div>
     </div>
    </Layout>
  )
}

export const query = graphql`
    query pageQuery($slug: String!) {
      contentfulPage(slug: { eq: $slug } ) {
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