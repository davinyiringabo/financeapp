import { Menu, Modal, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbEyeCheck } from "react-icons/tb";
import AddTransactionExpense from "../Modals/AddTransaction/AddExpense";
import { useState } from "react";
import AddTransactionIncome from "../Modals/AddTransaction/AddIncome";

const AddTransactionDropdown = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openExpense, setOpenExpense] = useState(false);
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <button className="text-[90%]">Add Transactions</button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={open}
          leftSection={
            <IoIosAddCircleOutline
              style={{ width: rem(14), height: rem(14) }}
            />
          }
          className="text-[75%]"
        >
          Add Income per Period
        </Menu.Item>
        <Menu.Item
          onClick={()=> setOpenExpense(true)}
          leftSection={
            <TbEyeCheck style={{ width: rem(14), height: rem(14) }} />
            
          }
          className="text-[75%]"
        >
          {/* <NavLink to={"/donors"} className={"w-full h-full"}> */}
            Add Expense per Period
          {/* </NavLink> */}
        </Menu.Item>
      </Menu.Dropdown>
      <Modal opened={openExpense} onClose={()=> setOpenExpense(false)} title="Add New Transaction Expense">
        <AddTransactionExpense close={()=> setOpenExpense(false)} />
      </Modal>
      <Modal opened={opened} onClose={close} title="Add New Transaction Income">
        <AddTransactionIncome close={close} />
      </Modal>
    </Menu>
  );
};

export default AddTransactionDropdown;
