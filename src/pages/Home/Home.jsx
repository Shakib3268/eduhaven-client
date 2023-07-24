import React from 'react';
import Banner from './Banner/Banner';
import Search from '../search/Search';
import Gallery from './gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;