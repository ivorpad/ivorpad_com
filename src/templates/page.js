import React from 'react';
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { media } from '../components/styles'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const PageWrapper = styled.div`
 
  width: 100%;

  ${media.medium`
    width: 60%;
  `}

  margin: 0 auto;
  background: white;
  border-radius: 5px;
  padding: 3rem;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
`

export default ({ data }) => {
  const { title } = data.contentfulPage.title;
  const { html: body } = data.contentfulPage.body.childMarkdownRemark;

  return <Layout>
      <PageWrapper className="content">
        <Helmet title={`${data.site.siteMetadata.title} | ${title}`} />
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </PageWrapper>
    </Layout>
}

export const pageQuery = graphql`
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
    site {
      siteMetadata {
        title
      }
    }
  }
`