import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useShopiContext } from '../../context'

const ProductDetail = () => {
  const { isOpen, openProductDetail, itemToShow } = useShopiContext()
  const { title, price, image, description, category } = itemToShow
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(price)

  return (
    <aside
      className={`${
        isOpen ? 'opacity-100 right-2' : 'opacity-0 right-[-380px]'
      } flex flex-col fixed  top-[80px] p-6 border bg-white/60 backdrop-blur-3xl border-gray-400 rounded-lg w-[360px] h-[calc(100vh-90px)] transition-all duration-[3000]`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <IoMdClose className='cursor-pointer' onClick={openProductDetail} />
        </div>
      </div>
      <div className='px-6 overflow-y-scroll'>
        <img
          className='w-full rounded-lg object-contain'
          src={image}
          alt={title}
        />
        <div className='flex flex-col p-1'>
          <span className='font-medium text-xl'>{formattedPrice}</span>
          <span className='text-sm font-bold'>{title}</span>
          <p className='flex flex-col mt-2'>
            <span className='text-sm text-slate-500'>Description:</span>
            <span className='font-medium text-xs'>{description}</span>
          </p>
          <p className='flex justify-between text-sm mt-3'>
            <span className='text-slate-500'>Category:</span>
            <span className='bg-slate-300 rounded-full p-1 px-2 text-xs'>
              {category}
            </span>
          </p>
        </div>
      </div>
    </aside>
  )
}

export { ProductDetail }
