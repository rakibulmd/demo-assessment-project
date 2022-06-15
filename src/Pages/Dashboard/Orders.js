import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Foods from "./Foods";

const Orders = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await axios
                .get("http://localhost:5000/foods")
                .then((response) => setFoods(response.data))
                .catch((error) => console.log(error));
        };
        getData();
    }, []);
    return (
        <>
            <h2 className="text-3xl text-center py-3  pb-7 uppercase">
                Orders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {foods.map((food) => (
                    <Foods key={food._id} food={food}></Foods>
                ))}{" "}
            </div>
        </>
    );
};

export default Orders;
