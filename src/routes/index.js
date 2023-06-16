import PrivateRouteGuard from "Guards/PrivateGuard";
import PublicRouteGuard from "Guards/PublicGuard";
import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const Admin = React.lazy(() => import('layouts/Admin'))
const Dashboard = React.lazy(() => import('views/admin/Dashboard'))
const Maps = React.lazy(() => import('views/admin/Maps'))
const Settings = React.lazy(() => import('views/admin/Settings'))
const Tables = React.lazy(() => import('views/admin/Tables'))
const DosClotMois = React.lazy(() => import('views/admin/DossierClotParMois'))
const Login = React.lazy(() => import('views/auth/Login'))
const Auth = React.lazy(() => import('layouts/Auth'))
const Register = React.lazy(() => import('views/auth/Register'))
const ContainerApp = React.lazy(() => import('./Container'))
const Lost = React.lazy(() => import('pages/Lost'))
const router = createBrowserRouter([
    {
    path: "",
    element: <ContainerApp />,
    children: [
      {
        path: "/",
        element: <PublicRouteGuard />,
        children: [
          { path: "", 
                element: <Auth />,
                children: 
                [
                    {
                        path: "/auth/login",
                        element: <Login />
                    },
                    {
                        path: "/auth/register",
                        element: <Register />
                    },
                    {
                        path: "",
                        element: <Navigate to="/auth" />
                    },
                    {
                        path: "/auth",
                        element: <Navigate to="/auth/login" />
                    }
                ]
           }
        ],
    },
    {
        path: "/admin",
        element: <PrivateRouteGuard />,
        children: [
            {
                path: "",
                element: <Admin />,
                children:
                    [
                        {
                            path: "/admin/accueil",
                            element: <Dashboard />
                        },
                        {
                            path: "/admin/maps",
                            element: <Maps />
                        },
                        {
                            path: "/admin/parametres",
                            element: <Settings />
                        },
                        {
                            path: "/admin/tables",
                            element: <Tables />
                        },
                        {
                            path: "/admin/dossier-cloture-par-mois",
                            element: <DosClotMois />
                        },
                        {
                            path: "",
                            element: <Navigate to="/admin/accueil" />
                        }
                    ]
            }
        ],
    },
    {
        path: "*",
        element: <Navigate to="/404" />,
    },
    { path: "404", element: <Lost /> }
    ] 
    }
    ],
  );

export { router };