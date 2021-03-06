import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../Components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
  <BrowserRouter>
        
        <Routes>

          {/* <Route path="/login" element={<LoginScreen/>} /> */}
          <Route path="/login" element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
           }
           /> 

          <Route path="/*" element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
           }
           /> 



          {/* <Route path="/*" element={<DashboardRoutes /> }/>  */}
        
      </Routes>
  </BrowserRouter>

  )
}
