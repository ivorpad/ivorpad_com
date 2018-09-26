import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import { Container } from './styles';

const TopbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Topbar = styled.div`
  width: 100%;
  background: white;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  border-bottom: 1px solid #e8e8e8;
  -webkit-font-smoothing: subpixel-antialiased;
  margin-bottom: 3rem;
`

const Logo = styled.h1`
  color: #3d3d3d;
  font-size: 1.8em;
  margin: 0;
`

const LogoLink = styled(Link)`
  color: #3d3d3d;
  font-weight: bold;
  font-family: Merriweather, serif;
  text-decoration: none;

  &:hover {
    color: #3d5afe;
  }
`

const Header = ({ siteTitle }) => (
  <Topbar>
    <Container>
      <TopbarContainer>
        <Logo>
          <LogoLink to="/">{siteTitle}</LogoLink>
        </Logo>

        <div className="menu menu__main">
          <Link to="/" exact="true" activeClassName="active">
            Home
          </Link>
          <Link to="/work" component="work" activeClassName="active">
            Work
          </Link>
          <Link to="/writing" component="writing" activeClassName="active">
            Writing
          </Link>
          <Link to="/about" component="about" activeClassName="active">
            About
          </Link>
          <Link to="/gear" component="gear" activeClassName="active">
            Gear
          </Link>
          <Link to="/contact" component="contact" activeClassName="active">
            Contact
          </Link>
        </div>
      </TopbarContainer>
    </Container>
  </Topbar>
)

export default Header
