// import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { ProductDetail } from '../../components/ProductDetail'
import { useShopiContext } from '../../context'

function Home () {
  const { setSearch, filteredItems } = useShopiContext()

  return (
    <Layout>
      <h1 className='text-2xl mb-1'>Our Products...</h1>
      <input
        className='border-b-2 border-slate-500 w-80 p-2 mb-10 outline-none'
        type='text'
        placeholder='Search...'
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className='grid gap-4 grid-cols-auto w-full max-w-screen-lg justify-items-center mb-5'>
        {/* eslint-disable multiline-ternary */filteredItems.length > 0 ? (
          filteredItems.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <h1>Sin resultados...</h1>
        )}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
