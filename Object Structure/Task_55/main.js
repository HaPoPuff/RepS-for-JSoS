// Это список сотрудников компании, формирующийся на основе массива объектов. Сейчас в списке отображается только имя и возраст сотрудника. На мой взгляд не хватает данных о его местоположении.

// Добавьте возможность ввода города в окне prompt() при клике на кнопку "Добавить сотрудника". Местоположение сотрудника (город) должно отображаться в списке после возраста.

// Массив сотрудников
let workersArray = [
  {
    name: "Илья",
    age: 23,
    city: 'Moscow'
  },
  {
    name: "Василиса",
    age: 41,
    city: 'London'
  },
  {
    name: "Наталья",
    age: 27,
    city: 'Paris'
  }
]

// Заголовок
let title = document.createElement("h1")
title.textContent = "Сотрудники компании"

// Кнопка добавления нового сотрудника
let addWorkerBtn = document.createElement("button")
addWorkerBtn.textContent = "Добавить сотрудника"

addWorkerBtn.onclick = function () {
  let nameValue = prompt("Введите имя сотрудника")
  let ageValue = Number(prompt("Введите возраст сотрудника"))
  let cityValue = prompt("Введите город сотрудника")

  // Создаем объект
  let newWorkerObj = {
    name: nameValue,
    age: ageValue,
    city: cityValue
  }

  workersArray.push(newWorkerObj) // Добавляем объект в массив

  render(workersArray) // Запускаем перерисовку списка
}

let list = document.createElement("ul") // Список

// Функция отрисовки списка
function render(arr) {
  list.innerHTML = "" // Очищаем список перед отрисовкой

  // Начинаем отрисовку, используя массив и цикл
  for (let i = 0; i < arr.length; i++) {
    let item = document.createElement("li")
    item.textContent = `${i + 1}) ${arr[i].name}, возраст: ${arr[i].age}, город: ${arr[i].city}`

    // Кнопка удаления сотрудника из списка
    let removeBtn = document.createElement("button")
    removeBtn.textContent = "Удалить"

    removeBtn.onclick = function () {
      arr.splice(i, 1) // Удаляем элемент из массива
      render(arr) // Перерисовываем список
    }

    item.append(removeBtn)

    list.append(item)
  }
}

// Запускаем отрисовку списка при загрузке страницы
render(workersArray)

document.body.append(title, addWorkerBtn, list)