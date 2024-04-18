import { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import axios from "axios";
import { LuRefreshCw } from "react-icons/lu";
import { ClipLoader } from "react-spinners";

const DonationsPage = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchDonations = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:3455/api/transaction/expenses/all");
    console.log("Expenses", response);
    setDonors(response.data.reverse());
    setLoading(false);
  };
  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Expenses</h1>
      <div className="w-full flex justify-end gap-4">
        <button
          onClick={fetchDonations}
          className="py-2 px-4 bg-teal-500 text-center text-white font-semibold rounded-md text-sm flex items-center gap-2"
        >
          <LuRefreshCw color="white" /> Refresh
        </button>
      </div>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ClipLoader size={18} color="black" />
        </div>
      ) : donors.length > 0 ? (
        <Table className="mt-5">
          <TableHeader>
            <TableColumn>{""}</TableColumn>
            <TableColumn className="bg-red-200 py-2 text-center">Category</TableColumn>
            <TableColumn className="bg-red-200 text-center">Amount</TableColumn>
            <TableColumn className="bg-red-200 text-center">Date</TableColumn>
            <TableColumn className="bg-red-200 text-center">Timeline</TableColumn>
          </TableHeader>
          <TableBody>
            {donors.map(
              (
                donor: {
                  id: string;
                  amount: number;
                  category: string;
                  date: string;
                  time: string;
                },
                index: number,
              ) => (
                <TableRow key={donor.id}>
                  <TableCell
                    className={` ${index % 2 == 0 ? "bg-red-0" : ""} text-center mb-1`}
                  >
                    Expense {index + 1}
                  </TableCell>
                  <TableCell
                    className={` ${index % 2 == 0 ? "bg-red-0" : "bg-red-100"} text-center mb-1`}
                  >
                    {donor.category}
                  </TableCell>
                  <TableCell
                    className={` ${index % 2 == 0 ? "bg-red-0" : "bg-red-100"} text-center mb-1`}
                  >
                    {donor.amount}
                  </TableCell>
                  <TableCell
                    className={` ${index % 2 == 0 ? "bg-red-0" : "bg-red-100"} text-center mb-1`}
                  >
                    {`${donor.date.toLocaleLowerCase().split("-")[0]}-${donor.date.toLocaleLowerCase().split("-")[1]}-${donor.date.toLocaleLowerCase().split("-")[2].slice(0,2)}`}
                  </TableCell>
                  <TableCell
                    className={` ${index % 2 == 0 ? "bg-red-0" : "bg-red-100"} text-center mb-1`}
                  >
                    {donor.time}
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="w-full flex justify-center">
          <h4 className="text-[90%] mt-4">No Expenses Found</h4>
        </div>
      )}
    </div>
  );
};

export default DonationsPage;
