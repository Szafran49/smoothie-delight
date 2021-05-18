import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components'

const dataLinks = [
    {
        id: 1,
        content: "DELIVERY",
        href: "#"
    },
    {
        id: 2,
        content: "OTHER COLLECTIONS",
        href: "#"
    },
    {
        id: 3,
        content: "WHO WE ARE?",
        href: "#"
    },
    {
        id: 4,
        content: "CONTACT",
        href: "#"
    }
]

const StyledLink = styled(Link)`
    font-size:24px;
    text-decoration:underline;
    color:white;
`
const StyledLinkContainer = styled.div`
    display:flex;
    width:100%;
    align-items:flex-start;
    justify-content: space-around;
`

const Links = () => {
    return (
        <StyledLinkContainer>
            {dataLinks.map(link => (
                <StyledLink to={link.href} key={link.id}>
                    {link.content}
                </StyledLink>

            ))
            }
        </StyledLinkContainer >
    )
}

export default Links;