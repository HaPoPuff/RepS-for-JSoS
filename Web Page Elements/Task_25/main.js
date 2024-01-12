// В этой программе реализовано создание списка пользователей со следующей механикой: при клике на кнопку "Добавить пользователя", появляются окна ввода prompt для ввода имени и потом возраста. После ввода данных в списке ul создается новый элемент пользователя li.

// Заказчик этого приложения выразил желание изменить способ ввода имени и возраста. Вместо окон prompt для ввода данных он хочет видеть два текстовых поля input. После нажатия на кнопку "Добавить пользователя" имя и возраст берутся именно из этих текстовых полей. Далее создается элемент списка li и добавляется в ul. Текстовые полня input очищаются после добавления кода.

// Функция, возвращающая элемент списка с именем и возрастом пользователя 
function getUserItem(name, age) {
  let userItem = document.createElement("li")
  userItem.textContent = `${name}, возраст: ${age}`
  return userItem
}

// Создание заголовка
let title = document.createElement("h1")
title.textContent = "Список пользователей"

// Создание списка
let list = document.createElement("ul")

let addInfoName = document.createElement("input")
addInfoName.type = "text"
addInfoName.placeholder = "Name"

let addInfoAge = document.createElement("input")
addInfoAge.type = "number"
addInfoAge.placeholder = "Age"

// Создание кнопки добавления
let addNewBtn = document.createElement("button")
addNewBtn.textContent = "Добавить пользователя"

// Создание обработчика события для кнопки добавления
addNewBtn.onclick = function () {
  let name = addInfoName.value
  let age = addInfoAge.value

  let newItem = getUserItem(name, age)
  list.append(newItem)

  addInfoName.value = ""
  addInfoAge.value = ""

}

// Добавление элементов в body
document.body.append(title, addInfoName, addInfoAge, addNewBtn, list)