import React from 'react'
import Layout from '../components/layout'

const Writing = ({data}) => {

  const { edges: posts } = data.allContentfulPost

  console.log(posts)

 return <Layout>
     <div className="content">
       {posts.map(({ node: post }, i) => 
       <div key={post.id} className={`content__item`}>
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
          id
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