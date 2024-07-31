import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CountUp from 'react-countup';

// Example data reflecting insurance pool metrics in rupees
const data = [
  { name: 'Jan 1', totalClaimsPaid: 120000, totalContributions: 500000 },
  { name: 'Feb 1', totalClaimsPaid: 150000, totalContributions: 550000 },
  { name: 'Mar 1', totalClaimsPaid: 180000, totalContributions: 600000 },
  { name: 'Apr 1', totalClaimsPaid: 160000, totalContributions: 580000 },
  { name: 'May 1', totalClaimsPaid: 200000, totalContributions: 620000 },
];

const BalanceChart = () => {
  return (
    <div className="relative" style={{ padding: '20px', width: '100%', height: '400px' }}>
      <h3 className="text-2xl font-bold mb-1">Insurance Pool Performance</h3>
      <p className="text-sm text-gray-500 mb-4">Jan 1 - May 1, 2024</p>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="totalClaimsPaid" stroke="#3d4fab" isAnimationActive={true} animationDuration={2000} />
          <Line type="monotone" dataKey="totalContributions" stroke="#00bcd4" isAnimationActive={true} animationDuration={2000} />
        </LineChart>
      </ResponsiveContainer>
      <div className="absolute top-2 right-2 flex space-x-4">
        <div className="bg-[#ecf5fb] p-2 rounded shadow-md w-32">
          <p className="text-sm font-bold text-[#3d4fab] mb-1">Total Claims Paid</p>
          <h2 className="text-[#3d4fab] text-md">
            <CountUp start={0} end={200000} duration={2.5} separator="," prefix="₹ " />
          </h2>
        </div>
        <div className="bg-[#ecf5fb] p-2 rounded shadow-md w-32">
          <p className="text-sm font-bold text-[#3d4fab] mb-1">Total Contributions</p>
          <h2 className="text-[#3d4fab] text-md">
            <CountUp start={0} end={620000} duration={2.5} separator="," prefix="₹ " />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BalanceChart;
