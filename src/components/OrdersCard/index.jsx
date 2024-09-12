// import { GoTrash } from 'react-icons/go'

// import { formatMx } from '../../utils'

const OrdersCard = (props) => {
  const { totalPrice, totalItems } = props

  return (
    <div className='flex justify-between items-center mb-3 border border-black'>
      <p>
        <span>01-02-2024</span>
        <span>{totalItems}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}

export { OrdersCard }
