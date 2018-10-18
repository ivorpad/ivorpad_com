import React, { Component } from 'react';
import Layout from '../components/layout'
// import { graphql } from 'gatsby'
import { media } from '../components/styles'
import styled from 'styled-components'
import {lighten} from 'polished'
// import Helmet from 'react-helmet'

const Form = styled.form`
  margin-top: 4rem;
  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
  }

  input,
  textarea {
    display: block;
    border: none;
    background: #f1f1f1;
    border-radius: 3px;
    padding: 5px;
    width: 50%;
    margin-bottom: 2rem;
    font-family: ${props => props.theme.main.fontSansSerif};
    font-size: 1.4rem;
    color: ${props => props.theme.main.black};
  }

  input::placeholder,
  textarea::placeholder {
    font-family: ${props => props.theme.main.fontSansSerif};
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  button {
    color: ${props => props.theme.main.blue};
    font-family: ${props => props.theme.main.fontSansSerif};
    border: 1px solid ${props => props.theme.main.blue};
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    font-size: 1.1rem;
    text-transform: uppercase;
    border-radius: 3px;
    transition: background 0.15s ease-in-out, color 0.15s ease-in-out;
    &:hover {
      background: ${props => props.theme.main.blue};
      color: white;
    }
  }
`

const PageWrapper = styled.div`
  width: 100%;

  ${media.medium`
    width: 60%;
  `} margin: 0 auto;
  background: white;
  border-radius: 5px;
  padding: 3rem;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
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


    const formData = {
      name,
      email,
      message
    }

    console.log(message)

    fetch(`https://cn3wplbdy7.execute-api.us-west-2.amazonaws.com/dev/static-site-mailer`,
      {
        method: 'post',
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/json; charset=utf-8',
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then(r => r.json())
      .then(r => console.log(r))
      .catch(e => console.log(e.message))

    console.log(JSON.stringify(formData))
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return <Layout>
        <PageWrapper className="content">
          <h2>Get in touch</h2>

          <p>I'm currently open for any inquiry based on my current expertise. Whether is an app, a big project, a website or something fun I'm down for it. You can reach me at <a href="mailto:me@ivorpad.com?subject=Hey, Ivor">
              me@ivorpad.com</a> or drop me a line in the contact form below:
          </p>

          <Form onSubmit={e => this.handleForm(e)}>
            <fieldset>
              <input type="text" placeholder="Name" name="name" onChange={e => this.handleInput(e)} required />
              <input type="email" name="email" placeholder="Email" onChange={e => this.handleInput(e)} required />
              <textarea name="message" placeholder="Message" rows="5" onChange={e => this.handleInput(e)} required />
              <button type="submit">Send Message</button>
            </fieldset>
          </Form>
        </PageWrapper>
      </Layout>
  }
}

export default Contact;
