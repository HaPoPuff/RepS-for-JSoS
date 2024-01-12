// Это простая программа, которая создает на странице HTML-элементы (контейнер, заголовок и кнопку) с помощью встроенных функций. При клике по кнопке происходит изменение ночной темы на дневную (цвет фона и шрифта меняется), а сама кнопка удаляется.

// Проблема в том, что в коде допущены ошибки. Исправьте его так, что бы программа запускалась, создавала HTML-элементы и кнопка выполняла свою задачу при клике.

// Создание контейнера
let container = document.createElement("div")
container.classList.add("container")

// Создание заголовка
let title = document.createElement("h1")
title.classList.add("main-title")
title.textContent = "Добро пожаловать на сайт!"

// Создание кнопки
let button = document.createElement("button")
button.classList.add("btn")
button.textContent = "Дневная тема"

// Добавление обработчика клика по кнопке
button.onclick = function () {
  document.body.classList.add("day-theme")
  button.remove() // Удаление кнопки. remove() удаляет указанные перед точной элемент
}

// Добавление элементов
document.body.append(container)
container.append(title, button)