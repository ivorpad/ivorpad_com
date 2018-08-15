import React, { Component } from 'react';
import { graphql, replace } from 'gatsby'
import WorkDetail from '../templates/work-detail'
export default class WorkTemplate extends Component {

  state = {
    isInModal: false
  }

  componentDidMount = () => {
    if (typeof this.props.location.state !== 'undefined' && this.props.location.state !== null && this.props.location.state.isInModal) {
      this.setState({
        isInModal: true
      })
    } 
  }

  render() {
    return <WorkDetail data={this.props.data} location={this.props.location} isInModal={this.state.isInModal} />
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