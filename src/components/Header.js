import React from 'react'
import styled from 'styled-components'

export const H1 = styled.h1`
  color: #354f52;
  font-weight: 600;
  font-style: normal;
  font-size: 30px;
  margin: 1rem 0rem 1rem;
`

const Header = ({ children }) => (
  <header>
    <H1>{children}</H1>
  </header>
)

export default Header
