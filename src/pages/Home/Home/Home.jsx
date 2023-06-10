import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Classes from '../Classess/Classes';
import TopInstructor from '../TopInstructor/TopInstructor';

const Home = () => {
    return (
        <div>
          <Helmet
          title='MonArt | Home'
          ></Helmet> 
          <Banner></Banner>
          <Classes></Classes>
          <TopInstructor></TopInstructor>
        </div>
    );
};

export default Home;