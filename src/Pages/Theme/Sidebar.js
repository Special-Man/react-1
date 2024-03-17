import React from "react";
import {Link} from "react-router-dom";


const Sidebar = () => {
    return (
        <div class="sidebar">
        <ul className ="sidebar-nav">
            <li>

                <Link to="/Pages/UserManagement">
                    <a>User Massnagement</a>
                </Link>
            </li>

            <li>
            <Link to="/Pages/Faq">
            <a>Fast And Qurios</a>
                    </Link>
            </li>

            <li>
            <Link to="/Pages/Contact">
                    <a>Contact</a>
                    </Link>
            </li>
        </ul>
        </div>

    );
};

export default Sidebar;