import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsBagCheckFill } from 'react-icons/bs'
import { formatDate, formatMx } from '../../utils'
import OrderCard from '../OrderCard'

const Accordion = ({ items, isOpen, onToggle }) => {
  const { total, quantity, date, id } = items
  return (
    <div
      className={`w-3/6 border border-gray-300 rounded-lg mb-4 shadow-sm transition-all ${
        isOpen ? 'bg-gray-100' : 'bg-white'
      }`}
    >
      <div
        className='flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200'
        onClick={onToggle}
      >
        <div className='flex flex-col gap-2'>
          <span className='font-medium text-sm'>Order ID: {id}</span>
          <span className='flex items-center gap-2'>
            <FaRegCalendarAlt /> {formatDate(date, 'date')}
          </span>
          <span className='flex items-center gap-2'>
            <BsBagCheckFill /> {quantity} articles
          </span>
        </div>
        <div className='flex items-center gap-6'>
          <span className='font-bold text-lg text-lime-600'>
            {formatMx(total)}
          </span>
          <span className='text-gray-500'>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
      </div>
      {isOpen && (
        <div className='p-4 flex flex-col gap-6 border-t border-gray-300 text-gray-700 animate-fadeIn'>
          {items?.items.map((item) => (
            <OrderCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export { Accordion }
