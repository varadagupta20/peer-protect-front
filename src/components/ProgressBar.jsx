import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ProgressBar = ({ label, value, amount, color }) => {
  const [props, api] = useSpring(() => ({
    from: { width: '0%' },
    to: { width: `${value}%` },
    config: { duration: 1000 },
    reset: true,
  }));

  useEffect(() => {
    api.start({ width: `${value}%` });
  }, [value, api]);

  return (
    <div className="my-4 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between text-sm text-gray-700 mb-2">
        <span className="font-semibold">{label}</span>
        <span className="font-medium">{amount} ₹</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <animated.div 
          style={{ 
            ...props, 
            height: '100%', 
            background: color, 
            borderRadius: 'full' 
          }} 
        />
      </div>
      <div className="text-right text-sm mt-2" style={{ color }}>
        {value}%
      </div>
    </div>
  );
};

export default ProgressBar;
