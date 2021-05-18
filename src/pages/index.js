import React from "react"
import Layout from '../components/layout/Layout'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family:Raleway;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  input, button, submit { 
    border:none; 
    background:none;
  } 
`;


const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <title>Smoothie Delight</title>
      <Layout />
    </>
  )
}

export default IndexPage
