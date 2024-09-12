import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { IoMdClose } from 'react-icons/io'
import { useShopiContext } from '../../context'
import OrderCard from '../OrderCard'
import { totalPrice, formatMx } from '../../utils'

const CheckoutSideMenu = () => {
  const {
    isCheckoutOpen,
    checkoutSideMenu,
    cartItems,
    setCartItems,
    decrement,
    addOrder,
    setCounter
  } = useShopiContext()

  const handleDelete = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id)
    setCartItems(filteredItems)
    decrement()
  }

  const handleCheckout = () => {
    const orderToAdd = {
      id: uuidv4(),
      date: new Date(),
      items: cartItems,
      quantity: cartItems.length,
      total: totalPrice(cartItems)
    }

    addOrder(orderToAdd)
    setCartItems([])
    setCounter(0)
    checkoutSideMenu()
  }
  return (
    <aside
      className={`${
        isCheckoutOpen ? 'opacity-100 right-2' : 'opacity-0 right-[-380px]'
      } flex flex-col fixed  top-[80px] p-2 border bg-white/60 backdrop-blur-3xl border-gray-400 rounded-lg w-[360px] h-[calc(100vh-90px)] transition-all duration-[3000]`}
    >
      <div className='flex justify-between items-center p-6 h-auto'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <IoMdClose className='cursor-pointer' onClick={checkoutSideMenu} />
        </div>
      </div>
      <div className='px-2 flex flex-col gap-3 overflow-y-auto h-5/6 '>
        {cartItems.map((item) => (
          <OrderCard key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
      <div className='h-1/6'>
        <div className='px-6 pt-5 mt-2'>
          <p className='w-full flex justify-between'>
            <span className='font-light'>Total:</span>
            <span className='font-medium'>
              {formatMx(totalPrice(cartItems))}
            </span>
          </p>
        </div>
        <div className='fixed bottom-0 left-0 right-0 w-full h-10 flex items-center justify-center mb-5'>
          <Link
            to='my-orders/last'
            className='w-full h-full flex items-center justify-center'
          >
            <button
              className='h-full w-5/6 bg-black rounded-lg'
              onClick={() => handleCheckout()}
            >
              <span className='text-slate-200'>Checkout</span>
            </button>
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
