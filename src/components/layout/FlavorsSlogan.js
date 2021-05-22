import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import Link from '../shared/Link'
import { observer } from 'intersection-observer'
import UnselectableText from '../shared/UnselectableText'

const upToBottomAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10rem);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const rainbowEffect = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: 100% 0;
    }
`

const StyledWrapper = styled.div`
    position: absolute;
    width:auto;
    height:100%;
    font-size:96px;
    font-weight:semibold;
    background:linear-gradient(to right, rgba(0,0,0,0.8),rgba(0,0,0,0.01));
    padding-left:10%;
`

const StyledTextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    left:10%
`

const StyledText = styled(UnselectableText)`
    opacity: 0;
    text-shadow: -4px -4px black;
    &.animationTime {
        opacity:1;
        animation: ${upToBottomAnimation} 1.5s linear;
    }
`

const StyledLink = styled(Link)`
    background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
    background-size: 400% 100%;
    font-size: 216px;
    line-height: 190px;
    -webkit-text-stroke: 3px white;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${rainbowEffect} 6s ease-in-out infinite;
    transition: transform 250ms ease-in-out;
    :after {
        top:-20%;
        display:block;
        content: '';
        opacity:0.5;
        border-bottom: solid 10px #fff;  
        transform: scaleX(0);  
        transition: transform .25s ease-in-out;
    }
    &:hover:after {
        transform: scaleX(1); 
        transform-origin: 100% 50%;
    }
`


const FlavorsSlogan = () => {
    const config = {
        threshold: [0.1]
    };
    useEffect(() => {
        const slogan = document.querySelectorAll('.animate')
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0.1) {
                    entry.target.classList.add('animationTime');
                }
            });
        }, config);
        slogan.forEach(lineOfText => {
            observer.observe(lineOfText);
        });
    },
    )

    return (
        <StyledWrapper >
            <StyledTextContainer>
                <StyledText className="animate">MULTITUDE OF</StyledText>
                <StyledLink to="#" >FLAVORS</StyledLink>
            </StyledTextContainer>
        </StyledWrapper>
    )
}

export default FlavorsSlogan