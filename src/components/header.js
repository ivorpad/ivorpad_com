import React from 'react';
import { Container } from './styles';
import Menu from './Menu'
import styled from 'styled-components';

const Topbar = styled.div`
  width: 100%;
  background: white;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  border-bottom: 1px solid #e8e8e8;
  -webkit-font-smoothing: subpixel-antialiased;
`

const Header = ({ siteTitle, theme }) => (
  <Topbar>
    <Container>
        <Menu siteTitle={siteTitle} />
    </Container>
  </Topbar>
)

export default Header
