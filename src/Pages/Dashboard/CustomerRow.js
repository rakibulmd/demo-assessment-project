import React from "react";

const CustomerRow = ({ customer, index, pageSize, currentPage }) => {
    return (
        <tr className="hover">
            <th>{index + 1 + pageSize * currentPage}</th>
            <td>{customer?.name}</td>
            <td>{customer?.email}</td>
            <td>{customer?.address}</td>
            <td>{/* {customer?.roles[0]} {customer?.roles[1]} */}a</td>
        </tr>
    );
};

export default CustomerRow;
