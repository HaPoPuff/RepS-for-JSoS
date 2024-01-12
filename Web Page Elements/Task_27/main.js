// Добро пожаловать в Хогвартс. Эта программа поможет распределить прибывших учеников - первокурсников по факультетам. Механика простая. Вводим в текстовое поле имя ученика, нажимаем кнопку соответствующего факультета и ученик попадает в нужный список (факультет).

// Это удобное приложение, в котором есть возможность удалить ученика из списка и изменить имя. Просто магия, согласны? Внимательно изучите код и запустите приложение в браузере.

// Но в данной программе есть небольшие логически ошибки. По какой-то неизвестной причине ученики не добавляются в список "Когтевран" и "Пуффендуй". Попробуйте проверить, и вы заметите, что есть проблема с добавлением учеников именно в эти факультеты. 

// Так же есть проблема с изменением имени ученика. При клике на кнопку изменить, появляется prompt для изменения имени. При изменении имени оно (имя) почему-то удаляется в элементе списка. Думаю это следует исправить.

// Да, кода стало больше и в нем больше связей между функциями, но пришло время учиться работать и с такими программами. Развивать логическое мышление и строить связи. Если вам понадобится больше времени, то это нормально. Не сдавайтесь. 

// Функция, возвращающая новую кнопку
function getButton(text, className) {
  let button = document.createElement("button")
  button.textContent = text
  button.classList.add(className)
  return button
}

// Функция, возвращающая новый input
function getInput(placeholder, type, className) {
  let input = document.createElement("input")
  input.type = type
  input.placeholder = placeholder
  input.classList.add(className)
  return input
}

// Функция, возвращающая элемент списка ученика
function getNewStudent(name) {
  let studentItem = document.createElement("li")
  studentItem.classList.add("student-item")

  let nameSpan = document.createElement("span")
  nameSpan.classList.add("student-item__name")
  nameSpan.textContent = name

  let actionsBox = document.createElement("div")
  actionsBox.classList.add("student-item__actions")

  let editBtn = getButton("Изменить", "student-item__btn")

  editBtn.onclick = function () {
      let newName = prompt(`Введите новое имя, ${nameSpan.textContent}`)
    nameSpan.textContent = `${newName}`
  }

  let removeBtn = getButton("Удалить", "student-item__btn")
  removeBtn.onclick = function () {
    studentItem.remove() // Удаление studentItem
  }

  actionsBox.append(editBtn, removeBtn) // Добавляем кнопки в actionsBox
  studentItem.append(nameSpan, actionsBox)  // Добавляем элементы в studentItem

  return studentItem
}

// Блок для добавления ученика школы
let addBox = document.createElement("div")
addBox.classList.add("add-box")

// Текстовое поле для имени
let newStudentNameInp = getInput("Имя ученика", "text", "add-box__input") // Функция возвращает input

// Кнопки добавления в факультеты
let grifAddBtn = getButton("Добавить в Гриффиндор", "add-box__btn") // Кнопка button
let slizAddBtn = getButton("в Слизерин", "add-box__btn") // Кнопка button
let kogAddBtn = getButton("в Когтевран", "add-box__btn") // Кнопка button
let pufAddBtn = getButton("в Пуффендуй", "add-box__btn") // Кнопка button

addBox.append(newStudentNameInp, grifAddBtn, slizAddBtn, kogAddBtn, pufAddBtn)

// ------------------------
// Блок факультетов
let facultyBox = document.createElement("div")
facultyBox.classList.add("faculty-box")

// Список учеников Гриффиндор
let grifList = document.createElement("ul")
grifList.classList.add("list", "list_grif")

// Список учеников Слизерин
let slizList = document.createElement("ul")
slizList.classList.add("list", "list_sliz")

// Список учеников Когтевран
let kogList = document.createElement("ul")
kogList.classList.add("list", "list_kog")

// Список учеников Пуффендуй
let pufList = document.createElement("ul")
pufList.classList.add("list", "list_puf")

facultyBox.append(grifList, slizList, kogList, pufList)

// Добавляем обработчики событий клика кнопкам добавления
grifAddBtn.onclick = function () {
  let name = newStudentNameInp.value

  let newStudent = getNewStudent(name) // Функция возвращает li студента
  grifList.append(newStudent)

  newStudentNameInp.value = ""
}

slizAddBtn.onclick = function () {
  let name = newStudentNameInp.value

  let newStudent = getNewStudent(name) // Функция возвращает li студента
  slizList.append(newStudent)

  newStudentNameInp.value = ""
}

kogAddBtn.onclick = function () {
  let name = newStudentNameInp.value

  let newStudent = getNewStudent(name) // Функция возвращает li студента
  kogList.append(newStudent)

  newStudentNameInp.value = ""
}

pufAddBtn.onclick = function () {
  let name = newStudentNameInp.value

  let newStudent = getNewStudent(name) // Функция возвращает li студента
  pufList.append(newStudent)

  newStudentNameInp.value = ""
}

// Добавление элементов в body
document.body.append(addBox, facultyBox)