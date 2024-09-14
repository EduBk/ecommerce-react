import { createContext, useContext, useState, useEffect } from 'react'
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
  const [items, setItems] = useState([])
  const [filteredItems, setFilterredItems] = useState([])
  const [itemToShow, setItemToShow] = useState({})
  const [cartItems, setCartItems] = useState([])
  const [search, setSearch] = useState('')
  const openProductDetail = () => setIsOpen(!isOpen)
  const checkoutSideMenu = () => setCheckoutIsOpen(!isCheckoutOpen)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`)
      }
    }
    fetchData()
  }, [])

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

  const filterItems = (items, search) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  useEffect(() => {
    if (search.length > 0) {
      setFilterredItems(filterItems(items, search))
    } else {
      setFilterredItems(items)
    }
  }, [items, search])

  return (
    <Context.Provider
      value={{
        counter,
        items,
        setItems,
        filteredItems,
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
        addOrder,
        search,
        setSearch
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useShopiContext = () => useContext(Context)
