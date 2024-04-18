import axios from 'axios';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

const ReportPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [data, setData] = useState({
    total_monthly_expenses: '',
    total_monthly_incomes: '',
    total_weekly_expenses: '',
    total_weekly_incomes: '',
    total_weekly_budget: '',
    total_monthly_budget: '',
  });
  const [loading, setLoading] = useState(false);

  const fetchReportData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://financeapp-3dlh.onrender.com/api/report');
      console.log('Expenses', response);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching report data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://financeapp-3dlh.onrender.com/api/transaction/expenses/category/top');
      console.log('Expenses', response);
      setExpenses(response.data);
    } catch (error) {
      // console.error('Error fetching expenses data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReportData();
    fetchExpenses();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Financial Report</h1>

        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader color="#4F46E5" loading={true} size={50} />
          </div>
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-1 gap-4">
              <ReportItem title="Expenses Vs Incomes per month:" value={Number(data.total_monthly_incomes) - Number(data.total_monthly_expenses)} />
              <ReportItem title="Expenses Vs Incomes per week:" value={Number(data.total_weekly_incomes) - Number(data.total_weekly_expenses)} />
              <ReportItem title="Current Budget Balance:" value={Number(data.total_monthly_budget) - Number(data.total_monthly_expenses)} />
              <ReportItem title="Average Expense/Income ratio per week:" value={Number(data.total_weekly_expenses) / Number(data.total_weekly_incomes ?? "1")} />
              <ReportItem title="Average Expense/Income ratio per month:" value={Number(data.total_monthly_expenses) / Number(data.total_monthly_incomes ?? "1")} />
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Most Expense Categories </h2>
                <ul>
                  {expenses.map((expense: {
                    category: string;
                    amount: number;
                    id: string;
                  }) => (
                    <li key={expense.id} className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">{expense.category}</span>
                      <span className="text-red-500">${expense.amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ReportItem = ({ title, value }:{title: string; value: number}) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-xl font-bold text-green-500">{value}</p>
  </div>
);

export default ReportPage;
