import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Packages from '../Packages/Packages';
import Feedback from '../Feedback/Feedback';
import AboutUs from '../AboutUs/AboutUs';


const Home = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <Packages></Packages>
            <AboutUs></AboutUs>
            <Feedback></Feedback>
        </>
    );
};

export default Home;