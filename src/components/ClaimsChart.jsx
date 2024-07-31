import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ClaimsChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Claim Status</h2>
      <p className="text-sm mb-4">This chart shows the status of claims submitted by members. It helps to track the number of approved, rejected, and pending claims, providing transparency into the claims process.</p>
      <Doughnut data={data} />
    </div>
  );
};

export default ClaimsChart;