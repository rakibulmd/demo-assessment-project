import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-blue-700 text-white">
            <div className="container mx-auto px-2  h-screen flex justify-start items-center">
                <div>
                    <h2 className="text-5xl mb-5">Welcome to Demo Project</h2>
                    <Link to="/dashboard" className="btn btn-secondary">
                        Go To Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
