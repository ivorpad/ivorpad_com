import React from 'react'

const Introduction = ({data}) => {
    const {
      contentfulIntroduction,
      contentfulAuthor
    } = data
    const {
    	title,
    	featuredImage,
    	content
    } = contentfulIntroduction;

    const {
      name
    } = contentfulAuthor

  return <div className="content intro">
      <div className="intro__card">
        <img className="intro__avatar" src={`${featuredImage.resize.src}`} alt="Ivor Padilla" />
      <h1 className="intro__title">{title} <span>{name}</span></h1>
        <div className="intro__content" dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
      </div>
    </div>
}

export default Introduction;

