// В программе списка планируемых покупок допущена ошибка. Кликнув по кнопке “Удалить”, вы обнаружите появившееся окно подтверждения confirm. Но тут есть проблема, если нажмете кнопку "Нет", запись удаляется из списка, чего быть не должно. Попробуйте исправить эту проблему.

// Функция, возвращающая элемент списка
function getItem(text) {
  let item = document.createElement("li")
  item.textContent = text

  let deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Удалить"

  deleteBtn.onclick = function () {
    if (confirm(`Вы уверены, что хотите удалить ${text}?`)) {
      item.remove()
    }
  }

  item.append(deleteBtn)
  return item
}

// Главный заголовок
let title = document.createElement("h1")
title.textContent = "Планы на покупки"

let list = document.createElement("ul")

list.append(
  getItem("Хлеб"),
  getItem("Макароны"),
  getItem("Сок"),
  getItem("Сыр"),
  getItem("Молоко"),
)

document.body.append(title, list)