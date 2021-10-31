import React, { useState } from 'react';
import './Dashboard.css';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import { Switch, useRouteMatch } from 'react-router';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyOrders from '../MyOrders/MyOrders';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddPackage from '../AddPackage/AddPackage';

const Dashboard = () => {
    return (
        <div className="position-relative pt-5 ">
            <DashboardNavbar></DashboardNavbar>
            <div className="p-3"></div>
        </div>
    );
};

export default Dashboard;