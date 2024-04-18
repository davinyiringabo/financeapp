/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from "react";
import axios from "axios";
import { NumberInput, Select, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import { DateInput } from "@mantine/dates";

const AddTransactionExpense = ({ close }: { close: Function }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState();
  const [time,setTime] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://financeapp-3dlh.onrender.com/api/transaction/expense/create", {
        category: category,
        date: date,
        amount: amount,
        time: time
      })
      .then(() => {
        notifications.show({
          title: "Create Expense",
          message: "Successfully Created a Expense!",
        });
        close();
      })
      .catch((error) => {
        console.error("Error creating transaction", error);
        notifications.show({
          title: "Error creating transaction:",
          message: error.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <TextInput
            label="Category"
            value={category}
            onChange={(e: any) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <NumberInput
            label="Amount"
            value={amount}
            onChange={(e: any)=> setAmount(e)}
            required
          />
        </div>
        <div className="mb-4">
          <DateInput
            value={date}
            onChange={(e: any)=> setDate(e)}
            label="Date"
            placeholder="Select Date"
          />
        </div>
        <div className="mb-4">
          <Select
            label="Time"
            value={time}
            onChange={(e: any) => setTime(e)}
            data={[
                {
                    label: "Weekly",
                    value: "weekly"
                },
                
                {
                    label: "Monthly",
                    value: "monthly"
                }
            ]}
            required
          />
        </div>
        <div className="mt-6">
          <button
            className="px-4 py-3 bg-[#3B82F6] text-center text-sm text-white rounded-lg font-semibold"
            type="submit"
          >
            {loading ? (
              <div>
                <ClipLoader size={18} color="white" />
              </div>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransactionExpense;
