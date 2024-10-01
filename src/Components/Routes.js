import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../Pages/Index.js";
import SignIn from "../Pages/sign-in.js";
import User from "../Pages/user.js";
import Error from "../Pages/Error.js";

function Routes() {
    const router = createBrowserRouter([
        { path:"/", element:<App />, errorElement:<Error /> },
        { path: "/sign-in", element: <SignIn />, errorElement:<Error /> },
        { path: "/user", element: <User />, errorElement:<Error /> },// à changer pour prendre en compte le nom de l'user
        { path: "*", element: <Error /> }  // toutes les routes non trouvées retounent sur Error
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default Routes;