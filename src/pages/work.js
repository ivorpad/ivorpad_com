import React, { Component } from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/styles';
import styled from 'styled-components';
import  {lighten, darken} from 'polished';
import { truncate } from 'lodash'

library.add(faExternalLinkAlt, faGithub);

const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 3rem;
  text-decoration: none;
  color: ${props => props.theme.main.black};
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
  &.card__item {
    a {
      color: ${props => props.theme.main.black};
      &:hover {
        color: ${props => props.theme.main.blue};
      }
    }
    .card__meta {
      display: flex;
      justify-content: space-between;
      a {
        border: none;
      }
      .card__title {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
      }
      .card__icons {
        a {
          color: grey;
          &:hover {
            color: ${lighten(0.15, 'grey')};
          }
        }
        svg {
          margin-left: 1.2rem;
        }
      }
    }
  }

  .card__content p {
    font-size: 1.4rem;
    color: ${props => lighten(0.1, props.theme.main.black)};
  }
  .card__tag {
    color: grey;
    font-family: ${props => props.theme.main.fontSansSerif};
    font-size: 1rem;
    margin-right: 1.5rem;
  }
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
                  className="card__item"
                >
                <div className="card__meta">
                    <Link to={`/work/${post.slug}`} state={{ isInModal: true }}> <h3 className={`card__title`}>{post.title.title}</h3> </Link>
                  <div className="card__icons">
                    <a href="#"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    <a href="#"><FontAwesomeIcon icon="external-link-alt" /></a>
                  </div>
                </div>

                <div className="card__content">
                  <p>{truncate(post.body.body, {
                    'length': 100,
                    'omission': ' [...]'
                  }) }</p>
                </div>
                {post.tags && post.tags.map((tag, i) => <span key={i} className="card__tag">#{tag}</span>)}
                {/* {post.mainImage !== null && <img src={post.mainImage.resize.src} alt={post.mainImage.title} /> }
                {post.tags && post.tags.map( (tag, i) => <span key={i} className="card__tag">{tag}</span>) } */}
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
            body
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
