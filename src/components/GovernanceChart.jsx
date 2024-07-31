import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GovernanceChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Governance Votes</h2>
      <p className="text-sm mb-4">This chart shows the distribution of votes on governance decisions. It highlights the active participation of members in the decision-making process, enhancing transparency and trust.</p>
      <Bar data={data} />
    </div>
  );
};

export default GovernanceChart;