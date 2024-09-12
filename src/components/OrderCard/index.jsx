import { GoTrash } from 'react-icons/go'

import { formatMx } from '../../utils'

const OrderCard = ({ item, handleDelete }) => {
  const { title, price, image, id } = item
  let renderTrashIcon
  let renderAllTitle

  if (handleDelete) {
    renderTrashIcon = (
      <GoTrash
        className='cursor-pointer hover:bg-slate-300'
        onClick={() => handleDelete(id)}
      />
    )

    renderAllTitle = (
      <p className='text-sm font-light'>
        {title.length > 15 ? title.slice(0, 15) + '...' : title}
      </p>
    )
  } else {
    renderAllTitle = (
      <p className='text-sm font-light'>
        {title}
      </p>
    )
  }

  return (
    <div className='flex justify-between items-center cursor-pointer'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-contain'
            src={image}
            alt={title}
          />
        </figure>
        {renderAllTitle}
      </div>
      <div className='flex items-center gap-1'>
        <p className='text-lg font-medium'>{formatMx(price)}</p>
        {renderTrashIcon}
      </div>
    </div>
  )
}

export default OrderCard
