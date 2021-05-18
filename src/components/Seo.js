import React from 'react';
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = () => {
    const { site } = useStaticQuery(graphql`
    query  {
        site{
            siteMetadata {
                title
                description
                author
                image
                keywords
            }
          }
        }
    `
    )
    const title = site.siteMetadata.title
    const image = site.siteMetadata.image
    const keywords = site.siteMetadata.keywords
    const author = site.siteMetadata.author
    const description = site.siteMetadata.description

    return (
        <Helmet
            title={title}
            meta={
                [
                    {
                        name: `description`,
                        content: description,
                    },
                    {
                        name: `keywords`,
                        content: keywords,
                    },
                    {
                        property: `og:title`,
                        content: title,
                    },
                    {
                        property: `og:description`,
                        content: description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        property: `og:image`,
                        content: image,
                    },
                    {
                        name: `twitter:card`,
                        content: `Smoothie Delight`,
                    },
                    {
                        name: `twitter:image`,
                        content: image,
                    },
                    {
                        name: `twitter:creator`,
                        content: author,
                    },
                    {
                        name: `twitter:title`,
                        content: title,
                    },
                    {
                        name: `twitter:description`,
                        content: description,
                    }
                ]
            }
        />
    )
}
export default Seo;


