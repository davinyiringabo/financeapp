import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Manage Your Finances with Ease</h1>
          <p className="text-lg mb-8 ">Track expenses, manage incomes, and generate insightful reports effortlessly.</p>
          <button className="bg-white text-blue-500 hover:bg-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Expense Tracking</h3>
              <p className="text-gray-700">Effortlessly track your expenses in real-time, categorize them, and stay on top of your spending habits.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Income Management</h3>
              <p className="text-gray-700">Manage your various sources of income, categorize them, and analyze your cash flow effectively.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Detailed Reports</h3>
              <p className="text-gray-700">Generate comprehensive reports to gain valuable insights into your financial health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Take Control of Your Finances?</h2>
          <p className="text-lg mb-8 text-white"> start managing your money more effectively!</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
