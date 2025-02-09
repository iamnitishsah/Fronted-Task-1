import React from "react";
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content.jsx';

const App = () => {
    return (
        <div className="flex h-screen">
            <Sidebar className="w-1/4" />
            <div className="flex flex-col w-3/4">
                <Navbar className="h-16" />
                <Content className="flex-grow" />
            </div>
        </div>
    )
}

export default App