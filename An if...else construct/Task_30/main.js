// В это программе представлен функционал создания списка пользователей. При клике на кнопку появляются окна prompt() для ввода имени и возраста.

// Новый пользователь добавляется в список с пометкой статуса: "ходит в детский сад" или "ходит в школу". Статус присваивается в зависимости от возраста. 

// Ваша задача добавить новый статус - "студент". Возрастной диапазон студента начинается с 18 лет (не включительно) и заканчивается 22 года.
// То есть с 18 (не включительно) до 22 года - студент. 

// При добавлении нового пользователя с таким возрастом в списке должен отображаться соответствующий статус.

// Функция, возвращающая нового пользователя
function getUserItem(name, age) {
  let userItem = document.createElement("li")

  let status = "не определен"

  if (age <= 6) {
    status = "ходит в детский сад"
  }

  if (age > 6 && age <= 18) {
    status = "ходит в школу"
  }

  if (age > 18 && age <= 22) {
    status = "студент"
  }

  userItem.textContent = `${name}, возраст: ${age}, статус: ${status}`

  return userItem
}

// Заголовок
let title = document.createElement("h1")
title.textContent = "Список пользователей"

// Список
let list = document.createElement("ul")

// Кнопка добавления
let addBtn = document.createElement("button")
addBtn.textContent = "Добавить пользователя"

addBtn.onclick = function () {
  let newUserName = prompt("Введите имя пользователя")
  let newUserAge = Number(prompt("Введите возраст пользователя"))

  let newUserItem = getUserItem(newUserName, newUserAge)

  list.append(newUserItem)
}

// Добавление в body
document.body.append(title, addBtn, list)