/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from "react";
import axios from "axios";
import { NumberInput, Select } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";

const AddTransactionIncome = ({ close }: { close: Function }) => {
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState();
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3455/api/transaction/income/create", {
        time: time,
        amount: amount,
      })
      .then(() => {
        notifications.show({
          title: "Create transaction",
          message: "Successfully Created a transaction! 🤥",
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
        <div className="mb-4">
          <NumberInput
            label="Amount"
            value={amount}
            onChange={(e: any) => setAmount(e)}
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

export default AddTransactionIncome;
