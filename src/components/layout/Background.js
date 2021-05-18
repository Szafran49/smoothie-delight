import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const BackgroundSection = ({ className, children, imageNumber }) => {
  const data = useStaticQuery(
    graphql`
      query {
          firstImage: file(relativePath: { eq: "background_1.jpg"}) {
           childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          secondImage: file(relativePath: { eq: "background_4.jpg"}) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          thirdImage: file(relativePath: { eq: "background_5.jpg"}) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        
      }
    `
  )

  const firstImage = data.firstImage.childImageSharp.fluid
  const secondImage = data.secondImage.childImageSharp.fluid
  const thirdImage = data.thirdImage.childImageSharp.fluid

  switch (imageNumber) {
    case 1:
      return <BackgroundImage
        Tag="section"
        fluid={firstImage}
        className={className}
        backgroundColor={`#040e18`}
      >
        {children}
      </BackgroundImage>
    case 2:
      return <BackgroundImage
        Tag="section"
        fluid={secondImage}
        className={className}
        backgroundColor={`#040e18`}
      >
        {children}
      </BackgroundImage>
    case 3:
      return <BackgroundImage
        Tag="section"
        fluid={thirdImage}
        className={className}
        backgroundColor={`#040e18`}
      >
        {children}
      </BackgroundImage>
    default:
      return;
  }
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
  filter: brightness(90%);
`

export default StyledBackgroundSection