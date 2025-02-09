import React from "react";
import SidebarSVG from '../assets/Sidebar.svg';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <img src={SidebarSVG} alt="Sidebar" className="sidebar-svg"/>
        </aside>
    );
}

export default Sidebar;