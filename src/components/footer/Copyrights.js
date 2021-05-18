import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledContainer = styled.div`
    text-align:center;
`
const StyledLink = styled(Link)`
    font-size:24px;
    color:white;
`

const Copyrights = () => {
    return (
        <StyledContainer>
            <span>Copyright by <StyledLink to="#"><b>Remarkable Brand</b></StyledLink></span>
            <br />
            <span>Made by <StyledLink to="https://github.com/Szafran49" target="_blank"><b>Piotr Szafrański</b></StyledLink></span>
        </StyledContainer>
    )
}
export default Copyrights



