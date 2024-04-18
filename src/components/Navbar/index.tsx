import AddTransactionDropdown from "../Dropdown/AddTransactionDropdown";
import Dropdown from "../Dropdown/BudgetDropdown";
// import donor from "../../assets/donor.png";
import logo from "../../assets/finance_logo.jpg"
import { NavLink } from "react-router-dom";
import ViewTransactionDropdown from "../Dropdown/ViewTransactionDropdown";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between h-[10vh] items-center px-4 shadow-sm shadow-neutral-500 sticky top-0 bg-white">
      <div className="h-full flex flex-row items-center pl-5 pt-1">
        <img src={logo} alt="Donor logo" width={45} height={45} className="" />
      </div>
      <div className="w-3/4 h-full flex justify-center gap-10 items-center">
        <NavLink to={"/"} className="text-[90%]">
          Home
        </NavLink>
        <Dropdown />
        <AddTransactionDropdown/>
        <ViewTransactionDropdown/>
        <NavLink to={"/report"} className="text-[90%]">
          Report
        </NavLink>

      </div>
    </div>
  );
};
export default Navbar;
