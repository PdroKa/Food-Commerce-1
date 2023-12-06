import styled, { css } from 'styled-components';

interface ContainerProps {
  isMenuOpen: boolean
}
export const Container = styled.aside<ContainerProps>`
background-color: ${({ theme }) => theme.colors.red};

  ${({ isMenuOpen }) => isMenuOpen ? css`width: 16.3rem;` : css`width: 7.75rem;`}
/* width: 7.75rem; */
/* width: 16.3rem; */
transition:width .5s;
padding: 2rem 0;
overflow: hidden;

display: flex;
flex-direction: column;
align-items: center;



button{
  background: none;
  width: 100%;
  border: none;
}


nav{
    flex: 1;
    width: 100%;
    height: 100%;

    ul{
      list-style: none;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }
    li{
    a{
      width: fit-content;
      position: relative;
      padding:0 1.75rem;

      display: flex;
      align-items: center;
      gap: 2rem;
      &.active{
        svg{
            fill:${({ theme }) => theme.colors.yellow};
          }

          span{
            color:${({ theme }) => theme.colors.yellow};
            }
        &::after{
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          bottom: 0;
          transform: translateY(-50%);

          background-color: ${({ theme }) => theme.colors.yellow};
          width: 3px;
          height: calc(100% + 10px);
          border-radius: 0 5px 5px 0;


        }
      }

      svg{
        fill: ${({ theme }) => theme.colors.white};
        width: 4rem;
        height: 4rem;

        transition: fill .5s;
      }

      span{
        font-size:1rem;
        font-weight: 500;
        color:${({ theme }) => theme.colors.white};
        transition: color .5s;
      }


    }
    }
  }

  @media (max-width: 720px) {
position:fixed;
left:0;
right:0;
bottom:0;
z-index:999;

width:100%;
height:5rem;
padding:0;
overflow-y:auto;

  button{
    display:none;
  }
  nav{
    height:100%;
    ul{
      align-items:center;
      flex-direction:row;
    }
    li{
      a{
        flex-direction:column;
        padding:0;

        svg{
          width:3.25rem;
          height:3.25rem;
        }
        span{
          display:none;
        }

        &.active{
          &::after{
          height:3px;
          width: calc(100%);

          left: 0;
          top: calc(100% + 10px);
          bottom: 0;
          transform: translateY(-50%);
          }
        }
      }
    }
  }
}

`;
