// Это приложение цветочного магазина. Цветы разделены на две группы: КРАСНЫЕ и ФИОЛЕТОВЫЕ. В программе есть возможность перемещать цветы между группами.

// Проблема в том, что кнопка перемещения цветов из ФИОЛЕТОВОГО списка в КРАСНЫЙ не работает. Думаю, это следует исправить. Доработайте программу так, что бы сотрудники магазина могли перемещать цветы между группами.

// Обратите внимание, списки цветов хранятся в двух разных массивах. Это интересный приём распределения данных. Так же в программе присутствуют две функции отрисовки списков для КРАСНЫХ и ФИОЛЕТОВЫХ цветов. 

// КРАСНЫЕ цветы
let redFlowersArray = [
  {
    title: "Розы",
    color: "красные"
  },
  {
    title: "Тюльпаны",
    color: "красные"
  },
  {
    title: "Сирень",
    color: "фиолетовая"
  }
]

// ФИОЛЕТОВЫЕ цветы
let violetFlowersArray = [
  {
    title: "Ирис",
    color: "фиолетовый"
  },
  {
    title: "Пионы",
    color: "красные"
  },
  {
    title: "Астры",
    color: "фиолетовые"
  },
  {
    title: "Астры",
    color: "красные"
  }
]

// Функция, возвращающая элемент списка КРАСНЫХ цветов
function getRedFlowerItem(index, flower) {
  let flowerItem = document.createElement("li")
  flowerItem.classList.add("red")
  flowerItem.textContent = `${index + 1}) ${flower.title} - ${flower.color}`

  // Кнопка перемещения в список ФИОЛЕТОВЫХ цветов
  let moveBtn = document.createElement("button")
  moveBtn.textContent = ">>"

  moveBtn.onclick = function () {
    violetFlowersArray.push(flower) // Добавляем объект в массив ФИОЛЕТОВЫХ цветов
    redFlowersArray.splice(index, 1) // Удаляем объект из массива КРАСНЫХ цветов

    // Запускаем перерисовку двух списков
    renderRedFlowersList(redFlowersArray)
    renderVioletFlowersList(violetFlowersArray)
  }

  flowerItem.append(moveBtn)

  return flowerItem
}

// Функция, возвращающая элемент списка ФИОЛЕТОВЫХ цветов
function getVioletFlowerItem(index, flower) {
  let flowerItem = document.createElement("li")
  flowerItem.classList.add("violet")
  flowerItem.textContent = `${index + 1}) ${flower.title} - ${flower.color}`

  // Кнопка перемещения в список КРАСНЫХ цветов
  let moveBtn = document.createElement("button")
  moveBtn.textContent = "<<"

  moveBtn.onclick = function () {
    violetFlowersArray.splice(index, 1) // Удаляем объект из массива КРАСНЫХ цветов
    redFlowersArray.push(flower) // Добавляем объект в массив ФИОЛЕТОВЫХ цветов

    // Запускаем перерисовку двух списков
    renderVioletFlowersList(violetFlowersArray)
    renderRedFlowersList(redFlowersArray)
  }

  flowerItem.prepend(moveBtn)

  return flowerItem
}


// Список КРАСНЫХ цветов
let redList = document.createElement("ul")

// Список ФИОЛЕТОВЫХ цветов
let violetList = document.createElement("ul")

// Функция отрисовки списка КРАСНЫХ цветов
function renderRedFlowersList(arr) {
  redList.innerHTML = ""

  for (let i = 0; i < arr.length; i++) {
    let flowerItem = getRedFlowerItem(i, arr[i])
    redList.append(flowerItem)
  }
}

// Отрисовка списка КРАСНЫХ цветов при загрузке страницы
renderRedFlowersList(redFlowersArray)

// Функция отрисовки списка ФИОЛЕТОВЫХ цветов
function renderVioletFlowersList(arr) {
  violetList.innerHTML = ""

  for (let i = 0; i < arr.length; i++) {
    let flowerItem = getVioletFlowerItem(i, arr[i])
    violetList.append(flowerItem)
  }
}

// Отрисовка списка ФИОЛЕТОВЫХ цветов при загрузке страницы
renderVioletFlowersList(violetFlowersArray)

document.body.append(redList, violetList)