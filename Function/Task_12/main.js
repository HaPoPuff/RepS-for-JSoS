// Исправьте код так, что бы в консоле не было ошибок и в документ браузера выводился верный результат. А именно список товаров с нумерацией, весом и общим весом всех товаров.

// document.write("<h1>Список товаров</h1>")

// document.write("<ul>")

// let index = 0
// let totalWeight = 0

// // Товар 1
// {
//   index++
//   let weight = Number(prompt(`Введите вес товара ${index}`))
//   totalWeight = totalWeight + weight

//   document.write(`<li>
//                     Товар ${index}, вес: <strong>${weight}</strong> кг
//                   </li>`)
// }

// // Товар 2
// {
//   index++
//   let weight = Number(prompt(`Введите вес товара ${index}`))
//   totalWeight = totalWeight + weight

//   document.write(`<li>
//                     Товар ${index}, вес: <strong>${weight}</strong> кг
//                   </li>`)
// }

// // Товар 3
// {
//   index++
//   let weight = Number(prompt(`Введите вес товара ${index}`))
//   totalWeight = totalWeight + weight

//   document.write(`<li>
//                     Товар ${index}, вес: <strong>${weight}</strong> кг
//                   </li>`)
// }

// document.write("</ul>")

// document.write('<hr>')
// document.write(`<p>Общий вес товаров: ${totalWeight} кг</p>`)

document.write("<h1>Список товаров</h1>")

document.write("<ul>")

let index = 0
let totalWeight = 0

// Товар 1
function object(weight){
  index++
  totalWeight = totalWeight + weight

  document.write(`<li>
                    Товар ${index}, вес: <strong>${weight}</strong> кг
                  </li>`)
}

object(12)
object(43)
object(24)
object(65)

document.write("</ul>")

document.write('<hr>')
document.write(`<p>Общий вес товаров: ${totalWeight} кг</p>`)