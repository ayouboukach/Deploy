import PrivateRouteGuard from 'Guards/PrivateGuard';
import PublicRouteGuard from 'Guards/PublicGuard';
import React, { Component, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import { router } from 'routes';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
class App extends Component {
  render() {
    return (
      <Suspense fallback={loading}>
      <RouterProvider router={router} />
      </Suspense>
    )
  }
}

export default App;
