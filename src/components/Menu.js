import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
// import { media } from './styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import { lighten } from 'polished';
library.add(faBars);

const Logo = styled.h1`
  color: #3d3d3d;
  font-size: 1.8rem;
  margin: 0;
  align-self: flex-start;
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

const NavBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;


  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    .navbar__navigation {
      align-self: center;
      line-height: 1.2;
      display: block;
      .navbar__menu {
        display: flex;
        flex-direction: row;
        margin-top: 0px;
        margin-bottom: 0;
        padding-left: 0px;
        li {
          margin-left: 2.5rem;
          a {
            border-bottom: 2px solid white;
            padding: 0px;
            font-size: 1.2rem;
            &.active {
              color: ${props => props.theme.main.blue};
              border-bottom: 2px solid
                ${props => lighten(0.3, props.theme.main.blue)};
            }
            &:hover {
              color: ${props => props.theme.main.blue};
              border-bottom: 2px solid
                ${props => lighten(0.3, props.theme.main.blue)};
            }
          }
        }
      }
    }
    .navbar__toggle {
      display: none;
    }
    .navbar__brand {
      padding: 0;
      align-self: center;
    }
  }
`

const Navigation = styled.nav`
  display: block;
  .navbar__toggle {
    align-self: flex-end;
    color: grey;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: -10px;
  }

  .navbar__menu {
    font-family: ${props => props.theme.main.fontSansSerif};
    display: none;
    list-style: none;
    padding-left: 15px;
    margin-top: 0px;
    margin-bottom: 0;
    li {
      margin-bottom: 0;
      padding-bottom: 0;
      a {
        text-decoration: none;
        display: block;
        margin-bottom: 0;
        padding: 10px 0;
        color: ${props => props.theme.main.black};
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 500;
        &:hover {
          color: ${props => props.theme.main.blue};
        }

        &:active {
          color: black;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .navbar__menu {
      &.is-expanded {
        display: block;
        margin-left: 0;
        margin-top: 3rem;
        padding-left: 0;
        li {
          &:not(:last-child) a {
            border-bottom: 1px solid ${lighten(0.43, 'grey')};
          }
        }
      }
    }
  }
`

const isActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: 'active' } : null
}

class Menu extends Component {

  state = {
    isExpanded: false
  }

  handleMenuOpen = (e) => {
    e.preventDefault();

    const menu = document.querySelector('.navbar__menu');
    const button = this.toggleButton;

    const expanded = button.getAttribute('aria-expanded') === 'true'
    button.setAttribute('aria-expanded', !expanded);
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  render() {
    return (
      <Fragment>
        <NavBar>
          <Logo className="navbar__brand">
            <LogoLink to="/" aria-label="Logo of ivorpad.com">{this.props.siteTitle}</LogoLink>
          </Logo>
          <Navigation className="navbar__navigation" role="navigation">
            <a
              role="button"
              className="navbar__toggle"
              aria-expanded="false"
              aria-controls="menu"
              aria-label="Toggle navigation"
              onClick={this.handleMenuOpen}
              href="#menu"
              ref={button => this.toggleButton = button}
            >
              <FontAwesomeIcon icon="bars" />
            </a>
            <ul id="menu" className={`navbar__menu ${this.state.isExpanded ? 'is-expanded' : ''}`}>
              <li>
                <Link to="/" activeClassName="active" role="menuitem">
                  Home
                  </Link>
              </li>
              {/* <li>
                <Link
                  to="/work"
                  getProps={isActive}
                  component="work"
                  activeClassName="active"
                  role="menuitem"
                >
                  Work
                  </Link>
              </li>
              <li>
                <Link
                  to="/writing"
                  getProps={isActive}
                  component="writing"
                  activeClassName="active"
                  role="menuitem"
                >
                  Writing
                  </Link>
              </li> */}
              <li>
                <Link
                  to="/about"
                  getProps={isActive}
                  component="about"
                  activeClassName="active"
                  role="menuitem"
                >
                  About
                  </Link>
              </li>
              <li>
                <Link
                  to="/tools"
                  component="tools"
                  activeClassName="active"
                  role="menuitem"
                >
                  Tools
                  </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  getProps={isActive}
                  component="contact"
                  activeClassName="active"
                  role="menuitem"
                >
                  Contact
                  </Link>
              </li>
            </ul>
          </Navigation>
        </NavBar>
      </Fragment>
    )
  }
}

export default Menu
