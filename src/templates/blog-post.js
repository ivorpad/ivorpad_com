import React from 'react';
import Layout from '../components/layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { media } from '../components/styles'
import Helmet from 'react-helmet'

const BlogPostWrapper = styled.div`
  width: 100%;

  ${media.large`
    width: 60%;
  `}

  margin: 0 auto;
  background: white;
  border-radius: 5px;
  padding: 3rem;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
`

export default ({data}) => {
  const { title } = data.contentfulPost.title;
  const { html: body } = data.contentfulPost.body.childMarkdownRemark;

  return (
    <Layout>
      <Helmet title={`${data.site.siteMetadata.title} | ${title}`} />
      <BlogPostWrapper className="content">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </BlogPostWrapper>
    </Layout>
  )
}

export const blogQuery = graphql `
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
    site {
      siteMetadata {
        title
      }
    }
  }
`