import { Menu, Modal, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbEyeCheck } from "react-icons/tb";
import AddBudget from "../Modals/AddBudget";

const BudgetDropdown = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <button className="text-[90%]">Budget</button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={open}
          leftSection={
            <IoIosAddCircleOutline
              style={{ width: rem(14), height: rem(14) }}
            />
          }
        >
          Weekly Budget
        </Menu.Item>
        <Menu.Item
          onClick={open}
          leftSection={
            <TbEyeCheck style={{ width: rem(14), height: rem(14) }} />
          }
        >
            Monthly Budget
        </Menu.Item>
      </Menu.Dropdown>
      <Modal opened={opened} onClose={close} title="Create Budget">
        <AddBudget close={close} />
      </Modal>
    </Menu>
  );
};

export default BudgetDropdown;
