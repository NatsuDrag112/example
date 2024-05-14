import React from 'react';
import Home from './pages/home';
import UserSignin from './pages/userSignin';
import UserSignup from './pages/userSignup';
import ForgotPassword from './pages/forgotPass';
import UserDash from './pages/userDashboard';
import RestaurantSignin from './pages/restaurantSignIn';
import RestaurantSignup from './pages/restaurantSignup';
import RestaurantDash from './pages/restaurantDashboard';
import UserOrders from './pages/userOrders';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/usersignin" element={<UserSignin/>}/>
          <Route path="/restaurantsignin" element={<RestaurantSignin/>}/>
          <Route path="/restaurantsignup" element={<RestaurantSignup/>}/>
          <Route path="/usersignup" element={<UserSignup/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/userdashboard" element={<UserDash/>}/>
          <Route path="/restaurantdashboard" element={<RestaurantDash/>}/>
          <Route path="/userorders" element={<UserOrders/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
