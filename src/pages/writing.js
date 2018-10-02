import React from 'react'
import Layout from '../components/layout'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../components/styles'
import moment from 'moment'
import { Link } from 'gatsby'

const WritingWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  .post__item {
    margin-bottom: 3rem;
    background: white;
    border-radius: 5px;
    padding: 3rem;
    box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .post__date {
    color: grey;
    font-size: 1.2rem;
    font-family: ${props => props.theme.main.fontSansSerif};
  }
  .post__link {
    border: none;
    font-weight: bold;
    color: ${props => props.theme.main.black};
    font-family: ${props => props.theme.main.fontSerif};
  }
`

const Writing = ({data}) => {
  const { edges: posts } = data.allContentfulPost

 return <ThemeProvider theme={theme}>
     <Layout>
       <WritingWrapper className="content post">
         {posts.map(({ node: post }, i) => (
           <div key={post.id} className={`post__item`}>
             <Link className="post__link" to={`/writing/${post.slug}`}>{post.title.title}</Link>
             <span className="post__date"> {moment(post.createdAt).format('MMM DD, YYYY')} </span>
           </div>
         ))}
      </WritingWrapper>
     </Layout>
   </ThemeProvider>
    
}

export default Writing

export const query = graphql`
  query GetBlogItems {
    allContentfulPost {
      edges {
        node {
          slug
          id
          createdAt
          title {
            title
          }
          featuredImage {
            resize(width: 300) {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`