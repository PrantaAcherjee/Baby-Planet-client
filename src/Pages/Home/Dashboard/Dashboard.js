import React,{useState}from 'react';
import "./Dashboard.css";
import { Button, Offcanvas } from 'react-bootstrap';
 
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
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <div className=''>
    
        <div className='pt-4 row'>
          <div className='col-12 mt-3 d-block d-lg-none'>
          <Button variant="primary" onClick={handleShow}>
           Menu
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {/* <!-- Sidebar content here --> */}
        <Link style={{textDecoration:'none',color:'grey'}} to={`${url}`}>
            <i class="fas fa-home"></i> DASHBOARD
            </Link>
            <br />
            <Link style={{textDecoration:'none',color:'grey'}} to="/home"><i class="fas fa-plus-circle"></i>  GET ORDER
            </Link>
            <br />
            <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/myorders`}>
             <i class="fas fa-cart-arrow-down"></i> ALL ORDERS 
            </Link>
            <br />
            
            <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/reviews`}>
            <i class="far fa-comment-dots"></i> GIVE REVIEWS
            </Link>
            <br />

              {admin && <div>
                
                <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/makeAdmin`}>
                <i class="fas fa-user-plus"></i> Make Admin
              </Link>
              <br />
              <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/addservices`}>
              <i class="fas fa-plus-square"></i> Add Services
              </Link>
              <br />
              <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/manageservices`}>
              <i class="fas fa-tasks"></i> Manage Services
              </Link>
              </div>}                   
        </Offcanvas.Body>
      </Offcanvas>
          </div>
          
          <div className="col-md-3 links-part d-none d-lg-block">

            <Link   to={`${url}`}>
            <i class="fas fa-home"></i> Dashboard
            </Link>
            <br />
            <Link  to="/home"><i class="fas fa-plus-circle"></i>  Get products
            </Link>
            <br />
            <Link  to={`${url}/myorders`}>
             <i class="fas fa-cart-arrow-down"></i> My orders 
            </Link>
            <br />
            
            <Link  to={`${url}/reviews`}>
            <i class="far fa-comment-dots"></i> Share reviews
            </Link>
            <br />

              {admin && <div>
                
                <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/makeAdmin`}>
                <i class="fas fa-user-plus"></i> Make admin
              </Link>
              <br />
              <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/addservices`}>
              <i class="fas fa-plus-square"></i> Add services
              </Link>
              <br />
              <Link  to={`${url}/manageservices`}>
              <i class="fas fa-tasks"></i> Manage services
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
            <Route exact path={`${path}/payments/:productID`}>
             <Payments></Payments>
            </Route>
        </Switch>
         </div>  
        </div>
  </div>     
    );
};

export default Dashboard;