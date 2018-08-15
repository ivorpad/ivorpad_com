const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise ((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      )
      .then(result => {
        if(result.errors) {
          reject(result.errors)
        }

        // Create Blog Post pages
        const blogPageTemplate = path.resolve(`./src/templates/blog-post.js`)

        result.data.allContentfulPost.edges.forEach(edge => {
          createPage({
            path: `/post/${edge.node.slug}`,
          	component: slash(blogPageTemplate),
          	context: {
          		slug: edge.node.slug
          	}
          })
        });
      })
    )
  }).then(() => {
    graphql(
      `
        {
          allContentfulWork {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if(result.errors) {
        reject(result.errors)
      }

      const workTemplate = path.resolve(`./src/templates/work.js`);

      result.data.allContentfulWork.edges.forEach(edge => {
        createPage({
          path: `/work/${edge.node.slug}`,
          component: slash(workTemplate),
          context: {
            slug: edge.node.slug,
          },
        })
      });
    });
  }).then(() => {
    graphql(
      `
        {
          allContentfulPage {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    ).then(result => {

      console.log(result)

      if (result.errors) {
        reject(result.errors)
      }

      const pageTemplate = path.resolve(`./src/templates/page.js`);

      result.data.allContentfulPage.edges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: slash(pageTemplate),
          context: {
            slug: edge.node.slug,
          },
        })
      });
    });
  })
}