import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { ProductDetail } from '../../components/ProductDetail'

function Home () {
  const [items, setItems] = useState([])

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
  return (
    <Layout>
      home
      <div className='grid gap-4 grid-cols-auto w-full max-w-screen-lg justify-items-center'>
        {items?.map((item) => {
          return <Card key={item.id} item={item} />
        })}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
