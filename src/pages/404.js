import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Header from '../components/Header'

export const P = styled.p`
  color: #354f52;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header>404</Header>
    <P>Page not found...</P>
  </Layout>
)

export default NotFoundPage
