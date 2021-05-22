import React from 'react'
import Background from './Background'
import Footer from '../footer/Footer'
import Newsletter from '../newsletter/Newsletter'
import UpperBar from '../upperBar/UpperBar'
import FlavorsSlogan from './FlavorsSlogan'

const Layout = () => {
    return (
        <>
            <Background imageNumber={1} />
            <Background imageNumber={2}>
                <FlavorsSlogan />
            </Background>
            <Background imageNumber={3}>
                <Footer />
            </Background>
            <UpperBar />
            <Newsletter />
        </>
    )
}

export default Layout