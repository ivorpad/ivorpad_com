import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql, Link, PageRenderer } from 'gatsby'


export default class WorkPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
       data: props.data.allContentfulWork.edges
    }
  }

  render() {

    return (
    <Layout>
      <div className="content grid">
        {this.state.data.map(({node}, i) => {
          return <div key={i} className="work__item">
              <h3 className="work__title">
                <Link to={{
                  pathname: `/work/${node.slug}`,
                  state: {
                    isInModal: true
                  }
                }}>
                  {node.title.title}
                </Link>

              </h3>
              <img src={node.featuredImage.resize.src} alt="" />
            </div>
        })}
      </div>
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