import React from 'react'
import { styled } from 'styled-components'

const MenuWrapper = styled.nav`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 2rem;

  button{
    background: transparent;
    border: 1px solid var(--color-gray-3);
    padding: 10px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    color: var(--color-gray-2);
    &:hover{
      background: var(--color-gray-1);
      color: var(--color-gray-4);
      box-shadow: 2px 2px 10px rgba(0,0,0,0.69);
    }
  }
`

export default function MenuDashBoard() {
  return (
    <MenuWrapper>
     <button>Add bill</button>
     <button>Add Cash</button>
     <button>Add Objective</button>
    </MenuWrapper>
  )
}
