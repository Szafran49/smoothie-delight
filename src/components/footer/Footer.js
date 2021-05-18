import React from 'react';
import styled from 'styled-components'
import Links from './Links'
import Copyrights from './Copyrights'

const StyledWrapper = styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    align-content:center;
    justify-content:space-evenly;
    bottom:0;
    left:0;
    right:0;
    min-height:160px;
    max-height:160px;
    font-size: 24px;
    color:white;
`
const StyledLinksAndCopyrightContainer = styled.div`
    width:75vw;
    display:flex;
    flex-direction:column;
    min-height:inherit;
    justify-content:space-evenly;
    background: rgba(0,0,0,0.4);
`

const StyledEmptyNewsletterArea = styled.div`
    flex-basis: 25vw; 

`

const Footer = () => {
    return (
        <StyledWrapper>
            <StyledLinksAndCopyrightContainer>
                <Links />
                <Copyrights />
            </StyledLinksAndCopyrightContainer>
            <StyledEmptyNewsletterArea />
        </StyledWrapper>
    )
}
export default Footer