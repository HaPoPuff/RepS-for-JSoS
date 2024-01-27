// Сделайте код программы короче, используя цикл.

let students = [] // Массив студентов

for (let i = 0; i < 6; i++) {
  let student = prompt(`Введите имя студента ${i + 1}`)
  students.push(student)
}

// Заголовок
let title = document.createElement("h1")
title.textContent = "Список студентов"

let list = document.createElement("ul") // Список

// Отрисовка списка студентов
for (let i = 0; i < students.length; i++) {
  let studentItem = document.createElement("li")
  studentItem.textContent = `${i + 1}) ${students[i]}`
  list.append(studentItem)
}

document.body.append(title, list)