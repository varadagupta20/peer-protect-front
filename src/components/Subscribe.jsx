import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!checked) {
      setError('Please to agree to the Terms and Conditions.');
      return;
    }
    alert('Subscribed successfully!');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2 text-center text-[#3d4fab]">Subscribe to our Newsletter</h2>
      <h3 className="text-lg mb-6 text-center text-[#2d6a99]">Stay updated with our latest news and offers</h3>
      <div className="flex items-center mb-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="rounded-l-full p-4 flex-grow border border-gray-300 text-lg"
        />
        <button
          onClick={handleSubmit}
          className="rounded-r-full bg-[#3d4fab] hover:bg-[#2d6a99] text-white p-4 px-6 text-lg"
        >
          Subscribe
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
      <div className="text-sm flex items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mr-2"
        />
        <span>
          I have read all the{' '}
          <a href="./issue aw topics.pdf" target="_blank" className="underline text-[#3d4fab]">
            terms and conditions
          </a>
        </span>
      </div>
    </div>
  );
};

export default Subscribe;
