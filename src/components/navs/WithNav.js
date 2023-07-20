import React from "react";
import NewNav from "./Navbar";
import { Outlet } from "react-router-dom";

export default () => {
    return (
        <>
            <div className='bg-delft-200 flex justify-center items-center mx-auto shadow-lg border-b border-delft-200 '>
                <NewNav />
            </div>
            <Outlet />
        </>
    );
};