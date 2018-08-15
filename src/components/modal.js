import React, { Component } from 'react'
import Modal from "react-modal"
import { push } from "gatsby"

Modal.setAppElement(`#___gatsby`);

const style = {
  overlay: {
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
  },
  content: {
    border: `none`,
    background: `#F3F4F8`,
    width: `50%`,
    margin: `0 auto`,
    overflow: `auto`,
    WebkitOverflowScrolling: `touch`,
    borderRadius: `0`,
    padding: `3em`,
  },
}

export default class ItemsModal extends Component {

  afterOpenModal = () => {
    push({
      ...this.props.location,
      state: {}
    })
  }

  render() {
    return <Modal 
        isOpen={this.props.isOpen} 
        style={style}
        onRequestClose={() => push(`/work`)}
        contentLabel="Modal"
        onAfterOpen={this.afterOpenModal}
      >
        {this.props.children}
    </Modal>
  }
}
