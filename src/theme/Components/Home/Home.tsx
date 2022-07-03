import React from 'react';
import Hero from './Hero/Hero';
import HomeHeader from './HomeHeader/HomeHeader';
import ProductsSlider from './ProductsSlider/ProductsSlider';
import NewsSlider from './NewsSlider/NewsSlider';
import StatisticsSlider from './StatisticsSlider/StatisticsSlider';

import 'react-multi-carousel/lib/styles.css';


const responsive3: {} = {
    desktop: {
        breakpoint: { max: 5000, min: 1024 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 1023, min: 0 },
        items: 1
    }
};

const responsive6: {} = {
    desktop: {
        breakpoint: { max: 5000, min: 992 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 991, min: 768 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1
    }
};

const Home = () => {
    return (
        <>
            <HomeHeader />
            <Hero />
            <ProductsSlider responsive={responsive3} />
            <StatisticsSlider responsive={responsive6} />
            <NewsSlider responsive={responsive3} />
        </>
    )
}

export default Home