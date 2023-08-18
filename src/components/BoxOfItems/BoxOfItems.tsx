import React from 'react'
import styled from 'styled-components'

const BoxofItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1rem;

`
const BoxofItemsContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  background: #fff;
  padding: 20px;
`

const ItemList = styled.span`
  width: 100%;
  height: 100%;
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
  &:hover{
    background: var(--color-gray-2);
    color: var(--color-gray-4);
    transform: translateX(4px);
    box-shadow: 2px 2px 10px rgba(165, 165, 165, 0.69);
  }
`

type TypeBox = {
  titleOfBox: string;
  arrayOfItems?: Items[];
}

type Items = {
  title: string;
  date?: string;
  value?: number;
}

export default function BoxOfItems({titleOfBox, arrayOfItems}: TypeBox) {
  return (
    <BoxofItemsContainer>
      <h3>{titleOfBox}</h3>
      <BoxofItemsContent>
        {arrayOfItems ? arrayOfItems?.map((item) => {
          return (
            <ItemList>
              <p>{item.title}</p>
              <p>{item.date}</p>
              <p>{item.value}</p>
            </ItemList>
          )
        }): 'Don`t have any item on list'}
      </BoxofItemsContent>
    </BoxofItemsContainer>
  )
}
