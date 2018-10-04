require('prismjs/themes/prism-okaidia.css')

exports.shouldUpdateScroll = args => {
  const windowWidth = window.innerWidth
  // Scroll position only matters on mobile as on larger screens, we use a
  // modal.
  if (windowWidth < 750) {
    return true
  } else {
    return false
  }
}

exports.onInitialClientRender = () => {
  console.log('ReactDOM.render has executed')
  window.___IVORPAD_INITIAL_RENDER_COMPLETE = true
}
