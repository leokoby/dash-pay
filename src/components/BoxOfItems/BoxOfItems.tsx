import React from 'react'
import styled from "styled-components";
import { currencyFormater, formatDate } from "../../utils/utils";
import {BsTrash} from "react-icons/bs"

const BoxofItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 310px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1rem;
  background: #fff;
  position: relative; 

  h3{
    padding: 10px 0 0 10px;
    font-weight: 500;
  }
  `;
const BoxofItemsContent = styled.div`
  width: 100%;
  height: 100%;
  max-height: 230px;
  overflow: auto;
  padding: 20px;
`;

const ItemList = styled.span`
  width: 100%;
  height: 90%;
  padding: 10px;
  background: var(--color-gray-4);
  border: 1px solid var(--color-gray-3);
  color: var(--color-gray-2);

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background: var(--color-gray-2);
    color: var(--color-gray-4);
    transform: translateX(4px);
    box-shadow: 2px 2px 10px rgba(165, 165, 165, 0.69);
  }

  .btn-remove{
    background: transparent;
    border: none;
    cursor: pointer;
  }

  p{
   width:100%;
   max-width: 200px;
  }

`;

const TotalContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 1rem;
  font-size: 1rem;
  font-weight: 500;
`

type TypeBox = {
  titleOfBox: string;
  arrayOfItems?: Items[];
  setState?: any;
};

type Items = {
  title: string;
  date?: string;
  valueOfItem?: number ;
};

export default function BoxOfItems({
  titleOfBox,
  arrayOfItems,
  setState,
}: TypeBox) {

  const deleteItem = (id: any, arr: any) => {
    const filteredArray = arr?.filter(
      (filterItem: any) => filterItem.title !== id
    );
    setState(filteredArray);
    localStorage.setItem(titleOfBox, JSON.stringify(filteredArray));
  };

  const TotalValueOfBox = arrayOfItems?.reduce((a, b) => {
    return a + Number(b.valueOfItem)
},0)


  return (
    <BoxofItemsContainer>
      <h3>{titleOfBox}:</h3>
      <BoxofItemsContent>
        {arrayOfItems?.length !== 0
          ? arrayOfItems?.map((item) => {
              return (
                <React.Fragment key={item.title}>
                  <ItemList  id={item.title}>
                    <p>{item.title}</p>
                    <p>{item.date ? formatDate(item?.date, 'en-US') : null}</p>
                    <p>{currencyFormater(Number(item.valueOfItem))}</p>
                  <button className="btn-remove" onClick={() => deleteItem(item.title, arrayOfItems)}>
                    <BsTrash size={24}/>
                  </button>
                  </ItemList>
                </React.Fragment>
              );
            })
          : "Don`t have any item on list"}
          <TotalContainer>
            Total: {currencyFormater(TotalValueOfBox ? TotalValueOfBox : 0)}
          </TotalContainer>
      </BoxofItemsContent>
    </BoxofItemsContainer>
  );
}
