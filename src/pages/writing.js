import React, { Component } from 'react'
import Layout from '../components/layout'

const Writing = ({data}) => {

  const {
    edges: posts
  } = data.allContentfulPost

 return <Layout>
     <div className="content">
       {posts.map(({ node: post }, i) => 
       <div key={i} className={`post__item post__item-${i + 1}`}>
           <h1>{post.title.title}</h1>
           <div className="post__content" dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} /></div>
        )}
     </div>
   </Layout>
}

export default Writing

export const query = graphql`
  query GetBlogItems {
    allContentfulPost {
      edges {
        node {
          slug
          title {
            title
          }
          body {
            childMarkdownRemark {
              html
            }
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