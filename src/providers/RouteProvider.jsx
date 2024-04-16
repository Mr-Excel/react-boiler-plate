import React from "react";
import {RouterProvider} from "react-router-dom";
import router from "@/routes/index.jsx";

export default function RouteProvider(){
    return (
        <React.Fragment>
            <RouterProvider router={router} />
        </React.Fragment>
    )
}
