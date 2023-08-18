import React from "react";
import { styled } from "styled-components";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";

const MenuWrapper = styled.nav`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 2rem;

  button {
    background: transparent;
    border: 1px solid var(--color-gray-3);
    padding: 10px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    color: var(--color-gray-2);
    &:hover {
      background: var(--color-gray-1);
      color: var(--color-gray-4);
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.69);
    }
  }
`;
export default function MenuDashBoard() {
  const [addItem, setAddItem] = React.useState(false);
  const [itemInfos, setItemInfos] = React.useState({
    title: "",
    date: "",
    valueOfItem: "0",
  });

  return (
    <MenuWrapper>
      <button onClick={() => setAddItem(!addItem)}>Add item</button>
      <button>Add Cash</button>
      {addItem ? (
        <Modal
          title="Add your bill"
          smallText="fill the fields below to add a bill in your dashboard"
        >
          <Input
            typeOfInput="text"
            nameOfInput="itemName"
            value={itemInfos.title}
            onchange={(e) =>
              setItemInfos({ ...itemInfos, title: e.target.value })
            }
            placeholder="Item name"
          />
          <Input
            typeOfInput="text"
            nameOfInput="itemValue"
            value={itemInfos.valueOfItem}
            onchange={(e) =>
              setItemInfos({ ...itemInfos, valueOfItem: e.target.value})
            }
            placeholder="Item value"
          />
          <Input
            typeOfInput="text"
            nameOfInput="itemDate"
            value={itemInfos.date}
            onchange={(e) =>
              setItemInfos({ ...itemInfos, date: e.target.value })
            }
            placeholder="Item date"
          />
        </Modal>
      ) : null}
    </MenuWrapper>
  );
}
