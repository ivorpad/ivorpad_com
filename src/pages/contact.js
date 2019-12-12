import React, { Component } from 'react';
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {lighten} from 'polished'
import { PageWrapper } from '../components/styles'
import spinner from '../utils/spinner.svg';

const Message = styled.div`
  width: 50%;
  padding: 1.2rem;
  font-family: ${props => props.theme.main.fontSansSerif};
  font-size: 1.4rem;
  border-radius: 3px;
  font-weight: 300;
  color: ${ props => props.success ? 'hsl(150, 62%, 20%)' : '#6d1e1e'};
  background: ${ props => props.success ? 'hsl(150, 62%, 92%)' : lighten(0.4, 'red')};
  border: 1px solid ${ props => props.success ? 'hsl(150, 62%, 80%)' : lighten(0.3, 'red')};
`

const Form = styled.form`
  margin-top: 4rem;
  fieldset {
    /* display: flex;
    flex-direction: column; */
    &:disabled {
      opacity: .5;
    }
    border: none;
  }

  input,
  textarea {
    display: block;
    border: none;
    background: #f1f1f1;
    border-radius: 3px;
    padding: 5px;
    width: 100%;
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
`

const Button = styled.button`
  color: ${props => props.theme.main.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.main.fontSansSerif};
  border: 1px solid ${props => props.theme.main.blue};
  padding: ${props => (props.loading ? '0.65rem 5.3rem' : '0.5rem 1.5rem')};
  cursor: pointer;
  font-size: 1.1rem;
  text-transform: uppercase;
  border-radius: 3px;
  background: ${props => (props.loading ? props.theme.main.blue : '')};
  transition: background 0.15s ease-in-out, color 0.15s ease-in-out;
  img {
    margin: 0;
  }
  &:hover {
    background: ${props => props.theme.main.blue};
    color: white;
  }
`

class Contact extends Component {

  constructor(props) {
    super(props);
    this.checkboxRef = React.createRef()
  }

  state = {
    name: '',
    email: '',
    message: '',
    success: false,
    submitted: false,
    isLoading: false
  }

  handleForm = e => {
    e.preventDefault();

    const {
      name,
      email,
      message
    } = this.state;

    const checkbox = this.checkboxRef.current;

    if(checkbox.value !== "0" || checkbox.checked !== false) {
      this.setState({ success: false, submitted: true, isLoading: false })
      return;
    }


    const formData = {
      name,
      email,
      message
    }
    
    this.setState({ isLoading: true });
    fetch(
      `https://gia5jq7k12.execute-api.us-west-2.amazonaws.com/production/static-site-mailer`,
      {
        method: 'post',
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/json; charset=utf-8',
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then(r => {
        return r.json()
      })
      .then(r =>
       {
          this.setState({
            name: '',
            email: '',
            message: '',
            success: true,
            submitted: true,
            isLoading: false,
          })
       }
      )
      .catch(e => this.setState({ success: false, submitted: true, isLoading: false }))
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const meta = [
      { name: 'robots', content: 'noindex'}
    ]
    
    return <Layout>
        <PageWrapper className="content">
          <Helmet meta={meta} />
          <Helmet title="Ivor Padilla | Contact" />

          <h2>Get in touch</h2>

          <p>
            I'm currently open for any inquiry based on my current expertise. Whether is an app, a big project, a website or something fun I'm down for it. You can reach me at <a href="mailto:ivor.padilla@gmail.com?subject=Hey, Ivor">
              ivor.padilla[at]gmail.com
            </a> or drop me a line in the contact form below:
          </p>

          <Form onSubmit={e => this.handleForm(e)}>
            <fieldset disabled={this.state.isLoading}>
              <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={e => this.handleInput(e)} required />
              <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={e => this.handleInput(e)} required />
              <input ref={this.checkboxRef} type="checkbox" name="lk43n64lk54n37_oh_honey" value="0" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <textarea name="message" value={this.state.message} placeholder="Message" rows="5" onChange={e => this.handleInput(e)} required />
              <Button type="submit" loading={this.state.isLoading}>
                {!this.state.isLoading ? 'Send Message' : <img src={spinner} alt="" />}
              </Button>
            </fieldset>
          </Form>

          {this.state.submitted && (this.state.success ? <Message success>
                Your message has been submitted successfully, I'll do my
                best to reply as soon as possible.
              </Message> : <Message>
                There's been an error please try again.
              </Message>)}
        </PageWrapper>
      </Layout>
  }
}

export default Contact;
