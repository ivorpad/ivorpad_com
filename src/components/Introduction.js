import React from 'react'
import styled from 'styled-components';

const IntroSection = styled.div`
  .intro {
    height: auto;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15em 0;
    &__title {
      text-align: center;
      font-family: 'Merriweather', serif;
      color: grey;
      font-weight: 300;
      padding: 1em 0 0.2em 0;
      span {
        font-weight: 700;
      }
    }
    &__avatar {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 50%;
      top: -50px;
      transform: translateX(-50%);
      box-shadow: 0px 0px 0px 4px rgba(61, 61, 61, 0.1);
      border-radius: 5px;
    }

    &__card {
      background: white;
      width: 100%;
      border-radius: 5px;
      position: relative;
      padding: 4em 6em;
      font-family: $primary-font-serif;
      font-weight: 300;
      line-height: 2;
      box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
    }
  }
`

const Introduction = ({ data }) => {
  const { contentfulIntroduction, contentfulAuthor } = data
  const { title, featuredImage, content } = contentfulIntroduction

  const { name } = contentfulAuthor
  return (
    <IntroSection>
      <div className="content intro">
        <div className="intro__card">
          <img
            className="intro__avatar"
            src={`${featuredImage.resize.src}`}
            alt="Avatar of Web Developer: Ivor Padilla"
          />
          <h1 className="intro__title">
            {title} <span>{name}</span>
          </h1>
          <div
            className="intro__content"
            dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
          />
        </div>

      </div>
    </IntroSection>
  )
}

export default Introduction
