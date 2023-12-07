import React, { useState } from 'react'
import { Container } from './styles'
import { NavLink } from 'react-router-dom'

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
        <img src={menuImg} alt='Menu sidebar' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>
              <BurgerIcon />
              <span>Hamburgueres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'pizzas'}>
              <PizzaIcon />
              <span>Pizza</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'drinks'}>
              <SodaIcon />
              <span>Soda</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'ice-creams'}>
              <IceCreamIcon />
              <span>IceCream</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
