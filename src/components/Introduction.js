import React from 'react'
import styled from 'styled-components';

const IntroSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  .intro {
    &__name {
      font-family: ${props => props.theme.main.fontSerif};
      color: ${props => props.theme.main.black};
      font-weight: 300;
      padding: 0em 0 0.5em 0;
      font-size: 4.5rem;
      margin-top: -5px;
    }
    &__content p {
      font-size: 1.6rem;
    }
    &__name--upper-title {
      text-transform: uppercase;
      font-weight: 300;
      color: grey;
      font-family: ${props => props.theme.main.fontSansSerif};
      font-size: 1.2rem;
      margin-left: 4px;
      display: inline-block;
      font-weight: 400;
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
      padding: 10rem;
      word-wrap: wrap;
      overflow-wrap: break-word;
      font-family: $primary-font-serif;
      font-weight: 300;
      line-height: 2;
      box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
    }
  }
`

const Introduction = ({ data }) => {
  const { contentfulIntroduction } = data
  const { featuredImage, content } = contentfulIntroduction
  return (
    <IntroSection>
      <div className="content intro">
        <div className="intro__card">
          <img
            className="intro__avatar"
            src={`${featuredImage.resize.src}`}
            alt="Avatar of Web Developer: Ivor Padilla"
          />
          <span className="intro__name--upper-title">Welcome, my name is</span>
          <h1 className="intro__name">
             Ivor Padilla
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
