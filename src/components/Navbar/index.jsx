import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { useShopiContext } from '../../context'

const NavBar = () => {
  const {
    counter,
    checkoutSideMenu,
    isOpen,
    openProductDetail
  } = useShopiContext()
  const activeStyle = 'underline underline-offset-8'

  const handleOpenCartMenu = (event) => {
    if (isOpen) openProductDetail()
    checkoutSideMenu()
  }
  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Musixo</NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          <p>eduardo.mbks@gmail.com</p>
        </li>
        <li>
          <NavLink to='/my-orders'>My Orders</NavLink>
        </li>
        <li>
          <NavLink to='/my-account'>My Account</NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'>Sign In</NavLink>
        </li>
        <li
          className='flex justify-center items-center text-lg cursor-pointer'
          onClick={() => handleOpenCartMenu()}
        >
          <BsCart3 />
          {counter > 0 && (
            <span className='bg-red-300 text-xs flex justify-center items-center w-4 h-4 rounded-full'>
              {counter}
            </span>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
