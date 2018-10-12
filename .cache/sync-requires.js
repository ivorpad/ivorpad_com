// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/ivor/workspace/projects/testapps/ivorpad_2018_gatsby_v2/src/templates/blog-post.js")),
  "component---src-templates-work-js": preferDefault(require("/Users/ivor/workspace/projects/testapps/ivorpad_2018_gatsby_v2/src/templates/work.js")),
  "component---src-templates-page-js": preferDefault(require("/Users/ivor/workspace/projects/testapps/ivorpad_2018_gatsby_v2/src/templates/page.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ivor/workspace/projects/testapps/ivorpad_2018_gatsby_v2/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ivor/workspace/projects/testapps/ivorpad_2018_gatsby_v2/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/ivor/workspace/projects/testapps/ivorpad_2018_gatsby_v2/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ivor/workspace/projects/testapps/ivorpad_2018_gatsby_v2/src/pages/index.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/ivor/workspace/projects/testapps/ivorpad_2018_gatsby_v2/src/pages/work.js")),
  "component---src-pages-writing-js": preferDefault(require("/Users/ivor/workspace/projects/testapps/ivorpad_2018_gatsby_v2/src/pages/writing.js"))
}

