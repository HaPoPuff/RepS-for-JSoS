// Сделайте код программы создания списка пользователей короче, используя цикл.

// Заголовок
let title = document.createElement("h1")
title.textContent = "Список пользователей"

let list = document.createElement("ul") // Список

for (let index = 1; index <= 5; index++) {
  let userName = prompt(`Введите имя пользователя ${index}`)
  let userItem = document.createElement("li")
  userItem.textContent = `${index}) ${userName}`
  list.append(userItem)
}

document.body.append(title, list)