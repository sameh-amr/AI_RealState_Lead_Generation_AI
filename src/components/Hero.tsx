import React from 'react';
import { ArrowRight, TrendingUp, Home, Shield } from 'lucide-react';
import { SITE_TITLE, SITE_DESCRIPTION } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {SITE_TITLE}
              <span className="block text-blue-600 mt-1">Investing Made Intelligent</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
              {SITE_DESCRIPTION}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                Try RealtyBot Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200">
                Learn More
              </button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">High ROI</span>
              </div>
              <div className="flex items-center">
                <Home className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Diverse Options</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Secure Investment</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-64 rounded-lg flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h3 className="text-2xl font-bold mb-2">RealtyBot AI Assistant</h3>
                  <p className="opacity-90">Your intelligent guide to real estate investment</p>
                </div>
              </div>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 text-xs font-bold">AI</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                    How can I help you with real estate investments today?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex items-center justify-center h-10 px-4 bg-blue-600 text-white text-sm rounded-full">
                    Ask RealtyBot a question
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;