import React from 'react';
import Navber from '../../Shared/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const Main = () => {
    return (
       <>
       <Navber></Navber>
       <Outlet></Outlet>
       <Footer></Footer>
       </>
    );
};

export default Main;