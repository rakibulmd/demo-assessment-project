import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [changed, setChanged] = useState(false);
    const handlePayment = async (order) => {
        const proceed = window.confirm(
            `Are you sure to make payment? Amount is: ${
                order.quantity * order.price
            }`
        );
        if (proceed) {
            const response = await axios.put(
                `http://localhost:5000/myOrders/${order._id}`
            );
            if (response.data.modifiedCount) {
                //make another post request to let the restaurant owner know that there is a order for him
                alert("paid, your order is processing");
                setChanged(!changed);
            }
        }
    };
    useEffect(() => {
        const getData = async () => {
            await axios
                .get("http://localhost:5000/myOrders")
                .then((response) => setMyOrders(response.data))
                .catch((error) => console.lop(error));
        };

        getData();
    }, [changed]);
    return (
        <div className="text-center p-5">
            <div>
                {myOrders.map((order) => (
                    <div
                        key={order._id}
                        className="py-3 m-3 rounded border-2 bg-gray-600"
                    >
                        <h2 className="mb-3 font-bold text-2xl">
                            Order Id: {order._id}
                        </h2>
                        <h2>Food Id: {order.foodId}</h2>
                        <h2>Restaurant Id: {order.restaurantId}</h2>
                        <h2>Order Id: {order._id}</h2>
                        <div className="flex justify-center gap-5 font-bold mt-5">
                            <h2>Price: {order.price}</h2>
                            <h2>Quantity: {order.quantity}</h2>
                        </div>
                        <div className="mt-5">
                            {order.paid ? (
                                <button className="btn btn-success">
                                    Processing food
                                </button>
                            ) : (
                                <button
                                    onClick={() => handlePayment(order)}
                                    className="btn btn-warning"
                                >
                                    Pay Now
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
