import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Error from './Pages/Home/Error/Error';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Products from './Pages/Home/Products/Products';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import AddProducts from './Pages/Home/AddProducts/AddProducts';
import FAQ from './Pages/Home/FAQ/FAQ';
import ExploredPd from './Pages/Home/ExploredPd/ExploredPd';
import Order from './Pages/Home/Order/Order';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import Register from './Pages/Home/Register/Register';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import Payment from './Pages/Home/Payment/Payment';
import MyOrder from './Pages/Home/MyOrder/MyOrder';
import Confirm from './Pages/Home/ConfirmOrder/Confirm';
import Header from './Pages/Home/Header/Header';
import GiveReviews from './Pages/Home/GiveReviews/GiveReviews';

 

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
       <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route path="/login">
      <Login></Login>
      </Route>
      <Route path="/products">
        <Products></Products>
      </Route>
      <Route path="/aboutus">
      <AboutUs></AboutUs>
      </Route>
      <PrivateRoute path="/addproducts">
      <AddProducts></AddProducts>
      </PrivateRoute>
      <Route path="/faq">
        <FAQ></FAQ>
      </Route>
      <Route path="/explore">
        <ExploredPd></ExploredPd>
      </Route>
      <PrivateRoute path="/order/:_id">
        <Order></Order>
      </PrivateRoute>
      <Route path="/register">
        <Register></Register>
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>
      <Route path="/reviews">
        <GiveReviews></GiveReviews>
      </Route>
      <Route path="/payment">
        <Payment></Payment>
      </Route>
      <Route path="/myorder">
        <MyOrder></MyOrder>
      </Route>
      <PrivateRoute path="/confirm/:_id">
        <Confirm></Confirm>
      </PrivateRoute>
       <Route  path="*">
        <Error></Error>
      </Route>
       </Switch>
       </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
