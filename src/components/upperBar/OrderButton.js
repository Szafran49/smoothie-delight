import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    font-family:Raleway;
    font-size:30px;
    text-decoration:underline;
    color:white;
    cursor:pointer;
`


const OrderButton = () => {
    function handleClick() {
        //handle navigation change
    }
    return (
        <StyledButton onClick={() => handleClick()}>
            ORDER NOW
        </StyledButton>
    )
}

export default OrderButton;
