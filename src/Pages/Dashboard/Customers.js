import axios from "axios";
import React, { useEffect, useState } from "react";

const Customers = () => {
    const [customers, setCustomers] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("http://localhost:5000/customers");
            console.log(response);
            setCustomers(response.data);
        };
        getData();
    }, []);
    return (
        <div>
            <h2 className="text-3xl text-center py-3  uppercase">Customers</h2>
        </div>
    );
};

export default Customers;
