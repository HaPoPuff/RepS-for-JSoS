// Данная программа выводит в документ характеристики компьютера. Сейчас в коде допущены логические ошибки. Исправьте программу так, что бы в документ выводился корректный результат.

// Функция, создающая HTML элемент (любой)
function createElement(elementName, classList, text) {
  document.write(`<${elementName} class="${classList}">
                    ${text}
                  </${elementName}>`)
}

// Функция, создающая заголовок h2
function createH2(classList, text) {
  // Вызов функции createElement с параметрами, для создания элемента
  createElement("h2", classList, text)
}

// Функция, создающая strong
function createStrong(classList, text) {
  // Вызов функции createElement с параметрами, для создания элемента
  createElement("strong", classList, text)
}

// Функция создания одной карточки
function createItem(title, value, className = "") {
  document.write(`<li class="list__item ${className}">`)
  createStrong("list__title", title)
  createH2("list__value", value)
  document.write('</li>')
}

document.write('<div class="container">')
document.write('<h1 class="main-title">Характеристики компьютера</h1>')
document.write('<ul class="list">')

// Создание элементов списка
createItem("Процессор", "Apple M1")
createItem("Оперативная память", "8 ГБ")

createItem("SSD", "512 ГБ", "list__item_light")
createItem("Диагональ экрана", "14")

document.write('</ul>')
document.write('</div>')

