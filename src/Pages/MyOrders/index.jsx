import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Accordion } from '../../components/Acordion'
import { useShopiContext } from '../../context'

function MyOrders () {
  const { order } = useShopiContext()
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index) // Solo abre un acordeón a la vez
  }

  return (
    <Layout>
      <h1 className='text-2xl mb-5'>My Orders</h1>
      {order.map((orde, index) => (
        <Accordion
          key={index}
          items={orde}
          isOpen={activeIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </Layout>
  )
}

export default MyOrders
