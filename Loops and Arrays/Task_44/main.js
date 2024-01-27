// Эта программа выводит список автомобилей, хранящийся в массиве. Но в коде есть ошибки. Попробуйте их исправить.

let carsArray = ["Audi", "BMW", "Chevrolet", "Tesla", "Kia"]

// Заголовок
let title = document.createElement("h1")
title.textContent = "Список авто"

let list = document.createElement("ul") // Список

for (let i = 0; i < carsArray.length; i++) {
  let carItem = document.createElement("li")
  carItem.textContent = `${i + 1}) ${carsArray[i]}`
  list.append(carItem)
}

document.body.append(title, list)