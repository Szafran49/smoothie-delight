import React from 'react';
import styled from 'styled-components'

const LogoText = styled.p`
    font-family: Teko;
    font-size: 64px;
    line-height:70%;
    color:white;
    text-align:center;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

const BrandLogo = () => {
    return (
        <LogoText>REMARKABLE <br /> BRAND</LogoText>
    )
}
export default BrandLogo