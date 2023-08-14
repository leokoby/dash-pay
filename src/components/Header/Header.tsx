import React from 'react'
import styled from 'styled-components'
import MenuMobile from './MenuMobile'

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
          color: var(--color-gray-2);
          transition: all 200ms ease-in-out;
          padding: 0;
          border: 1px dashed transparent;

          &:hover{
            color: var(--color-gray-1);
            border: 1px var(--color-gray-1) dashed;
          }
        }
      }
    }

    @media (max-width: 1000px) {
      justify-content: space-between;
      padding: 0 10px;
    }
  }
`
export default function Header() {
  const [isMobile, setIsMobile] = React.useState(false)
  const windowSize = window.screenX <= 1000

  React.useEffect(() => {
    if(windowSize) setIsMobile(true)
  },[])

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 1000)
  })

  return (
    <HeaderContainer>
      <div>
        <span>
          <a href="/">DashPay</a>
        </span>
        <span>
          {isMobile ? (
            <>
              <MenuMobile />
            </>
          ) : (
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
          )}
        </span>
      </div>      
    </HeaderContainer>
  )
}
