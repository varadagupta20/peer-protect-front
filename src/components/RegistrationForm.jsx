import React, { useState } from 'react';
import InsurancePoolsTable from './InsurancePoolsTable';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    selectedPool: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('User registered with data:', formData);
  };

  const pools = [
    { name: 'Health Pool', poolSize: '1000 members', premium: '$10/month', term: '12 months', details: 'Comprehensive health insurance' },
    { name: 'Travel Pool', poolSize: '500 members', premium: '$5/month', term: '6 months', details: 'Travel insurance for frequent travelers' },
    { name: 'Property Pool', poolSize: '200 members', premium: '$20/month', term: '24 months', details: 'Insurance for property and assets' },
    { name: 'Auto Pool', poolSize: '300 members', premium: '$15/month', term: '12 months', details: 'Auto insurance for vehicles' },
  ];

  return (
    <div className="container mx-auto p-6 bg-[#ecf5fb] rounded-lg shadow-lg mt-7">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-[#3d4fab]">Register for Insurance Pool</h1>
      <form onSubmit={handleRegister} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your age"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Select Pool</label>
          <select
            name="selectedPool"
            value={formData.selectedPool}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a pool</option>
            {pools.map((pool, index) => (
              <option key={index} value={pool.name}>{pool.name}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register
          </button>
        </div>
      </form>
      <div className="mt-10">
        {/* <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Insurance Pools</h2> */}
        <InsurancePoolsTable pools={pools} />
      </div>
    </div>
  );
};

export default RegistrationForm;
