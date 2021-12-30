import React from 'react';
import '../../App.css'
import ClassCards from '../ClassCards';
import Footer from '../Footer';
import HeroSection from '../heroSectionClasses'

export default function Classes() {
    return (
        <div>
            <HeroSection />
            <ClassCards />
            <Footer />
        </div>
    )

    // <h1 className="classes">CLASSES</h1>;
}