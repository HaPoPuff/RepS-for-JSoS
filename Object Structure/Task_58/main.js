// Это приложение списка задач. Здесь можно создавать задачи с установкой типа важности. Выполненные задачи попадают в скрытый список. Для того, что бы посмотреть список задач, которые уже были выполнены, необходимо кликнуть по кнопке "Показать выполненное". 

// Приложение работает корректно, но предлагаю его немного улучшить. Добавьте автоматическое отображение текстового сообщения "Задач нет", если список пуст. Такое сообщение должно отображаться, как в пустом списке текущих задач, так и в выполненных.

// Массив текущих задач
let currentTaskArray = [
  {
    title: "Купить новый телефон",
    type: "average"
  },
  {
    title: "Освоить Javascript",
    type: "important"
  },
  {
    title: "Погладить одежду",
    type: "simple"
  },
]

// Массив выполненных задач
let doneTaskArray = []

// Функция, возвращающая новую кнопку
function getButton(text) {
  let button = document.createElement("button")
  button.classList.add("btn")
  button.textContent = text
  return button
}

// Функция, возвращающая новый input
function getInput(type, placeholder) {
  let input = document.createElement("input")
  input.classList.add("add-box__inp")
  input.type = type
  input.placeholder = placeholder
  return input
}

// Функция, возвращая новый select
function getSelect(optionsArr) {
  let select = document.createElement("select")
  select.classList.add("add-box__select")
  for (let i = 0; i < optionsArr.length; i++) {
    let option = document.createElement("option")
    option.textContent = optionsArr[i].text
    option.value = optionsArr[i].value
    select.append(option)
  }
  return select
}

// Функция, возвращающая элемент текущей задачи
function getCurrentTaskItem(index, task) {
  let taskItem = document.createElement("li")
  taskItem.classList.add("task-list__item")

  taskItem.textContent = task.title // Добавляем название задачи
  taskItem.classList.add(task.type)  // Добавляем класс, определяющий статус

  let actionsBox = document.createElement("div")
  actionsBox.classList.add("task-list__actions-box")

  // Кнопка выполненения задачи
  let doneBtn = getButton("Выполнено")
  doneBtn.onclick = function () {
    doneTaskArray.push(task)
    currentTaskArray.splice(index, 1)
    renderCurrentTaskList(currentTaskArray) // Перерисовка списка текущуих задач
    renderDoneTaskList(doneTaskArray) // Перерисовка списка выполненных задач
  }

  // Кнопка удаления задачи
  let removeBtn = getButton("Удалить")
  removeBtn.onclick = function () {
    currentTaskArray.splice(index, 1)
    renderCurrentTaskList(currentTaskArray) // Перерисовка списка текущуих задач
  }

  actionsBox.append(doneBtn, removeBtn)

  taskItem.append(actionsBox)

  return taskItem
}

// Функция, возвращающая элемент выполненной задачи
function getDoneTaskItem(index, task) {
  let taskItem = document.createElement("li")
  taskItem.classList.add("task-list__item")

  taskItem.textContent = task.title // Добавляем название задачи
  taskItem.classList.add(task.type)  // Добавляем класс, определяющий статус

  // Кнопка удаления задачи
  let removeBtn = getButton("Удалить")
  removeBtn.onclick = function () {
    doneTaskArray.splice(index, 1)
    renderDoneTaskList(doneTaskArray) // Перерисовка списка выполненных задач
  }

  taskItem.append(removeBtn)

  return taskItem
}

// Блок для текущих задач
let currentBox = document.createElement("div")
currentBox.classList.add("current-box")

// Блок добавления
let addBox = document.createElement("div")
addBox.classList.add("add-box")

let taskTitleInp = getInput("text", "Новая задача") // Текстовое поле для названия задачи

// Массив типов задач
let taskTypeArr = [
  {
    text: "Обычная задача",
    value: "simple"
  },
  {
    text: "Средняя задача",
    value: "average"
  },
  {
    text: "Важная задача",
    value: "important"
  }
]

let taskTypeSelect = getSelect(taskTypeArr) // Выпадающий список для типов задач

let addTaskBtn = getButton("Создать задачу") // Кнопка добавления задачи
addTaskBtn.onclick = function () {
  let taskTitleValue = taskTitleInp.value
  let taskTypeValue = taskTypeSelect.value

  let newTask = {
    title: taskTitleValue,
    type: taskTypeValue
  }
  currentTaskArray.push(newTask)

  renderCurrentTaskList(currentTaskArray) // Перерисовка списка текущих задач

  taskTitleInp.value = ""
  taskTypeSelect.value = "simple"
}

addBox.append(taskTitleInp, taskTypeSelect, addTaskBtn)

// Список текущих задач
let currentTaskList = document.createElement("ul")
currentTaskList.classList.add("task-list")

// Функция отрисовки списка текущих задач
function renderCurrentTaskList(taskArray) {
  currentTaskList.innerHTML = ""

  if (taskArray.length == 0) {
    let text = document.createElement('h2')
    text.textContent = 'Список пуст'
    currentTaskList.append(text)
  } else {
    for (let i = 0; i < taskArray.length; i++) {
      let taskItem = getCurrentTaskItem(i, taskArray[i])
      currentTaskList.append(taskItem)
    }
  }
}

renderCurrentTaskList(currentTaskArray) // Отрисовка списка при запуске

currentBox.append(addBox, currentTaskList)

// Блок для выполненных задач
let doneBox = document.createElement("div")
doneBox.classList.add("done-box")

// Кнопка показа выполненных задач
let showDoneTaskListBtn = getButton("Показать выполненное")

// Список выполненных задач
let doneTaskList = document.createElement("ul")
doneTaskList.classList.add("task-list", "task-list_done", "hide")

// Показать / скрыть список выполненных задач
showDoneTaskListBtn.onclick = function () {
  if (doneTaskList.classList.contains("hide") === true) {
    showDoneTaskListBtn.textContent = "Скрыть выполненное"
    doneTaskList.classList.remove("hide")
  } else {
    showDoneTaskListBtn.textContent = "Показать выполненное"
    doneTaskList.classList.add("hide")
  }
}

// Функция отрисовки списка выполненных задач
function renderDoneTaskList(taskArray) {
  doneTaskList.innerHTML = ""

  if (taskArray.length == 0) {
    let text = document.createElement('h2')
    text.textContent = 'Список пуст'
    doneTaskList.append(text)
  } else {
    for (let i = 0; i < taskArray.length; i++) {
      let taskItem = getDoneTaskItem(i, taskArray[i])
      doneTaskList.append(taskItem)
    }
  }
}

renderDoneTaskList(doneTaskArray) // Отрисовка списка при запуске

doneBox.append(showDoneTaskListBtn, doneTaskList)

document.body.append(currentBox, doneBox)