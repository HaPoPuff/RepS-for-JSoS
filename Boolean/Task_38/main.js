// Это простое приложение с заметками. Для отображения всего текста заметки необходимо кликнуть по кнопке "Показать всё".

// Доработайте код программы так, что бы часть текста скрывалась и кнопка "Показать всё" отображалась в карточке только тогда, когда в тексте больше 80 символов.

// Функция, возвращающая новую кнопку
function getButton(text) {
  let button = document.createElement("button")
  button.textContent = text
  button.classList.add("btn")
  return button
}

// Функция возвращает карточку заметки
function getNoteListItem(text) {
  let noteItem = document.createElement("li")
  noteItem.classList.add("note-list__item")

  let noteText = document.createElement("p")
  noteText.classList.add("note-list__text")
  noteText.textContent = text

  noteItem.append(noteText)

  noteText.classList.add("note-list__text_hidden") // Добавляем класс для скрытия части текст

  // Кнопка "Показать все"
  let showMoreBtn = document.createElement("button")
  showMoreBtn.classList.add("btn")
  showMoreBtn.textContent = "Показать всё"

  showMoreBtn.onclick = function () {
    noteText.classList.remove("note-list__text_hidden") // Удаляем класс для скрытия части текст
    showMoreBtn.remove() // Добавляем кнопку для скрытия части текст
  }

  if (noteText.textContent.length < 80 === false) {
    noteItem.append(showMoreBtn)
  }

  return noteItem
}


// Главный заголовок
let title = document.createElement("h1")
title.textContent = `Заметки`

// Список
let noteList = document.createElement("ul")
noteList.classList.add("note-list")

// Заметка 1
let noteItem1 = getNoteListItem(`Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.`)

// Заметка 2
let noteItem2 = getNoteListItem(`Однажды одна маленькая строчка рыбного текста.`)

// Заметка 3
let noteItem3 = getNoteListItem(`По дороге встретил текст рукопись. Она предупредила его: «В моей стране все переписывается по несколько раз. Единственное, что от меня осталось, это приставка «и». Возвращайся ты лучше в свою безопасную страну». Не послушавшись рукописи, наш текст продолжил свой путь. Вскоре ему повстречался коварный составитель.`)

noteList.append(noteItem1, noteItem2, noteItem3)
document.body.append(title, noteList)