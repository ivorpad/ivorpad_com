const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const fs = require('fs');  
const zlib = require('zlib');   
const glob = require('glob'); 
const iltorb = require('iltorb')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    devtool: false
  })

}

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
            path: `/writing/${edge.node.slug}`,
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


exports.onPostBuild = () =>
  new Promise((resolve, reject) => {
    try {
      const publicPath = path.join(__dirname, 'public')
      const gzippable = glob.sync(`${publicPath}/**/?(*.html|*.js|*.css|*.svg)`)
      gzippable.forEach(file => {
        const content = fs.readFileSync(file)
        const zipped = zlib.gzipSync(content)
        fs.writeFileSync(`${file}.gz`, zipped)

        const brotlied = iltorb.compressSync(content)
        fs.writeFileSync(`${file}.br`, brotlied)
      })
    } catch (e) {
      reject(new Error('onPostBuild: Could not compress the files'))
    }

    resolve()
  })