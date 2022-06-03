import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-end bg-blue-700 text-white">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}

                <div className="flex items-center justify-end bg-blue-600">
                    <label
                        tabIndex="1"
                        htmlFor="my-drawer-4"
                        className="btn btn-ghost"
                    >
                        {user?.displayName}'s Dashboard
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 ml-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 mt-12 bg-blue-700 text-white">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">Customers</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/orders">Orders</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
