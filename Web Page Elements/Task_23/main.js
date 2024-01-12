// Реализуйте в документе (в body) следующую структуру HTML-элементов с помощью встроенных функция создания элементов в Javascript:

/*
<h1>Что я узнал в видео</h1>
<ul>
  <li>1) Как создавать HTML-элементы</li>
  <li>2) Узнал, как добавлять текст и HTML-код в элемент</li>
  <li>3) Как добавлять и удалять классы</li>
  <li>4) Узнал, как вложить один элемент в другой</li>
  <li>5) Узнал, что такое событие и обработчик события</li>
  <li>6) Как назначить обработчик события</li>
</ul>
*/

// Для создания элементов необходимо использовать:
// document.createElement()
// textContent
// append()

// document.write() мы уже не используем


let count = 0

let header = document.createElement("h1")
header.textContent = "Что я узнал в видео"

let list = document.createElement("ul")

// let listItem = document.createElement("li")

function createListItem(text) {
  count++
  let listItem = document.createElement("li")
  listItem.textContent = `${count}) ${text}`
  return listItem

}

document.body.append(header, list)
list.append(createListItem('Как создавать HTML-элементы'))
list.append(createListItem('Узнал, как добавлять текст и HTML-код в элемент'))
list.append(createListItem('Как добавлять и удалять классы'))
list.append(createListItem('Узнал, как вложить один элемент в другой'))
list.append(createListItem('Узнал, что такое событие и обработчик события'))
list.append(createListItem('Как назначить обработчик события'))