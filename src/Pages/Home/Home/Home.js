import React from 'react';
import Banner from '../Banner/Banner';
import Discount from '../discount/Discount';
import Features from '../features/Features';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Support from '../Support/Support';

const Home = () => {
    return (
    <div style={{overflow:'hidden'}}>
    
    <Banner></Banner>
    <Features></Features>
    <Products></Products>
    <Discount></Discount>
    <Support></Support>
    <Reviews></Reviews>
    <Footer></Footer>
    </div>
    );
};

export default Home;