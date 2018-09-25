import React, { Component } from 'react'
import { PageRenderer } from 'gatsby'
import Layout from '../components/layout'

let Modal
import(`../components/modal`).then(modal => {
  Modal = modal.default
})
let windowWidth;

export default class WorkDetail extends Component {

  render() {
    console.log(this.props)
    const { body, title } = this.props.data.contentfulWork;

    let isInModal = false
    if (!windowWidth && typeof window !== `undefined`) {
      windowWidth = window.innerWidth
    }
    if (this.props.isModal && windowWidth > 750) {
      isInModal = true
    }
    
    if (isInModal && Modal) {
      return <>
        <PageRenderer location={{ pathname: `/work` }} />
        <Modal isOpen={true} location={this.props.location}>
          <h3>{title.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
        </Modal>
      </>
    }

    return <Layout>
      <div className="content">
        <h1>{title.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
      </div>
    </Layout>
  }

}
