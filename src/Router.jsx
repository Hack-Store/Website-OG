import React from "react";
import {createBrowserRouter} from "react-router-dom";

const Index = React.lazy(() => import("./Routes/Index"));

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    }
]);

export default Router;
