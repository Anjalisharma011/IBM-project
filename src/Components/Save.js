import React from 'react';
import { Link } from 'react-router-dom';
import profilelogo from './profilelogo.jpg';
import heroImage from './heroImage.jpg';

const Save = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <nav className="w-full flex justify-between items-center p-4 bg-white shadow-md fixed top-0 z-50">
        <div className="flex items-center">
          <img src={profilelogo} alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">WealthBuild</h1>
        </div>
        <ul className="flex space-x-6 text-lg ml-auto mr-7">
          <li>
            <Link to="/home" className="hover:text-blue-500 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/invest" className="hover:text-blue-500 cursor-pointer">
              Invest
            </Link>
          </li>
          <li>
            <Link to="/save" className="hover:text-blue-500 cursor-pointer">
              Save
            </Link>
          </li>
          <li>
            <Link to="/spend" className="hover:text-blue-500 cursor-pointer">
              Spend
            </Link>
          </li>
          <li>
            <Link to="/borrow" className="hover:text-blue-500 cursor-pointer">
              Borrow
            </Link>
          </li>
          <li>
            <Link to="/learn" className="hover:text-blue-500 cursor-pointer">
              Learn
            </Link>
          </li>
        </ul>
        <Link to="/profile">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            My Profile
          </button>
        </Link>
      </nav>

      <header className="w-full bg-blue-600 text-white flex flex-col items-center justify-center py-20 mt-16 relative">
        <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-stroke">Effective Saving Plans</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Learn how to build a robust savings plan to secure your financial future.
          </p>
        </div>
      </header>

      <section className="w-full max-w-6xl mt-12 p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Saving Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transform transition-transform duration-200 hover:bg-blue-500 hover:text-white hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Emergency Fund</h3>
            <p>Set up an emergency fund to cover unexpected expenses.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transform transition-transform duration-200 hover:bg-blue-500 hover:text-white hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Retirement Savings</h3>
            <p>Plan and save for a comfortable retirement.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transform transition-transform duration-200 hover:bg-blue-500 hover:text-white hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Investment Accounts</h3>
            <p>Learn about different investment accounts to grow your savings.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Save;
