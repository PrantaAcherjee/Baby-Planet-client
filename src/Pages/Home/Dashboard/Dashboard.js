import React from 'react';
import "./Dashboard.css"
 
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from './DashboardHome';
import MakeAdmin from './MakeAdmin';
import GiveReviews from '../GiveReviews/GiveReviews';
import AddProducts from '../../Home/AddProducts/AddProducts' 
import MyOrder from '../MyOrder/MyOrder';
import UseAuth from '../../../Hooks/UseAuth'; 
import AdminRoute from '../AdminRoute/AdminRoute';
import ManageService from './ManageService';
import Payments from './Payments';

const Dashboard = () => {
const {admin}=UseAuth();
let { path, url } = useRouteMatch();   
    return (
        <div className='pt-4 row'>
          <div className="col-md-3 py-5 links-part">

            <Link style={{textDecoration:'none',color:'grey'}} to={`${url}`}>
             DASHBOARD
            </Link>
            <br />
            <Link style={{textDecoration:'none',color:'grey'}} to="/home">
             GET ORDER
            </Link>
            <br />
            <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/myorders`}>
             ALL ORDERS
            </Link>
            <br />
            
            <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/reviews`}>
              GIVE REVIEWS
            </Link>
            <br />
            <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/PAYMENTS`}>
               PAYMENTS
            </Link>
            <br />

              {admin && <div>
                
                <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/makeAdmin`}>
              Make Admin
              </Link>
              <br />
              <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/addservices`}>
              Add Services
              </Link>
              <br />
              <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/manageservices`}>
               Manage Services
              </Link>
              </div>}
             
          </div>

           

          <div className="col-md-9 details-part">
           
        <Switch>
            <Route exact path={path}>
             <DashboardHome></DashboardHome>
            </Route>
            <AdminRoute exact path={`${path}/makeAdmin`}>
             <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute exact path={`${path}/addservices`}>
             <AddProducts></AddProducts>
            </AdminRoute>
            <AdminRoute exact path={`${path}/manageservices`}>
            <ManageService></ManageService>
            </AdminRoute>
            <Route exact path={`${path}/reviews`}>
            <GiveReviews></GiveReviews>
            </Route>
            <Route exact path={`${path}/myorders`}>
            <MyOrder></MyOrder>
            </Route>
            <Route exact path={`${path}/PAYMENTS`}>
             <Payments></Payments>
            </Route>
        </Switch>
         </div>  
        </div>
    );
};

export default Dashboard;