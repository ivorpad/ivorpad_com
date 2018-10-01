import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/styles'
import styled from 'styled-components'
import  {lighten, darken} from 'polished'

const Card = styled(Link)`
  background: white;
  border-radius: 5px;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 0;
  }
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.main.black};
  &.card__item {
    border: none;

    &:hover {
      img {
        filter: grayscale(0%);
        opacity: 1;
      }
    }
    img {
      transition: 0.15s filter linear, .15s opacity linear;
      -webkit-transition: 0.15s -webkit-filter linear, .15s opacity linear;
      -moz-transition: 0.15s -moz-filter linear, .15s opacity linear;
      -ms-transition: 0.15s -ms-filter linear, .15s opacity linear;
      -o-transition: 0.15s -o-filter linear, .15s opacity linear;
      filter: grayscale(100%);
      opacity: 0.5;
    }
    .card__title {
      &--no-tags {
        margin-top: 1.6rem;
      }
      font-size: 1.6rem;
      padding-bottom: 1rem;
    }
    .card__tag {
      font-family: ${props => props.theme.main.fontSansSerif};
      color: ${props => lighten(0.15, props.theme.main.black)};
      font-size: 1.1rem;
      padding: 0.08rem 1rem;
      background: ${darken(0.02, '#f1f1f1')};
      margin: 1.9rem 0.5rem 1rem 0.5rem;
      display: inline-block;
      border-radius: 3px;
    }
  }
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
`

export default class WorkPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data.allContentfulWork.edges,
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <div className="card content grid">
            {this.state.data.map(({ node: post }) => {
              return (

                <Card 
                  key={post.id} 
                  to={`/work/${post.slug}`} 
                  state={{ isInModal: true }}
                  className="card__item"
                >

                  {post.mainImage !== null && <img src={post.mainImage.resize.src} alt={post.mainImage.title} /> }

                  {post.tags && post.tags.map( (tag, i) => <span key={i} className="card__tag">{tag}</span>) }
                  <h3 className={`card__title card__title${post.tags === null && '--no-tags'}`}>{post.title.title}</h3>
                </Card>
              )
            })}
          </div>
        </Layout>
      </ThemeProvider>
    )
  }
}

export const query = graphql`
  query GetWorkItems {
    allContentfulWork(
      sort: { fields: [updatedAt], order: DESC }
    ) {
      edges {
        node {
          slug
          id
          tags
          title {
            title
          }
          body {
            childMarkdownRemark {
              html
            }
          }
          mainImage {
            title
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
