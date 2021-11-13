import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MobileApp from '../MobileApp/MobileApp';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <Products></Products>
    <Reviews></Reviews>
    <MobileApp></MobileApp>
    <Footer></Footer>
        </div>
    );
};

export default Home;