import React from 'react'
import styled from 'styled-components'
import Link from '../shared/Link'

const StyledLink = styled(Link)`
    font-size:30px;
    text-decoration:underline;
`

const Order = () => {
    return (
        <StyledLink to="#">
            ORDER NOW
        </StyledLink>
    )
}

export default Order;
