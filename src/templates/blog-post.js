import React from 'react';
import Layout from '../components/layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'

const BlogPostWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  padding: 5rem;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
`

export default ({data}) => {
  const { title } = data.contentfulPost.title;
  const { html: body } = data.contentfulPost.body.childMarkdownRemark;

  return (
    <Layout>
      <BlogPostWrapper className="content">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }} ></div>
      </BlogPostWrapper>
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