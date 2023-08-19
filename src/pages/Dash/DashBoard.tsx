import React, { useEffect, useState } from 'react'
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
  return (
    <DashPageContainer>
      <div className='dash-content'>	
        <section>
          <h2>Welcome, user</h2>
          <MenuDashBoard />
        </section>
        <section>
            <BoxOfItems titleOfBox='Bills:' />
            <BoxOfItems titleOfBox='Objectives:' />
        </section>
      </div>
    </DashPageContainer>
  )
}
