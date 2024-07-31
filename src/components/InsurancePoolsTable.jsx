// src/components/InsurancePoolsTable.jsx

import React from 'react';

const InsurancePoolsTable = ({ pools }) => {
  return (
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Available Insurance Pools</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Pool Size</th>
            <th className="py-2 px-4 border-b">Premium</th>
            <th className="py-2 px-4 border-b">Term</th>
            <th className="py-2 px-4 border-b">Details</th>
          </tr>
        </thead>
        <tbody>
          {pools.map((pool, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{pool.name}</td>
              <td className="py-2 px-4 border-b">{pool.poolSize}</td>
              <td className="py-2 px-4 border-b">{pool.premium}</td>
              <td className="py-2 px-4 border-b">{pool.term}</td>
              <td className="py-2 px-4 border-b">{pool.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InsurancePoolsTable;
