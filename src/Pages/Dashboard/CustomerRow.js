import React from "react";

const CustomerRow = ({ customer, index, pageSize, currentPage }) => {
    return (
        <tr className="hover">
            <th>{index + 1 + pageSize * currentPage}</th>
            <td>{customer?.profile?.name}</td>
            <td>{customer?.email}</td>
            <td>{customer?.profile?.address}</td>
            <td>
                {customer?.roles[0]} {customer?.roles[1]}
            </td>
        </tr>
    );
};

export default CustomerRow;
