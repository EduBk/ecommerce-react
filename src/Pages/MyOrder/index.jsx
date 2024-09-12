import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import Layout from '../../components/Layout'
import { useShopiContext } from '../../context'
import OrderCard from '../../components/OrderCard'
import { formatMx } from '../../utils'

function MyOrder () {
  const { order } = useShopiContext()
  if (order.length < 1) {
    return (
      <Layout>
        <h1>My Order</h1>
      </Layout>
    )
  }

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = order?.length - 1

  return (
    <Layout>
      <div className='w-3/6 flex flex-col items-center p-2 mb-5'>
        <div className='flex items-center justify-center relative w-full'>
          <Link className='absolute left-8' to='/my-orders'>
            <IoIosArrowBack className='h-6 w-6 text-black cursor-pointer' />
          </Link>
          <h1 className='text-2xl'>My Order</h1>
        </div>
        <p className='font-light mt-3'>
          ( <span className='font-bold'>{order?.slice(-1)[0].quantity}</span> )
          Products.
        </p>
        <div className='flex flex-col gap-6 w-full'>
          {order?.[index].items.map((item) => (
            <OrderCard key={item.id} item={item} />
          ))}
        </div>
        <div className='flex w-full justify-start text-lg font-bold gap-4 mt-3'>
          <p>Total: </p>
          <span className='text-lime-600'>
            {formatMx(order?.slice(-1)[0].total)}
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default MyOrder
