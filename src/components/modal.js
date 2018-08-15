import React, { Component } from 'react'
import Modal from "react-modal"
import { push } from "gatsby"
import Container from '../components/styles'

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
    //position: `absolute`,
    border: `none`,
    background: `white`,
    padding: 0,
    width: `60%`,
    margin: `0 auto`,
    overflow: `auto`,
    WebkitOverflowScrolling: `touch`,
    borderRadius: `0`,
    padding: `3em`
  },
}

export default class ItemsModal extends Component {
  render() {
    return <Modal 
        isOpen={this.props.isOpen} 
        style={style}
        onRequestClose={() => push(`/work`)}
        contentLabel="Modal"
      >
        {this.props.children}
    </Modal>
  }
}
