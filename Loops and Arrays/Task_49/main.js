// Это приложение - "Шагомер". В нём есть возможность хранения списка проделанных шагов  и расчёта общего количества сделанных шагов в день. Сейчас в программе для редактирования списка присутствует только кнопка изменения значения.

// Добавьте кнопку добавления новой записи в список с шагами. Для ввода нового значения допустимо использовать окно prompt(). Также, добавьте кнопку удаления для каждой записи. 

// Массив шагов
let stepsArray = [1011, 2000, 620]

function getStepsItem(index, steps) {
  let stepsItem = document.createElement("li")
  stepsItem.textContent = `${index + 1}) ${steps}`

  // Кнопка изменения шагов
  let editBtn = document.createElement("button")
  editBtn.textContent = "Изменить"

  editBtn.onclick = function () {
    // Получаем значение
    let newSteps = Number(prompt("Введите кол-во шагов", stepsArray[index]))
    stepsArray[index] = newSteps // Имзеняем значение в массиве
    render(stepsArray) // Перерисовываем список
  }

  let removeBtn = document.createElement('button')
  removeBtn.textContent = 'X'

  removeBtn.onclick = function () {
    stepsArray.splice(index, 1)
    render(stepsArray)
  }

  stepsItem.append(editBtn, removeBtn)
  return stepsItem
}

// Заголовок
let title = document.createElement("h1")
title.textContent = "Шагомер"

let addBtn = document.createElement("button")
addBtn.textContent = 'Добавить шаги'

addBtn.onclick = function () {
  let addStep = Number(prompt('Введите кол-во шагов, которые хотите добавить'))
  stepsArray.push(addStep)
  render(stepsArray)
}

let list = document.createElement("ul") // Список шагов

let totalStepsStrong = document.createElement("strong") // Общее кол-во шагов

// Функция отрисовки списка
function render(arr) {
  list.innerHTML = "" // Очищаем список перед отрисовкой

  let totalSteps = 0 // Общее кол-во шагов

  // Начинаем отрисовку, используя массив и цикл
  for (let i = 0; i < arr.length; i++) {
    let stepsItem = getStepsItem(i, stepsArray[i])

    totalSteps = totalSteps + stepsArray[i] // Увечлививаем общее кол-во шагов

    list.append(stepsItem)
  }

  // Изменяем текст в элементе общего кол-ва шагов
  totalStepsStrong.textContent = `Всего шагов: ${totalSteps}`
}

// Запускаем отрисовку списка при загрузке страницы
render(stepsArray)

document.body.append(title, addBtn, list, totalStepsStrong)