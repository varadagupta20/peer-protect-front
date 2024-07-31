import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Basic email validation
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
      } else {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }

    // Phone number validation
    if (name === 'phone') {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(value)) {
        setErrors((prev) => ({ ...prev, phone: 'Phone number must be 10 digits' }));
      } else {
        setErrors((prev) => ({ ...prev, phone: '' }));
      }
    }

    // Password validation
    if (name === 'password') {
      const minLength = 6; // Example: Minimum length criteria
      if (value.length < minLength) {
        setErrors((prev) => ({ ...prev, password: 'Password must be at least 6 characters' }));
      } else {
        setErrors((prev) => ({ ...prev, password: '' }));
      }
    }

    // Confirm password validation
    if (name === 'confirmPassword' && isRegister) {
      if (value !== formData.password) {
        setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: '' }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final validation check before submission
    if (isRegister) {
      if (
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword ||
        !formData.phone ||
        !formData.name ||
        errors.email ||
        errors.password ||
        errors.confirmPassword ||
        errors.phone
      ) {
        alert('Please correct the errors before submitting');
        return;
      }
      alert('Successfully Registered');
    } else {
      if (!formData.email || !formData.password || errors.email || errors.password) {
        alert('Please correct the errors before submitting');
        return;
      }
      alert('Successfully Logged In');
    }
    navigate('/Dashboard'); // Redirect to home page after successful login/register
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          {isRegister ? 'Register' : 'Login'}
        </h1>
        <div className="text-center mb-4">
          {!isRegister && (
            <p className="text-indigo-600">
              Don't have an account yet?{' '}
              <button
                onClick={() => {
                  setIsRegister(true);
                  setErrors({});
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                  });
                }}
                className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline"
              >
                Sign Up here!
              </button>
            </p>
          )}
          {isRegister && (
            <button
              onClick={() => {
                setIsRegister(false);
                setErrors({});
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  password: '',
                  confirmPassword: ''
                });
              }}
              className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline"
            >
              Already have an account? Login
            </button>
          )}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </>
          )}
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          {isRegister && (
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Re-enter Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isRegister ? 'Register' : 'Login'}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center text-gray-700">
          ...or login via
        </div>
        <div className="mt-2">
          <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login via Google
          </button>
          <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2">
            Login via Facebook
          </button>
        </div>
      </div>
    </div>
  );
}