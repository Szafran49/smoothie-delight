import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledWrapper = styled.div`
    position:fixed;
    right:0;
    bottom:0;
    min-height: 160px;
    width:25%;
    background: rgba(0,0,0,0.4);
    display:flex;
    flex-direction:column;
    justify-content:center;
    color:white;
    text-align:center;
    font-size:24px;
`
const StyledFitWord = styled.span`
    color: #FDD000;
`
const StyledHealthyWord = styled.span`
    color: #BBE1F6;
`
const StyledLink = styled(Link)`
    text-decoration:underline;
    color:white;
    font-size:36px;
`
const StyledUpperText = styled.div`
    font-size:48px;
`


const Newsletter = () => {
    return (
        <StyledWrapper>
            <StyledUpperText>Stay <StyledFitWord>Fit</StyledFitWord> &#38; <StyledHealthyWord>Healthy</StyledHealthyWord></StyledUpperText>

            <span><StyledLink to="#">Sign up</StyledLink> to our newsletter</span>
        </StyledWrapper>
    )
}
export default Newsletter;