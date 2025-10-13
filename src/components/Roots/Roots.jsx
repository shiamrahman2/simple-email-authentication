import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Header/Navber';

const Roots = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;