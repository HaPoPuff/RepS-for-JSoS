// Это приложение для создания списка студентов. Сейчас в программе есть возможность добавлять имя и возраст студентов в таблицу. Необходимо добавить возможность вводить дополнительное значение - рост студента. И в результате при клике на кнопку  "Добавить студента" в таблице появится строка студента со следующими колонками: имя, возраст и рост.

// Функция, возвращающая новый input
function getInput(placeholder, type = "text") {
  let input = document.createElement("input")
  input.type = type
  input.placeholder = placeholder
  return input
}

// Создание заголовка
let title = document.createElement("h1")
title.textContent = "Список студентов"

// Создание таблицы
let table = document.createElement("table") // Таблица

let thead = document.createElement("thead") // Шапка таблицы
let theadTr = document.createElement("tr")

let nameTh = document.createElement("th")
nameTh.textContent = "Имя"

let ageTh = document.createElement("th")
ageTh.textContent = "Возраст"

let heightTh = document.createElement("th")
heightTh.textContent = "Рост"

let actionTh = document.createElement("th")
actionTh.textContent = "Действие"

theadTr.append(nameTh, ageTh, heightTh, actionTh)
thead.append(theadTr)

let tbody = document.createElement("tbody") // Тело таблицы

// Добавление шапки и тела таблицы в таблицу
table.append(thead, tbody)

// Функция, возвращающая строку таблицы с именем возрастом и ростом студента
function getStudentTr(name, age, height) {
  let studentTr = document.createElement("tr")
  let nameTd = document.createElement("td")
  let ageTd = document.createElement("td")
  let heightTd = document.createElement("td")
  let removeTd = document.createElement("td")

  let removeBtn = document.createElement("button")
  removeBtn.textContent = "Удалить"

  removeBtn.onclick = function () {
    studentTr.remove() // Удаляет studentTr

    // Команда remove() удаляет HTML-элемент. Сначала указывается переменная с элементом, которую мы хотим удалить. После точки прописывается команда удаления remove() - элемент.remove()
  }

  nameTd.textContent = name
  ageTd.textContent = age
  heightTd.textContent = height
  removeTd.append(removeBtn)

  studentTr.append(nameTd, ageTd, heightTd, removeTd)
  return studentTr
}

// Блок добавления
let addBox = document.createElement("div")
addBox.classList.add("add-box")

// Создание текстового поля для имени
let nameInp = getInput("Имя")

// Создание текстового поля для имени
let ageInp = getInput("Возраст", "number")

let heightInp = getInput("Рост", "number")

// Создание кнопки добавления
let addNewBtn = document.createElement("button")
addNewBtn.textContent = "Добавить студента"

// Создание обработчика события для кнопки добавления
addNewBtn.onclick = function () {
  let name = nameInp.value
  let age = Number(ageInp.value)
  let height = Number(heightInp.value)

  // Создаем новый tr студента для таблицы
  let newStudentTr = getStudentTr(name, age, height)
  tbody.append(newStudentTr)

  // Очищаем текстовые поля
  nameInp.value = ""
  ageInp.value = ""
  heightInp.value = ""
}

// Добавление элементов в addBox
addBox.append(nameInp, ageInp, heightInp, addNewBtn)

// Добавление элементов в body
document.body.append(title, addBox, table)