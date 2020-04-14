import React from 'react';
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import {Helmet} from 'react-helmet'
import { PageWrapper } from '../components/styles';

export default ({ data, location }) => {

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