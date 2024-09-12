import { useEffect, useState } from 'react'

function useLocalStorage (orderName, initialValue) {
  const [order, setOrder] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageorder = window.localStorage.getItem(orderName)
        let parsedorder
        if (!localStorageorder) {
          window.localStorage.setItem(orderName, JSON.stringify(initialValue))
          parsedorder = initialValue
        } else {
          parsedorder = JSON.parse(localStorageorder)
          setOrder(parsedorder)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 2000)
  }, [])

  const saveOrder = (newOrder) => {
    window.localStorage.setItem(orderName, JSON.stringify(newOrder))
    setOrder(newOrder)
  }

  return {
    order,
    saveOrder,
    loading,
    error
  }
}

export { useLocalStorage }
