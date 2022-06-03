import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerRow from "./CustomerRow";

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
    if (!customers) {
        return <div>Loading</div>;
    }
    return (
        <div>
            <h2 className="text-3xl text-center py-3  pb-7 uppercase">
                Customers
            </h2>
            <div class="overflow-x-auto p-3">
                <table class="table table-compact w-full text-black">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Roles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <CustomerRow
                                key={customer._id}
                                customer={customer}
                                index={index}
                            ></CustomerRow>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Roles</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Customers;
