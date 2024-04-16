import React from "react";
import {Link, Outlet} from "react-router-dom";

export default function AppLayout(){
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/app/counter'}>Counter</Link>
                    </li>
                    <li>
                        <Link to={'/app/profile'}>My Profile</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>
        </React.Fragment>
    )
}
