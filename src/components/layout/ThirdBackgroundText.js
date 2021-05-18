import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { observer } from 'intersection-observer'

const rotate1 = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30rem) rotate(-45deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

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
    color:white;
    -webkit-text-stroke: 1px black;
    text-shadow: 1px 1px #000;
`
const StyledText = styled.span`
    position:relative;
    &.animationTime {
        animation: ${rotate1} 1s .2s linear;
    }
   
`
const StyledUpperText = styled(StyledText)`
    left:-15%;
    
`
const StyledMiddleText = styled(StyledText)`
    left:-3%;
`
const StyledLowerText = styled(Link)`
    position:relative;
    left:10%;
    text-decoration: white underline;
    color:white;
    -webkit-text-stroke: 1px black;
    text-shadow: 1px 1px #000;
    
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
                    else {
                        entry.target.classList.remove('animationTime');
                    }
                });
            }, config);
            slogan.forEach(lineOfText => {
                observer.observe(lineOfText);
            });
        }, [config]
    )

    return (
        <StyledWrapper >
            <StyledUpperText className="animate">MULTITUDE</StyledUpperText>
            <StyledMiddleText className="animate">OF</StyledMiddleText>
            <StyledLowerText to="#">FLAVORS</StyledLowerText>
        </StyledWrapper>
    )
}

export default ThirdBackgroundText