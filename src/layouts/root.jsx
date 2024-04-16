import React from "react";
import {Link, Outlet} from "react-router-dom";

export default function DefaultLayout(){
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/app'}>App</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>
        </React.Fragment>
    )
}
