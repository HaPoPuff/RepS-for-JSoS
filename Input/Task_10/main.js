// Исправьте код, так что бы в итоговой сумме покупки выводился правильный результат. 

// Используйте инкремент для расчета порядкового номера.

document.write('<h1 class="main-title">Список покупок</h1>')
document.write('<ul class="product-list">')

let index = 0 // Счетчик порядкового номера
let totalPrice = 0 // Суммарная стоимость

// Товар 1
index++
let product1 = prompt(`Введите название товара ${index}`) // Название товара
let productPrice1 = Number(prompt(`Введите стоимость товара: "${product1}"`)) // Стоимость товара.
totalPrice = totalPrice + productPrice1

document.write(`<li class="product-item">
                  ${index}) <strong>${product1}</strong>,
                  стоимоть: <strong>${productPrice1}</strong>
                </li>`)

// Товар 2
index++
let product2 = prompt(`Введите название товара ${index}`) // Название товара
let productPrice2 = Number(prompt(`Введите стоимость товара: "${product2}"`)) // Стоимость товара.
totalPrice = totalPrice + productPrice2

document.write(`<li class="product-item">
                  ${index}) <strong>${product2}</strong>,
                  стоимоть: <strong>${productPrice2}</strong>
                </li>`)

// Товар 3
index++
let product3 = prompt(`Введите название товара ${index}`) // Название товара
let productPrice3 = Number(prompt(`Введите стоимость товара: "${product3}"`)) // Стоимость товара.
totalPrice = totalPrice + productPrice3

document.write(`<li class="product-item">
                  ${index}) <strong>${product3}</strong>,
                  стоимоть: <strong>${productPrice3}</strong>
                </li>`)

document.write("</ul>")

// Суммарная стоимость
document.write(`<p class="total-price">Суммарная стоимость: <strong>${totalPrice}</strong></p>`)
