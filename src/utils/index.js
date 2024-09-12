/**
 *  Calculates total price
 * @param {Array} items cartItems: Array of Objects
 * @returns {number} Total Price
 */

export const totalPrice = (items) => {
  let sum = 0
  items.forEach((item) => {
    sum += item.price
  })
  return sum
}

/**
 * Gives the mx currency format to the price value
 * @param {number} price
 * @returns {formattedPrice} Mx format
 */
export const formatMx = (price) => {
  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(price)

  return formattedPrice
}

export const formatDate = (date, format) => {
  let formatedDate
  switch (format) {
    case 'date':
      formatedDate = new Date(date).toLocaleDateString()
      break
    case 'time':
      formatedDate = new Date(date).toLocaleTimeString()
      break
    default:
      formatedDate = new Date(date).toLocaleString()
      break
  }

  return formatedDate
}
