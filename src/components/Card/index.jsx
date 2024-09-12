import { FiPlus } from 'react-icons/fi'
import { FaCheck } from 'react-icons/fa6'

import { useShopiContext } from '../../context'
import { formatMx } from '../../utils'

const Card = (item) => {
  const {
    increment,
    isOpen,
    openProductDetail,
    itemToShow,
    setItemToShow,
    cartItems,
    setCartItems,
    checkoutSideMenu,
    isCheckoutOpen
  } = useShopiContext()

  const showProduct = (event, item) => {
    event.stopPropagation()

    if (item.id === itemToShow.id && isOpen) {
      openProductDetail()
    } else {
      setItemToShow(item)
      if (!isOpen) openProductDetail()
    }

    if (isCheckoutOpen) checkoutSideMenu()
  }

  const addItemsToCart = (event, itemData) => {
    event.stopPropagation()
    increment()
    setCartItems([...cartItems, itemData])
    if (isOpen) openProductDetail()
    if (!isCheckoutOpen) checkoutSideMenu()
  }

  const renderIcon = (id) => {
    const isInCart = cartItems.filter((item) => item.id === id).length > 0

    if (isInCart) {
      return (
        <button className='absolute top-0 right-0 flex justify-center items-center bg-slate-400 w-6 h-6 rounded-full m-2 p-1'>
          <FaCheck />
        </button>
      )
    } else {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-white hover:bg-slate-400 w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => {
            addItemsToCart(event, item.item)
          }}
        >
          <FiPlus />
        </button>
      )
    }
  }
  return (
    <div
      className='bh-withe cursor-pointer w-56 h-60 rounded-lg'
      onClick={(event) => showProduct(event, item.item)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {item.item.category}
        </span>
        <img
          className='w-full h-full object-contain rounded-lg'
          src={item.item.image}
          alt={item.item.title}
        />
        {renderIcon(item.item.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>
          {item.item.title.length > 20
            ? item.item.title.slice(0, 20) + '...'
            : item.item.title}
        </span>
        <span className='text-lg font-medium'>{formatMx(item.item.price)}</span>
      </p>
    </div>
  )
}

export default Card
