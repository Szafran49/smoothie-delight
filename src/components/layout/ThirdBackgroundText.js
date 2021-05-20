import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import Link from '../shared/Link'
import { observer } from 'intersection-observer'
import UnselectableText from '../shared/UnselectableText'

const leftToRightMove = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30rem);
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
    display: flex;
    top:-10%;
    flex-direction:column;
    justify-items:center;
    align-items: center;
    justify-content: center;
    width:inherit;
    height:100%;
    font-size:96px;
    font-weight:semibold;
`
const StyledText = styled(UnselectableText)`
    position: relative;
    opacity: 0;
    -webkit-text-stroke: 1px black;
    text-shadow: 1px 1px #000;
    &.animationTime {
        opacity: 1;
        animation: ${leftToRightMove} 1s 2s linear;
    }
`


const StyledLowerText = styled(Link)`
    position:relative;
    left:10%;
    text-decoration: underline;
    font-size: 96px;
    letter-spacing: 5px;
    background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 400% 100%;
    animation: ${rainbowEffect} 6s ease-in-out infinite;
`

const StyledUpperText = styled(StyledText)`
    left:-15%;
`

const StyledMiddleText = styled(StyledText)`
    left:-3%;
`

const ThirdBackgroundText = () => {
    const config = {
        threshold: [0.1]
    };
    useEffect(
        () => {
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
            <StyledUpperText className="animate">MULTITUDE</StyledUpperText>
            <StyledMiddleText className="animate">OF</StyledMiddleText>
            <StyledLowerText to="#" >FLAVORS</StyledLowerText>

        </StyledWrapper>
    )
}

export default ThirdBackgroundText