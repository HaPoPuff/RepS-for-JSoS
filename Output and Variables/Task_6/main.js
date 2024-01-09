// Добавьте автоматическую нумерацию списка, используя дополнительную переменную index и следующий синтаксис. Переменная index должна увеличиваться на единицу перед каждым выводом нового товара. 

// Добавьте html - элементам соответсвующее классы для стилизации, которые уже подготовлены в файле style.css
let index = 0

document.write('<h1 class = "main-title">Список покупок</h1>')
document.write('<ul class = "product-list">')

// Товар 1
index = index + 1
let product1 = "Книги" // Название товара
let productCount1 = 3  // Кол-во товаров в крозине
let productPrice1 = 200 // Стоимость товара за 1 шт.

document.write(`<li class = "product-item">
                  ${index}) <strong>${product1}</strong>,
                  кол-во: <strong>${productCount1}</strong>,
                  стоимоть: <strong>${productPrice1}</strong>
                </li>`)

// Товар 2
index = index + 1
let product2 = "Молоко" // Название товара
let productCount2 = 1  // Кол-во товаров в крозине
let productPrice2 = 90 // Стоимость товара за 1 шт.

document.write(`<li class = "product-item">
                  ${index}) <strong>${product2}</strong>,
                  кол-во: <strong>${productCount2}</strong>,
                  стоимоть: <strong>${productPrice2}</strong>
                </li>`)

// Товар 3
index = index + 1
let product3 = "Мыло" // Название товара
let productCount3 = 2  // Кол-во товаров в крозине
let productPrice3 = 30 // Стоимость товара за 1 шт.

document.write(`<li class = "product-item">
                  ${index}) <strong>${product3}</strong>,
                  кол-во: <strong>${productCount3}</strong>,
                  стоимоть: <strong>${productPrice3}</strong>
                </li>`)

document.write("</ul>")
