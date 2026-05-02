import React from 'react';
import Hero from '../sections/home/Hero';
import TrustBar from '../sections/home/TrustBar';
import NextProgram from '../sections/home/NextProgram';
import AboutMe from '../sections/home/AboutMe';
import Services from '../sections/home/ServicesHarmony';
import Testimonials from '../sections/home/Testimonials';
import FAQ from '../sections/home/FAQ';

const Home = () => {
    return (
        <main>
            <Hero />
            <TrustBar />
            <NextProgram />
            <AboutMe />
            <Services />
            <Testimonials />
            <FAQ />
        </main>
    );
};

export default Home;
