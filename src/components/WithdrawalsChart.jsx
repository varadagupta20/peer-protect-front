import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WithdrawalsChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Withdrawals Over Time</h2>
      <p className="text-sm mb-4">This chart shows the withdrawals made by members over time. It provides insight into the claim activities and funds utilization within the pool.</p>
      <Line data={data} />
    </div>
  );
};

export default WithdrawalsChart;