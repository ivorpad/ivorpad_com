import React, { Component } from 'react';
import { graphql } from 'gatsby'
import WorkDetail from '../templates/work-detail'

export default class WorkTemplate extends Component {

  render() {
    let isModal = false
    if (
    	typeof window !== `undefined` &&
    	window.___IVORPAD_INITIAL_RENDER_COMPLETE
    ) {
    	isModal = true
    }
    
    return (
      <WorkDetail
        data={this.props.data}
        location={this.props.location}
        isModal={isModal}
      />
    )
  }
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