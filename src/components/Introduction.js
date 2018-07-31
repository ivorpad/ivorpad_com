import React from 'react'

const Introduction = ({data}) => {
    const {
    	contentfulIntroduction
    } = data
    const {
    	title,
    	featuredImage,
    	//createdAt,
    	content
    } = contentfulIntroduction;

  return (
    <div className="intro intro__card">
      <img className="intro__avatar" src={`${featuredImage.file.url}`} alt="Ivor Padilla"/>
      <h1 className="intro__title">{title}</h1>
      <div className="intro__content" dangerouslySetInnerHTML={{
          __html: content.childMarkdownRemark.html
        }}>
      </div>
    </div>
  )
}

export default Introduction;

