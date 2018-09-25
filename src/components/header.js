import React from 'react';
import { Link } from 'gatsby'
import { Container, Topbar, Logo, LogoLink, TopbarContainer } from './styles'
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
