import React from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const Dashboard = () => {
  const pooledData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Amount Pooled',
        data: [1200, 1900, 3000, 5000, 2300, 3200, 4200],
        fill: false,
        backgroundColor: '#00bcd4',
        borderColor: '#00bcd4',
      },
    ],
  };

  const withdrawalsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Withdrawals',
        data: [500, 300, 200, 400, 300, 500, 700],
        fill: false,
        backgroundColor: '#a6b1eb',
        borderColor: '#a6b1eb',
      },
    ],
  };

  const claimsData = {
    labels: ['Approved', 'Rejected', 'Pending'],
    datasets: [
      {
        data: [15, 5, 2],
        backgroundColor: ['#a0cced', '#00bcd4', '#a6b1eb'],
        hoverBackgroundColor: ['#a0cced', '#00bcd4', '#a6b1eb'],
      },
    ],
  };

  const governanceData = {
    labels: ['Votes for Changes', 'Votes Against Changes'],
    datasets: [
      {
        label: 'Governance Votes',
        data: [120, 30],
        backgroundColor: ['#a0cced', '#a6b1eb'],
        hoverBackgroundColor: ['#a0cced', '#a6b1eb'],
      },
    ],
  };

  return (
    <div className="min-h-screen flex mt-8">
      <div className="w-1/5 bg-[#ecf5fb] p-4 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Overview</h3>
            <p className="text-sm text-gray-600">Summary of the dashboard metrics</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Pooled Amount</h3>
            <p className="text-sm text-gray-600">$1200 in June</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Withdrawals</h3>
            <p className="text-sm text-gray-600">$500 in June</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Claims</h3>
            <p className="text-sm text-gray-600">15 Approved</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Governance</h3>
            <p className="text-sm text-gray-600">120 Votes for Changes</p>
          </div>
        </div>
      </div>
      <div className="w-4/5 p-4 bg-[#ecf5fb]">
        <h1 className="text-3xl font-bold mb-4">P2P Insurance Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Amount Pooled Over Time</h2>
            <Line data={pooledData} />
            <p className="mt-2 text-gray-600">This chart shows the amount of money pooled over time.</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Withdrawals Over Time</h2>
            <Line data={withdrawalsData} />
            <p className="mt-2 text-gray-600">This chart shows the amount of withdrawals over time.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Claim Status</h2>
            <div className="w-3/5 mx-auto">
              <Doughnut data={claimsData} />
            </div>
            <p className="mt-2 text-gray-600">This chart shows the status of claims (approved, rejected, pending).</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Governance Votes</h2>
            <Bar data={governanceData} />
            <p className="mt-2 text-gray-600">This chart shows the governance votes (for changes, against changes).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
