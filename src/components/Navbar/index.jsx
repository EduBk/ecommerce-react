import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { useShopiContext } from '../../context'

const NavBar = () => {
  const { counter, checkoutSideMenu, isOpen, openProductDetail, setCategory } =
    useShopiContext()
  const activeStyle = 'underline underline-offset-8'

  const handleOpenCartMenu = (event) => {
    if (isOpen) openProductDetail()
    checkoutSideMenu()
  }
  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/' onClick={() => setCategory('')}>Musixo</NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setCategory('')}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/mens-clothing'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setCategory("men's clothing")}
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/jewelery'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setCategory('jewelery')}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/electronics'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setCategory('electronics')}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/womens-clothing'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setCategory("women's clothing")}
          >
            Women's Clothing
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
