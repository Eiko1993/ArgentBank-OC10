import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../Pages/Index";
import SignIn from "../Pages/sign-in";
import User from "../Pages/user";
import Error from "../Pages/Error";

    const router = createBrowserRouter([
        { path:"/", element:<Index />, errorElement:<Error /> },
        { path: "/sign-in", element: <SignIn />, errorElement:<Error /> },
        { path: "/user", element: <User />, errorElement:<Error /> },// à changer pour prendre en compte le nom de l'user
        { path: "*", element: <Error /> }  // toutes les routes non trouvées retounent sur Error
    ]);

    function Routes() {
        return(
            <RouterProvider router={router} />
        )
    }
    
    export default Routes;