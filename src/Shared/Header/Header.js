import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);
    const navItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </>
    );
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <div className=" bg-blue-600 text-white sticky top-0 shadow z-50">
            <div className="container mx-auto">
                <div className="navbar py-3">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabindex="0"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabindex="0"
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-primary rounded-box w-52"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <Link
                            to="/"
                            className="btn btn-ghost normal-case text-xl"
                        >
                            Demo Project
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">{navItems}</ul>
                    </div>
                    <div className="navbar-end">
                        {user ? (
                            <button
                                onClick={handleSignOut}
                                className="btn btn-secondary"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Link to="/login" className="btn btn-secondary">
                                LogIn
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
