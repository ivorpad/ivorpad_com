import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import { Container } from './styles';
import { lighten } from 'polished';

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
  /* margin-bottom: 3rem; */
`

const Logo = styled.h1`
  color: #3d3d3d;
  font-size: 1.8rem;
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

const Menu = styled.div`
  a {
    font-family: ${ props => props.theme.main.fontSansSerif };
    color: ${props => props.theme.main.black};
    text-decoration: none;
    margin-left: 25px;
    text-transform: uppercase;
    font-size: 1.2rem;
    &:hover,
    &.active {
      color: ${props => props.theme.main.blue};
      border-bottom: 2px solid ${lighten(0.3, '#3d5afe')};
    }
  }
`

const isActive = ({ isPartiallyCurrent}) => {
  return isPartiallyCurrent ? { className: 'active' } : null
}

const Header = ({ siteTitle, theme }) => (
  <Topbar>
    <Container>
      <TopbarContainer>
        <Logo>
          <LogoLink to="/">{siteTitle}</LogoLink>
        </Logo>
        <Menu className="menu__main">
          <Link to="/" activeClassName="active">
            Home
          </Link>
          <Link to="/work" getProps={isActive} component="work" activeClassName="active">
            Work
          </Link>
          <Link to="/writing" getProps={isActive} component="writing" activeClassName="active">
            Writing
          </Link>
          <Link to="/about" getProps={isActive} component="about" activeClassName="active">
            About
          </Link>
          <Link to="/gear" component="gear" activeClassName="active">
            Gear
          </Link>
          <Link to="/contact" component="contact" activeClassName="active">
            Contact
          </Link>
        </Menu>
      </TopbarContainer>
    </Container>
  </Topbar>
)

export default Header
