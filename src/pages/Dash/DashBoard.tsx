import React from 'react'
import { styled } from 'styled-components'
import MenuDashBoard from './MenuDashBoard'
import BoxOfItems from '../../components/BoxOfItems/BoxOfItems'

const DashPageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px);
  max-width: 1200px;
  margin: 0 auto;

  .dash-content{
    margin-top: 5rem;

    section{
      &:nth-of-type(2){
        margin-top: 3rem;
      }
    }
  }
`

export default function DashBoard() {
  const testeArray = [
    {
      title: "ITEM",
      date: "12 JAN 2023",
      value: 20
    },
    {
      title: "ITEM",
      date: "12 JAN 2023",
      value: 20
    },
]
  const test2 = [{
    title: "Buy a car",
    value: 200.00
  }]
  
  return (
    <DashPageContainer>
      <div className='dash-content'>	
        <section>
          <h2>Welcome, user</h2>
          <MenuDashBoard />
        </section>
        <section>
            <BoxOfItems titleOfBox='Bills:' arrayOfItems={testeArray}/>
            <BoxOfItems titleOfBox='Objectives:' arrayOfItems={test2}/>
        </section>
      </div>
    </DashPageContainer>
  )
}
