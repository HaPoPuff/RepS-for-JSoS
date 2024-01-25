// Это простое приложение для тестирования знаний. При клике на кнопку "Начать тестирование" запускается тест. В программе есть логическая ошибка. Почему-то всегда в результате тестирования выводится отрицательный исход: "Тест не пройден!". И один вопрос из трех не отображается в confirm(). Попробуйте исправить проблему.

// Функция, возвращающая новую кнопку
function getButton(text) {
  let button = document.createElement("button")
  button.textContent = text
  button.classList.add("btn")
  return button
}

// Запускает тестиование и возвращает результат типа Boolean
function getTest() {
  let resultFlag = true // Переменная флаг, который имзенится в случае неправильного ответа

  // Вопрос 1 
  if (confirm("Boolean - числовой тип данных?") === true) {
    resultFlag = false // Меняем значение флага
  }

  // Вопрос 2
  if (confirm("includes - возвращает кол-во символов в массиве?") === true) {
    resultFlag = false
  }

  // Вопрос 3
  if (confirm("confirm - показывает окно выбора ДА / НЕТ") === false) {
    resultFlag = false // Меняем значение флага
  }

  return resultFlag
}

// Главный заголовок
let title = document.createElement("h1")
title.textContent = `Тестирование на знание темы "Boolean"`

// Кнопка для начала тестирования
let startTestBtn = getButton("Начать тестирование")

startTestBtn.onclick = function () {

  // Блок для вывода результата тестирования
  let resultBox = document.createElement("div")

  // Запуск теста
  let test = getTest()

  if (test === true) {
    resultBox.classList.add("result-success")
    resultBox.textContent = "Тест пройден успешно!"
  } else {
    resultBox.classList.add("result-error")
    resultBox.textContent = "Тест не пройден!"
  }

  startTestBtn.remove() // Удаление кнопки
  document.body.append(resultBox)
}

document.body.append(title, startTestBtn)