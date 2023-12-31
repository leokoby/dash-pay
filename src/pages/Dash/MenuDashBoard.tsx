import React, { useContext } from "react";
import { styled } from "styled-components";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import { contextComponent } from "../../context/AppContext";

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
    &:disabled {
      opacity: 0.2;
      cursor: default;
      &:hover {
        background: transparent;
        color: var(--color-gray-2);
        box-shadow: none;
      }
    }
  }
`;

const SelectWrapperComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  label {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    select {
      margin-top: 10px;
      padding: 10px;
      border: 1px solid var(--color-gray-3);
    }
  }
`;

export default function MenuDashBoard() {
  const { bills, setBills, objectives, setObjectives } = useContext(contextComponent);
  const [addItem, setAddItem] = React.useState(false);
  const [itemInfos, setItemInfos] = React.useState({
    title: "",
    date: "",
    valueOfItem: "",
    selectOption: "",
  });


  const handleAddToDash = () => {
    const arrayTemp = [];
    const getLocal = localStorage?.getItem(`${itemInfos.selectOption}`);

    if (getLocal) {
      const parseLocal = JSON.parse(getLocal);
      arrayTemp.push(...parseLocal, itemInfos);
      itemInfos.selectOption === "Bills"
        ? setBills([...bills, itemInfos])
        : setObjectives([...objectives, itemInfos]);
    } else {
      arrayTemp.push(itemInfos);
      itemInfos.selectOption === "Bills"
        ? setBills([itemInfos])
        : setObjectives([itemInfos]);
    }
    window.localStorage.setItem(
      `${itemInfos.selectOption}`,
      JSON.stringify(arrayTemp)
    );
  };

  return (
    <MenuWrapper>
      <button onClick={() => setAddItem(!addItem)}>Add item</button>
      <button disabled>Add Cash</button>
      {addItem ? (
        <Modal
          title="Add your item"
          smallText="fill the fields below to add a bill in your dashboard"
          setOpenModal={() => {
            setAddItem(false);
            setItemInfos({
              title: "",
              date: "",
              valueOfItem: "",
              selectOption: "",
            });
          }}
        >
          <SelectWrapperComponent>
            <label>
              Select where you want add:
              <select
                onChange={(e) =>
                  setItemInfos({ ...itemInfos, selectOption: e.target.value })
                }
                defaultValue={"Choose a option"}
              >
                <option disabled>
                  Choose a option
                </option>
                <option>Bills</option>
                <option>Objectives</option>
              </select>
            </label>
          </SelectWrapperComponent>
          {itemInfos.selectOption !== "" && (
            <>
              <Input
                labelText={`${itemInfos.selectOption == "Bills" ? 'Bill name' : 'Objective name'}`}
                typeOfInput="text"
                nameOfInput="itemName"
                value={itemInfos.title}
                onchange={(e) =>
                  setItemInfos({ ...itemInfos, title: e.target.value })
                }
                placeholder="New Car"
              />
              <Input
                labelText={`${itemInfos.selectOption == "Bills" ? 'Bill value' : 'Objective value'}`}
                typeOfInput="number"
                nameOfInput="itemValue"
                value={itemInfos.valueOfItem}
                onchange={(e) =>
                  setItemInfos({ ...itemInfos, valueOfItem: e.target.value })
                }
                placeholder="40000,00"
                inputMode="decimal"
              />
              <Input
                labelText={`${itemInfos.selectOption == "Bills" ? 'Date of purcharse' : 'Expected date'}`}
                typeOfInput="date"
                nameOfInput="itemDate"
                value={itemInfos.date}
                onchange={(e) =>
                  setItemInfos({ ...itemInfos, date: e.target.value })
                }
                placeholder="12 jan 2023"
              />
              <button onClick={handleAddToDash}>Send</button>
            </>
          )}
        </Modal>
      ) : null}
    </MenuWrapper>
  );
}
