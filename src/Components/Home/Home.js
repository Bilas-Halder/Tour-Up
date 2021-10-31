import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Packages from '../Packages/Packages';
import Feedback from '../Feedback/Feedback';


const Home = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <Packages></Packages>
            <Feedback></Feedback>
        </>
    );
};

export default Home;