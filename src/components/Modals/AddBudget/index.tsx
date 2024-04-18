/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from "react";
import axios from "axios";
import { NumberInput } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";

const AddBudget = ({ close }: { close: Function }) => {
  const [loading, setLoading] = useState(false);
  const [weekly, setWeekly] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [formData] = useState({
    id: uuidv4(),
    week: "",
    lastName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      id: uuidv4(),
      weekly: weekly,
      monthly: monthly,
    };

    axios
      .post("http://localhost:3455/api/budget/create", formData)
      .then(() => {
        notifications.show({
          title: "Create budget",
          message: "Successfully Created a budget! 🤥",
        });
        close();
      })
      .catch((error) => {
        console.error("Error creating budget", error);
        notifications.show({
          title: "Error creating budget:",
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
          <NumberInput
            label="Enter Weekly Budget"
            value={weekly}
            onChange={(e: any)=> setWeekly(e)}
            required
          />
        </div>
        <div className="mb-4">
          <NumberInput
            label="Enter Monthly Budget"
            value={monthly}
            onChange={(e: any)=> setMonthly(e)}
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

export default AddBudget;
