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
        <Offcanvas.Body className="links-part">
        {/* <!-- Sidebar content here --> */}
        <Link   to={`${url}`}>
            <i class="fas fa-home icon-style"></i>
            <span>Dashboard</span>            
            </Link>
            <br />
            <Link  to="/home"><i class="fas fa-plus-circle icon-style"></i>
            <span>Get products</span>
            
            </Link>
            <br />
            <Link  to={`${url}/myorders`}>
             <i class="fas fa-cart-arrow-down icon-style"></i>
             <span>My orders</span>  
            </Link>
            <br />
            
            <Link  to={`${url}/reviews`}>
            <i class="far fa-comment-dots icon-style"></i>
            <span> Share reviews</span>         
            </Link>
            <br />

              {admin && <div>
                
                <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/makeAdmin`}>
                <i class="fas fa-user-plus icon-style"></i> <span>Make admin</span>
              </Link>
              <br />
              <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/addservices`}>
              <i class="fas fa-plus-square icon-style"></i> <span>Add services</span>
              </Link>
              <br />
              <Link  to={`${url}/manageservices`}>
              <i class="fas fa-tasks icon-style"></i> 
              <span> Manage services</span>
             
              </Link>
              </div>}          
        </Offcanvas.Body>
      </Offcanvas>
          </div>
          
          <div className="col-md-2 links-part d-none d-lg-block">

            <Link   to={`${url}`}>
            <i class="fas fa-home icon-style"></i>
            <span>Dashboard</span>            
            </Link>
            <br />
            <Link  to="/home"><i class="fas fa-plus-circle icon-style"></i>
            <span>Get products</span>
            
            </Link>
            <br />
            <Link  to={`${url}/myorders`}>
             <i class="fas fa-cart-arrow-down icon-style"></i>
             <span>My orders</span>  
            </Link>
            <br />
            
            <Link  to={`${url}/reviews`}>
            <i class="far fa-comment-dots icon-style"></i>
            <span> Share reviews</span>         
            </Link>
            <br />

              {admin && <div>
                
                <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/makeAdmin`}>
                <i class="fas fa-user-plus icon-style"></i> <span>Make admin</span>
              </Link>
              <br />
              <Link style={{textDecoration:'none',color:'grey'}} to={`${url}/addservices`}>
              <i class="fas fa-plus-square icon-style"></i> <span>Add services</span>
              </Link>
              <br />
              <Link  to={`${url}/manageservices`}>
              <i class="fas fa-tasks icon-style"></i> 
              <span> Manage services</span>
             
              </Link>
              </div>}
             
          </div>

           

          <div className="col-md-10 details-part">
           
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