// Данная программа выводит товарный чек покупки на веб-страницу. Сейчас, при добавлении нового товара в список, приходится вручную прописывать номер каждого товара. Добавьте автоматическую нумерацию списка с помощью дополнительной переменной index, значение которой можно увеличивать на единицу перед выводом в список нового товара

// Добавьте автоматический расчет стоимости товара с учетом количества в колонку “Общая стоимость товара” для каждой позиции товара

// Сумма всей покупки в чеке должна рассчитываться автоматически и отображаться в соответствующей ячейке таблицы

let index = 0

document.write("<h1>Товарный чек</h1>")

// Создание таблицы
document.write("<table>")

// Шапка таблицы
document.write(`<thead>
                  <tr>
                    <th>№</th>
                    <th>Товар</th>
                    <th>Кол-во</th>
                    <th>Стоимость за единицу</th>
                    <th>Общая стоимость товара</th>
                  </tr>
                </thead>`)

// Тело таблицы
document.write("<tbody>")

// Товар 1
index = index + 1
let product1 = "Вареники" // Название товара
let productCount1 = 2  // Кол-во товаров в крозине
let productPrice1 = 130 // Стоимость товара за единицу
let totalPrice1 = productCount1 * productPrice1

document.write(`<tr>
                  <td>${index}</td>
                  <td>${product1}</td>
                  <td>${productCount1}</td>
                  <td>${productPrice1}</td>
                  <td>${totalPrice1}</td>
                </tr>`)

// Товар 2
index = index + 1
let product2 = "Яблоки" // Название товара
let productCount2 = 3  // Кол-во товаров в крозине
let productPrice2 = 60 // Стоимость товара за единицу
let totalPrice2 = productCount2 * productPrice2

document.write(`<tr>
                  <td>${index}</td>
                  <td>${product2}</td>
                  <td>${productCount2}</td>
                  <td>${productPrice2}</td>
                  <td>${totalPrice2}</td>
                </tr>`)

// Товар 3
index = index + 1
let product3 = "Молоко" // Название товара
let productCount3 = 1  // Кол-во товаров в крозине
let productPrice3 = 90 // Стоимость товара за единицу
let totalPrice3 = productCount3 * productPrice3

document.write(`<tr>
                  <td>${index}</td>
                  <td>${product3}</td>
                  <td>${productCount3}</td>
                  <td>${productPrice3}</td>
                  <td>${totalPrice3}</td>
                </tr>`)

// Футер таблицы
document.write(`<tfoot>
                  <tr>
                    <th colspan="4">Сумма всей покупки</th>
                    <th>${totalPrice1 + totalPrice2 + totalPrice3}</th>
                  </tr>
                </tfoot>`)

document.write("</tbody>")
document.write("</table>")
