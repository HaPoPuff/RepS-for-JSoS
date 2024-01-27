// Это приложение для создания списка покупок. Сейчас в список можно добавить только название товара. Добавьте в программу возможность ввода количества продукта в prompt() после ввода названия. 

// Для хранения количества продукта придется создать еще один массив. Количество товара должно отображаться в списке с каждым продуктом.

// Список товаров в котором уже есть три продукта
let productArray = []
let countArray = []

function getProductItem(index, product, count) {
  let productItem = document.createElement("li")
  productItem.textContent = `${index + 1}) ${product}, кол-во: ${count}`

  // Кнопка удаления товара
  let deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Удалить"

  deleteBtn.onclick = function () {
    productArray.splice(index, 1) // Удаляем элемент из массива
    countArray.splice(index, 1) // Удаляем элемент из массива
    render(productArray) // Перерисовываем список
  }

  productItem.append(deleteBtn)

  return productItem
}

// Заголовок
let title = document.createElement("h1")
title.textContent = "Список покупок"

// Кнопка добавления
let addProductBtn = document.createElement("button")
addProductBtn.textContent = "Добавить продукт"

addProductBtn.onclick = function () {
  let newProduct = prompt("Введите название товара")
  let newCountProduct = Number(prompt("Введите кол-во товара"))

  productArray.push(newProduct) // Добавляем продукт в массив
  countArray.push(newCountProduct) // Добавляем продукт в массив
  render(productArray) // Перерисовываем список
}


let list = document.createElement("ul") // Список

// Функция отрисовки списка
function render(arr) {
  list.innerHTML = "" // Очищаем список перед отрисовкой

  // Начинаем отрисовку, используя массив и цикл
  for (let i = 0; i < arr.length; i++) {
    let productItem = getProductItem(i, arr[i], countArray[i]) // Создаем элемент списка
    list.append(productItem)
  }
}

// Запускаем отрисовку списка при загрузке страницы
render(productArray)

document.body.append(title, addProductBtn, list)