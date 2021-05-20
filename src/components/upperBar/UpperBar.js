import React from 'react'
import styled from 'styled-components'
import CollectionLogo from './CollectionLogo'
import BrandLogo from './BrandLogo'
import Order from './Order'

const StyledWrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100px;
    max-height: 100px;
    background: rgba(0,0,0,0.4);
`

const UpperSection = () => {
    return (
        <StyledWrapper>
            <BrandLogo />
            <CollectionLogo />
            <Order />
        </StyledWrapper>
    )
}
export default UpperSection;