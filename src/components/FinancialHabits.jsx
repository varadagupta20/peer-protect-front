import React, { useEffect, useState } from 'react';
import BalanceChart from './BalanceChart'; // Ensure to use the correct component import

const FinancialHabits = () => {
  const [balance, setBalance] = useState(0);
  const [cashFlow, setCashFlow] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById('financial-habits');
      if (component && component.getBoundingClientRect().top < window.innerHeight) {
        animateGraph();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const animateGraph = () => {
    let graphHeight = 0;
    let balanceValue = 0;
    let cashFlowValue = 0;
    const graphInterval = setInterval(() => {
      if (graphHeight >= 100) {
        clearInterval(graphInterval);
      } else {
        graphHeight += 1;
        balanceValue += 3; // 3 times faster
        cashFlowValue -= 1;
        setBalance(balanceValue);
        setCashFlow(cashFlowValue);
      }
    }, 30);
  };

  return (
    <div id="financial-habits" className="flex flex-col md:flex-row justify-between items-start mt-8 p-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <BalanceChart />
      </div>
      <div className="w-full md:w-1/2 md:ml-8">
        {/* <h2 className="text-3xl font-bold mb-4 text-blue-600">Step 2</h2> */}
        <h3 className="text-3xl font-semibold mb-4 text-[#4c63d6]">Understand Your Insurance Pool Metrics</h3>
        <p className="text-[#4c63d6] mb-4">
          The graph illustrates the cumulative payments made over time in your peer-to-peer insurance pool. It shows how your contributions accumulate and how they impact the pool's overall financial health.
        </p>
        <ul className="list-disc pl-5 space-y-4 text-[#2d6a99]">
          <li>Track your total contributions and understand how your payments grow over time.</li>
          <li>Analyze the accumulation to ensure adequate coverage and balance in your insurance pool.</li>
          <li>Visualize your financial impact on the pool, ensuring transparency and better management of your investments.</li>
        </ul>
      </div>
    </div>
  );
};

export default FinancialHabits;
