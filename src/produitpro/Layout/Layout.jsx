import React from 'react'
import './Layout.css'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>
                <ul className='bar-links'>
                    <li className='link'>
                        <Link className='panier-link' to="/">Home</Link>
                    </li>
                    <li className='link'>
                        <Link className='panier-link' to="./MyPanier">My Panier</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Layout
