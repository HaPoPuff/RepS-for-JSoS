// Это простое приложение списка пользователей с проверкой ввода имени. Если вы запустите приложение в браузере, и попытайтесь добавить пользователя без ввода имени в текстовое поле, то на экране появится сообщение "Имя не введено". Это простая валидация текстового поля и она работает отлично. 

// Проблема в том, что валидация (проверка) работает только при добавлении нового пользователя, но при изменении имени, после ввода в окне prompt(), такой проверки нет.

// Добавьте проверку введенной строки в prompt() при изменении имени пользователя. Если имя не введено, на экране должен появится alert с сообщением: "Имя не введено".

// Функция, возвращающая новую кнопку
function getButton(text) {
  let button = document.createElement("button")
  button.textContent = text
  return button
}

// Функция, возвращающая новый input
function getInput(type, placeholder) {
  let input = document.createElement("input")
  input.type = type
  input.placeholder = placeholder
  return input
}

// Функция, возвращающая нового пользователя
function getUserItem(userName) {
  let item = document.createElement("li")
  let nameSpan = document.createElement("span")
  nameSpan.textContent = userName

  let changeBtn = getButton("Изменить")

  changeBtn.onclick = function () {
    let newName = prompt("Введите новое имя")
    nameSpan.textContent = newName

    if (newName === "") {
      alert("Имя не введено")
      item.remove()
    } else {
      let newItem = getUserItem(newName)
      list.append(newItem)
    }
  }

  item.append(nameSpan, changeBtn)
  return item
}

// Заголовок
let title = document.createElement("h1")
title.textContent = "Список пользователей"

// Создание списка
let list = document.createElement("ul")

// Создание текстового поля и кнопки
let nameInp = getInput("text", "Имя")
let addBtn = getButton("Добавить пользователя")

// Добавление пользователя в список
addBtn.onclick = function () {
  let newName = nameInp.value

  // Проверка введенного имени на пустую строку
  if (newName === "") {
    alert("Имя не введено")
  } else {
    let newItem = getUserItem(newName)
    list.append(newItem)
  }

  nameInp.value = ""
}

document.body.append(title, nameInp, addBtn, list)

