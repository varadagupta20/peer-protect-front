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

const PooledChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Amount Pooled Over Time</h2>
      <p className="text-sm mb-4">This chart shows the amount of money pooled by the community over time. It helps to visualize the growth and contributions of members to the insurance pool.</p>
      <Line data={data} />
    </div>
  );
};

export default PooledChart;