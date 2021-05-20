import React from 'react';
import styled from 'styled-components'
import StyledLink from '../shared/Link'

const StyledContainer = styled.div`
    text-align:center;
`
const GithubLink = styled.a`
    text-decoration:none;
    color:white;
`


const Copyrights = () => {
    return (
        <StyledContainer>
            <span>Copyright by <StyledLink to="#"><b>Remarkable Brand</b></StyledLink></span>
            <br />
            <span>Made by
                <GithubLink href="https://github.com/Szafran49" target="_blank">
                    <b> Piotr Szafrański </b>
                </GithubLink>
            </span>
        </StyledContainer>
    )
}
export default Copyrights



