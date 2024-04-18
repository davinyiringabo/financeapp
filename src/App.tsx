import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./app/Layout";
import LandingPage from "./app/Landing";
import BudgetPage from "./app/budget";
import ReportsPage from "./app/report";
import NotFoundPage from "./app/404";
import TransactionIncomes from "./app/transactions/Incomes";
import TransactionExpenses from "./app/transactions/Expenses";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/budget"
            element={
              <Layout>
                <BudgetPage />
              </Layout>
            }
          />
          <Route
            path="/transactions/income"
            element={
              <Layout>
                <TransactionIncomes />
              </Layout>
            }
          />
          <Route
            path="/transactions/expenses"
            element={
              <Layout>
                <TransactionExpenses />
              </Layout>
            }
          />
          <Route
            path="/report"
            element={
              <Layout>
                <ReportsPage />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFoundPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
