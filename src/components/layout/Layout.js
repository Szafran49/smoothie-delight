import React from 'react'
import Background from './Background'
import Footer from '../footer/Footer'
import Newsletter from '../newsletter/Newsletter'
import UpperBar from '../upperBar/UpperBar'
import ThirdBackgroundText from './ThirdBackgroundText'

const Layout = () => {
    return (
        <>
            <Background imageNumber={1}>
            </Background>
            <Background imageNumber={2}>
                <ThirdBackgroundText />
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