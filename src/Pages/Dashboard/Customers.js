import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerRow from "./CustomerRow";

const Customers = () => {
    const [pageCount, setPageCount] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [customers, setCustomers] = useState(null);
    const [customersCount, setCustomersCount] = useState(0);
    const handlePageSizeChange = (event) => {
        event.preventDefault();
        setPageSize(event.target.value);

        if (pageSize < currentPage) {
            setCurrentPage(0);
        }
    };
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://assessment-project-server.herokuapp.com/customers?page=${currentPage}&pagesize=${pageSize}`
            );

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
            setCustomersCount(data.count);
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
            <div className="">
                <p className="text-center">{`Showing ${pageSize} of ${customersCount} entries`}</p>
                <div className="flex justify-center pt-3">
                    <select
                        onChange={handlePageSizeChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-24 p-2.5"
                    >
                        <option selected>5</option>
                        <option>10</option>
                        <option>15</option>
                    </select>
                </div>
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
