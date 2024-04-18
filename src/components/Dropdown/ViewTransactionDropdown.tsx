import { Menu, rem } from "@mantine/core";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbEyeCheck } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const ViewTransactionDropdown = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <button className="text-[90%]">View Transactions</button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IoIosAddCircleOutline
              style={{ width: rem(14), height: rem(14) }}
            />
          }
          className="text-[75%]"
        >
          <NavLink to={"/transactions/income"}>
            View Income per Period
          </NavLink>
        </Menu.Item>
        <Menu.Item
          leftSection={
            <TbEyeCheck style={{ width: rem(14), height: rem(14) }} />
          }
          className="text-[75%]"
        >
          <NavLink to={"/transactions/expenses"}>
            View Expenses per Period
          </NavLink>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ViewTransactionDropdown;
