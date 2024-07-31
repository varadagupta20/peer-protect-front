import React from 'react';
import ProgressBar from './ProgressBar';

const TrackSpending = () => {
  const progressBarData = [
    { label: 'Power and energy', value: 31, amount: 2795, color: 'red' },
    { label: 'Food and Drink', value: 62, amount: 420, color: 'orange' },
    { label: 'Travel', value: 50, amount: 1367, color: 'pink' },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start mt-8 p-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Step 3</h2>
        <h3 className="text-2xl font-semibold mb-4">Track Your Spending</h3>
        <ul className="list-disc pl-5 space-y-4 text-gray-600">
          <li>Monitor your expenses and make adjustments as needed.</li>
          <li>Identify areas where you can save money.</li>
          <li>Ensure you are on track with your financial goals.</li>
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {progressBarData.map((item, index) => (
            <ProgressBar key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackSpending;
