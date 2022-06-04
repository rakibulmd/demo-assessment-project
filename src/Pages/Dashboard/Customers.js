import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerRow from "./CustomerRow";

const Customers = () => {
    const [pageCount, setPageCount] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [customers, setCustomers] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://assessment-project-server.herokuapp.com/customers?page=${currentPage}&pagesize=${pageSize}`
            );
            console.log(response);
            setCustomers(response.data);
        };
        getData();
    }, [pageCount, pageSize, currentPage]);
    useEffect(() => {
        const get = async () => {
            const { data } = await axios.get(
                `https://assessment-project-server.herokuapp.com/customerCount`
            );
            setPageCount(Math.ceil(data.count / pageSize));
        };
        get();
    }, [pageSize]);
    if (!customers) {
        return (
            <div className="flex justify-center items-center h-screen">
                <button class="btn loading">loading</button>
            </div>
        );
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
                                pageSize={pageSize}
                                currentPage={currentPage}
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
            <div className="btn-group flex justify-center py-3 mb-12">
                {[...Array(pageCount).keys()].map((number) => (
                    <button
                        className={
                            currentPage === number
                                ? "btn  bg-secondary hover:bg-primary text-black hover:text-white"
                                : "btn"
                        }
                        onClick={() => setCurrentPage(number)}
                        key={number}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Customers;
