import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Foods = ({ food }) => {
    const navigate = useNavigate();
    const { description } = food;
    const [quantity, setQuantity] = useState(1);
    const handleBooking = async (foodId, restaurantId, price, quantity) => {
        const order = {
            status: "placed",
            paid: false,
            delivered: false,
            foodId,
            restaurantId,
            price,
            quantity,
        };
        const response = await axios.post(`http://localhost:5000/order`, order);
        if (response.data.insertedId) {
            alert("Order booked");
            navigate("/dashboard/myOrders");
        }
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl text-black">
            <figure>
                <img
                    src="https://i.ibb.co/bWpDQD0/Homemade-French-Fry-Recipe.jpg"
                    alt="Different pictures of foods"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {food.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h2 className="card-title">
                    Restaurant Id: {food?.restaurantId}
                </h2>
                <h2 className="card-title">Food Id: {food?._id}</h2>
                <p>{description.slice(0, 100)}</p>
                <h2 className="card-title text-blue-700 text-3xl pb-5">
                    {" "}
                    Price: ${food.price}
                </h2>
                <div className="flex gap-3">
                    <span className="font-bold">Quantity: </span>
                    <button
                        onClick={() => {
                            setQuantity(quantity - 1);
                        }}
                        className="btn btn-sm btn-warning"
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        onClick={() => {
                            setQuantity(quantity + 1);
                        }}
                        className="btn btn-sm btn-success"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() =>
                        handleBooking(
                            food._id,
                            food.restaurantId,
                            food.price,
                            quantity
                        )
                    }
                    className="btn btn-primary"
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Foods;
