import React from 'react'
import { IoIosArrowBack } from 'react-icons/io' // Icono de retroceso
import Layout from '../../components/Layout'

const NotFound = () => {
  return (
    <Layout>
      <div className='w-full h-96 flex flex-col items-center justify-center mt-10'>
        <h1 className='text-9xl'>404</h1>
        <p className='text-3xl mb-7'>Oops! Page not found's.</p>
        <button
          className='bg-red-400 rounded-full text-white flex items-center cursor-pointer text-base transition-colors w-auto px-4 py-1'
          onClick={() => window.history.back()}
        >
          <IoIosArrowBack className='mr-2' /> Return
        </button>
      </div>
    </Layout>
  )
}

export default NotFound
