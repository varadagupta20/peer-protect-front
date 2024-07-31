import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      icon: '👥', // Placeholder for icon
      title: 'Community-Driven Risk Management',
      description: 'Form and manage insurance pools, vote on decisions, and collectively assess risks.',
    },
    {
      icon: '💸', // Placeholder for icon
      title: 'Lower Premiums',
      description: 'Reduce costs by eliminating intermediaries and automating processes with smart contracts.',
    },
    {
      icon: '🔧', // Placeholder for icon
      title: 'Customizable Coverage',
      description: 'Tailor coverage to meet specific needs with flexible policies and modular products.',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mt-8 px-4 md:px-0">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="bg-[#ecf5fb] shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full md:w-1/3"
          style={{ height: '250px', width: '400px' }} // Adjust height to increase box size
        >
          <div className="text-3xl mb-4">{feature.icon}</div>
          <h2 className="text-xl font-semibold text-[#2d6a99]">{feature.title}</h2>
          <p className="text-[#4c63d6] mt-2">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
