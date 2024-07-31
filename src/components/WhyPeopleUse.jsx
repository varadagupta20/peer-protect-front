import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const WhyPeopleUse = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    } else {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const boxContent = [
    {
      text: 'Lower Premiums',
      detail: "P2P insurance eliminates intermediaries, reducing costs associated with traditional insurance models.",
      extra: "This translates into lower premiums and more value for your money.",
      name: 'Insurance Expert',
    },
    {
      text: 'Enhanced Transparency',
      detail: "Blockchain technology ensures that all transactions and decisions are recorded transparently and immutably.",
      extra: "Members can track and verify all activities within the pool.",
      name: 'Blockchain Specialist',
    },
    {
      text: 'Community-Driven Decisions',
      detail: "Members have a direct say in how the insurance pool is managed, including coverage terms and claims processing.",
      extra: "This participatory approach fosters a greater sense of ownership and trust.",
      name: 'Community Manager',
    },
    {
      text: 'Customizable Coverage',
      detail: "P2P insurance allows for flexible and modular insurance products tailored to specific needs.",
      extra: "Adjust coverage dynamically based on real-time data and member input.",
      name: 'Insurance Advisor',
    },
    {
      text: 'Efficient Claims Processing',
      detail: "Smart contracts automate the claims process, ensuring fast and accurate payouts.",
      extra: "Reduce delays and administrative overhead with streamlined operations.",
      name: 'Tech Innovator',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#3d4fab]">Why People Use P2P Insurance</h2>
      <div className="relative flex items-center">
        <button
          className="absolute left-0 bg-[#99c1de] text-white p-3 rounded-full shadow-lg hover:bg-[#3d4fab] transform -translate-y-1/2"
          onClick={() => scroll('left')}
          style={{ top: '50%' }}
        >
          <FaArrowLeft />
        </button>
        <div
          className="flex overflow-x-auto scrollbar-hide space-x-4 sm:space-x-6 mx-4 sm:mx-8"
          ref={scrollRef}
        >
          {boxContent.map((content, index) => (
            <div
              key={index}
              className="min-w-[200px] sm:min-w-[250px] max-w-[350px] bg-[#ecf5fb] p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <p className="text-xl sm:text-xl mb-2 font-bold text-[#3d4fab]">{content.text}</p>
              <p className="text-s sm:text-s mb-2 text-[#2d6a99]">{content.detail}</p>
              <p className="text-s sm:text-s mb-4 text-[#2d6a99]">{content.extra}</p>
              {/* <span className="text-gray-600 text-xs sm:text-sm">{content.name}</span> */}
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 bg-[#2d6a99] text-white p-3 rounded-full shadow-lg hover:bg-[#3d4fab] transform -translate-y-1/2"
          onClick={() => scroll('right')}
          style={{ top: '50%' }}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WhyPeopleUse;
