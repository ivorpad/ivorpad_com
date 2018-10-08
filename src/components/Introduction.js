import React from 'react'
import styled from 'styled-components';
import { media } from '../components/styles'
 
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
      font-size: 2.5rem;
      ${media.medium`
        font-size: 4.5rem;
      `}
      margin-top: -5px;
    }
    &__name--upper-title {
      text-transform: uppercase;
      color: grey;
      font-family: ${props => props.theme.main.fontSansSerif};
      font-size: 1.4rem;
      
      display: inline-block;
      font-weight: 500;
      ${media.medium`
        margin-left: 4px;
        font-weight: 400;
      `}
    }
    &__avatar {
      box-shadow: 0px 0px 0px 4px rgba(61, 61, 61, 0.1);
      border-radius: 5px;
      float: left;
      width: 50px;
      height: 50px;
      margin-right: 2rem;
      margin-top: .5rem;
      
      ${media.medium`
        width: 100px;
        height: 100px;
        float: none;
        position: absolute;
        left: 50%;
        top: -50px;
        transform: translateX(-50%);
        margin: 0;
      `}
    }

    &__card {
      background: white;
      width: 100%;
      border-radius: 5px;
      position: relative;

       ${media.small`
        padding: 6rem; 
      `}

       ${media.medium`
        padding: 6rem; 
      `}

       ${media.large`
        padding: 6rem; 
      `} 

       ${media.extraLarge`
        padding: 10rem;
      `} 
      
      padding: 3rem;
      word-wrap: wrap;
      overflow-wrap: break-word;
      font-weight: 300;
      box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
      p {
      
        ${media.small`
          font-size: 1.6rem; 
        `}

        ${media.medium`
          font-size: 1.6rem; 
        `}

        ${media.large`
          font-size: 1.8rem; 
        `} 

        ${media.extraLarge`
          font-size: 1.8rem; 
        `} 
      
        font-size: 1.6rem;
      }
    }
  }
`

const Introduction = ({ data }) => {
  const { contentfulIntroduction } = data
  const { featuredImage, content } = contentfulIntroduction
  return <IntroSection>
      <div className="content intro">
        <div className="intro__card">
          <img className="intro__avatar" src={`${featuredImage.resize.src}`} alt="Avatar of Web Developer: Ivor Padilla" />
          <span className="intro__name--upper-title">
            Welcome, my name is
          </span>
          <h1 className="intro__name">Ivor Padilla</h1>
          <div
            className="intro__content"
            dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
          />
        </div>
      </div>
    </IntroSection>
}

export default Introduction
