import React from 'react'
import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../heroSection'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home

