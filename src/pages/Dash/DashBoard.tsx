import {useContext} from 'react'
import { styled } from 'styled-components'
import MenuDashBoard from './MenuDashBoard'
import BoxOfItems from '../../components/BoxOfItems/BoxOfItems'
import { contextComponent } from '../../context/AppContext'


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
  const {
    bills, 
    objectives, 
    setBills, 
    setObjectives
  } = useContext(contextComponent);

  return (
    <DashPageContainer>
      <div className='dash-content'>	
        <section>
          <h2>Welcome, user</h2>
          <MenuDashBoard />
        </section>
        <section>
            <BoxOfItems titleOfBox='Bills' arrayOfItems={bills} setState={setBills}/>
            <BoxOfItems titleOfBox='Objectives' arrayOfItems={objectives} setState={setObjectives}/>
        </section>
      </div>
    </DashPageContainer>
  )
}
