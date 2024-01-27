// Еще один список. В этот рак разбираем содержимое рюкзака и продолжаем учиться обрабатывать массивы. У каждого предмета есть кнопка "Вытащить из рюкзака", кликнув на которую должно произойти удаления элемента из списка. Она работает, но почему-то всегда удаляется только первый элемент списка. Попробуйте исправить эту проблему.

// Массив содержимого в рюкзаке
let itemsArray = ["Зарядка", "Ноутбук", "Кошелек", "Влажные салфетки", "Ручка", "Мелочь"]

// Заголовок
let title = document.createElement("h1")
title.textContent = "У меня в рюкзаке"

let list = document.createElement("ul") // Список

// Функция отрисовки списка
function render(arr) {
  list.innerHTML = "" // Очищаем список перед отрисовкой

  // Если рюкзак пуст, покаываем сообщение
  if (arr.length === 0) {
    let notItems = document.createElement("li")
    notItems.textContent = "Рюкзак пуст"
    list.append(notItems)
    return
  }

  // Начинаем отрисовку, используя массив и цикл
  for (let i = 0; i < arr.length; i++) {
    let item = document.createElement("li")
    item.textContent = `${i + 1}) ${arr[i]}`

    // Кнопка удаления предмета
    let removeBtn = document.createElement("button")
    removeBtn.textContent = "Вытащить из рюкзака"

    removeBtn.onclick = function () {
      arr.splice(i, 1) // Удаляем элемент из массива
      render(arr) // Перерисовываем список
    }

    item.append(removeBtn)

    list.append(item)
  }
}

// Запускаем отрисовку списка при загрузке страницы
render(itemsArray)

document.body.append(title, list)