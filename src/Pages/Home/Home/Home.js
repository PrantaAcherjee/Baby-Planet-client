import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../discount/Discount';
import Features from '../features/Features';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
    <div style={{overflow:'hidden'}}>
    
    <Banner></Banner>
    <Features></Features>
    <Products></Products>
    <Discount></Discount>
    <Reviews></Reviews>
    <Footer></Footer>
    </div>
    );
};

export default Home;