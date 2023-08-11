import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  
  div{
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0 auto;

    span{
      display: flex;
      align-items: center;

      a{
        font-size: 1.4rem;
      }

      ul{
        display: flex;
        gap: 10px;

        li a{
          font-size: 1rem;
        }
      }
    }
  }
`
export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <span>
          <a href="/">DashPay</a>
        </span>
        <span>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </span>
      </div>      
    </HeaderContainer>
  )
}
