import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/LocalStorage'

const Context = createContext()

export const CartContext = ({ children }) => {
  const {
    order,
    saveOrder
    // error,
    // loading
  } = useLocalStorage('TODOS_V1', [])
  const [counter, setCounter] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isCheckoutOpen, setCheckoutIsOpen] = useState(false)
  const [itemToShow, setItemToShow] = useState({})
  const [cartItems, setCartItems] = useState([])
  const openProductDetail = () => setIsOpen(!isOpen)
  const checkoutSideMenu = () => setCheckoutIsOpen(!isCheckoutOpen)

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }

  const addOrder = (newOrder) => {
    const newOrders = [...order]
    newOrders.push(newOrder)
    console.log(order, newOrders)
    saveOrder(newOrders)
  }

  return (
    <Context.Provider
      value={{
        counter,
        setCounter,
        increment,
        decrement,
        openProductDetail,
        isOpen,
        itemToShow,
        setItemToShow,
        cartItems,
        setCartItems,
        checkoutSideMenu,
        isCheckoutOpen,
        setCheckoutIsOpen,
        order,
        addOrder
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useShopiContext = () => useContext(Context)
