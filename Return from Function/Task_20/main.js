// Сделайте код программы компактнее, используя известные вам приемы.

document.write("<h1>Ваш заказ</h1>")

// Функция расчета стоимости со скидкой в процентах. Возвращает стоимость товара с примененной скидкой.
// price - цена
// percent - скидка в процентах
function getPercentDiscount(price, percent = 0) {
  let result = price - (price / 100 * percent)
  return result
}

// Функция, возвращающая <strong> с текстом
function getStrong(text) {
  let result = `<strong>${text}</strong>`
  return result
}

// Функция, создающая <p> с текстом
function printParagraph(text) {
  let result = `<p>${text}</p>`
  return result
}


function createProduct(product, price, discount = '0') {
  let finalPrice = getPercentDiscount(price, discount) // Стоимость со скидкой
  let finalProduct = printParagraph(`${product}, стоимость: ${price} руб - ${discount}% = ${getStrong(finalPrice)} руб`)
  return finalProduct
}

// Товар 1
document.write(createProduct("Футболка", 800, 15))

// Товар 2
document.write(createProduct("Носки", 200, 10))

// Товар 3
document.write(createProduct("Штаны", 1000, 5))


