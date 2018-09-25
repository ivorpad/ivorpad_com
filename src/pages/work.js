import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

const WorkSection = styled.div`
  margin-top: 30px;
`

export default class WorkPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data.allContentfulWork.edges,
    }
  }

  render() {
    return (
      <Layout>
        <WorkSection>
          <div className="content grid">
            {this.state.data.map(({ node: post }) => {
              return (
                <div key={post.id} className="work__item">
                  <img src={post.featuredImage.resize.src} alt="" />
                  <h3 className="work__title">
                    <Link to={`/work/${post.slug}`} state={{ isInModal: true }}>
                      {post.title.title}
                    </Link>
                  </h3>
                </div>
              )
            })}
          </div>
        </WorkSection>
      </Layout>
    )
  }
}

export const query = graphql`
  query GetWorkItems {
    allContentfulWork {
      edges {
        node {
          slug
          id
          title {
            title
          }
          body {
            childMarkdownRemark {
              html
            }
          }
          featuredImage {
            resize(width: 300) {
              width
              height
              src
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`
