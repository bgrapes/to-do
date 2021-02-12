import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import './BaseStyles.css'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F6F6F6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: neue-haas-grotesk-text, sans-serif;
    font-weight: 400;
    font-style: normal;
    padding: 1rem;
  }
`

const Wrapper = styled.div`
  background-color: #fff;
  line-height: 1;
  border-radius: 26px;
  box-shadow: 0 5px 10px rgba(154,160,185,0.05), 0 15px 40px rgba(166,173,201,0.2);
  width: 100%;
  min-width: 320px;
  padding: 1rem 1.5rem;
`

const Layout = ({ children }) => {

  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/eaa8rwh.css" />
      <GlobalStyle />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
