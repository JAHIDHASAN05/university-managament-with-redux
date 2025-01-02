import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPath } from "./admin.routes";

const router= createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        
    },
    {
        path:'/admin',
        element: <App/>,
        children:adminPath
    }
])

export default router