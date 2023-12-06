import React, { useState } from 'react';
import { Container } from './styles';

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'

import menuImg from '../../assets/menu.svg'

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => setMenuOpen(!menuOpen)
  console.log(menuOpen)
  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        <img src={menuImg} alt="Menu sidebar" />
      </button>
      <nav>
        <ul>
          <li>
            <a href="#" className='active'>
              <BurgerIcon />
              <span>Hamburgueres</span>
            </a>
          </li>
          <li>
            <a href="#" >
              <PizzaIcon />
              <span>Pizza</span>
            </a>
          </li>
          <li>
            <a href="#">
              <SodaIcon />
              <span>Soda</span>
            </a>
          </li>
          <li>
            <a href="#" >
              <IceCreamIcon />
              <span>IceCream</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>)
}
