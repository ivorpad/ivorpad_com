import React, { Component } from 'react'
import { PageRenderer } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { media } from '../components/styles'
import Helmet from 'react-helmet'

const WorkWrapper = styled.div`
${media.medium`
  width: 80%;
`}
  width: 100%;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  padding: 3rem;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
`

let Modal
import(`../components/modal`).then(modal => {
  Modal = modal.default
})
let windowWidth;

class WorkDetail extends Component {

  render() {
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
        <Helmet title={`Ivor | ${title.title}`} />
        <Modal isOpen={true} location={this.props.location}>
         <div className="content">
            <h3>{title.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
          </div>
        </Modal>
      </>
    }

    return <Layout>
      <WorkWrapper className="content">
        <h1>{title.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
      </WorkWrapper>
    </Layout>
  }
}

export default WorkDetail