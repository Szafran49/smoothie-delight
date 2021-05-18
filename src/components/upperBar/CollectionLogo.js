import React from 'react';
import styled from 'styled-components'

const Logo = styled.span`
    font-family: Dancing script;
    font-size: 96px;
    font-weight: bold;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
const StyledFirstWord = styled(Logo)`
    color: #FDD000;
`
const StyledSecondWord = styled(Logo)`
    color: #BBE1F6;
`

const StyledContainer = styled.div`
    display:flex;
    align-content:center;
`

const CollectionLogo = () => {
    return (
        <StyledContainer>
            <StyledFirstWord>Smoothie&nbsp;</StyledFirstWord>
            <StyledSecondWord>Delight</StyledSecondWord>
        </StyledContainer>
    )
}
export default CollectionLogo