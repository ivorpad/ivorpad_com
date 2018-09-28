import React from 'react'
import Layout from '../components/layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '../components/styles'

const Writing = ({data}) => {
  const { edges: posts } = data.allContentfulPost

 return <ThemeProvider theme={theme}>
     <Layout>
       <div className="content">
         {posts.map(({ node: post }, i) => (
           <div key={post.id} className={`content__item`}>
             <h1>{post.title.title}</h1>
             <div
               className="post__content"
               dangerouslySetInnerHTML={{
                 __html: post.body.childMarkdownRemark.html,
               }}
             />
           </div>
         ))}
       </div>
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