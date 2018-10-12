import React, { Component } from 'react';
import Layout from '../components/layout'
// import { graphql } from 'gatsby'
// import { media } from '../components/styles'
import styled from 'styled-components'
// import Helmet from 'react-helmet'

const Form = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
  }
`

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleForm = e => {
    e.preventDefault();

    const {
      name,
      email,
      message
    } = this.state;

    console.log(name)

    const formData = {
      name,
      email,
      message
    }

    fetch(`https://hocx250o22.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer`, {
      method: 'post',
      body: JSON.stringify(formData)
    }).then(r => console.log(r)).catch(e => console.log(e))

    console.log(JSON.stringify(formData))
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return <Layout>
      <Form onSubmit={e => this.handleForm(e)}>
          <fieldset>
            <label htmlFor="name">
              Name
              <input type="text" name="name" onChange={e => this.handleInput(e)} required />
            </label>

            <label htmlFor="email">
              Email
              <input type="email" name="email" onChange={e => this.handleInput(e)} required />
            </label>

            <label>
              Message:
              <textarea name="message" onChange={e => this.handleInput(e)} required />
            </label>
            <button type="submit">Send Message</button>
          </fieldset>
        </Form>
      </Layout>
  }
}

export default Contact;
