let index = 0
let totalPrice = 0

// Создание текстового поля 
function getInput(placeholder, type, className) {
  let input = document.createElement('input')
  input.placeholder = placeholder
  input.type = type
  input.classList.add(className)
  return input
}

// Создание кнопки
function getBtn(text, className) {
  let btn = document.createElement('button')
  btn.textContent = text
  btn.classList.add(className)
  return btn
}

// Создание контейнера
function getDivBox(className) {
  let box = document.createElement('div')
  box.classList.add(className)
  return box
}

// Создание товаров
function getGroupBox(nameItem, countItem, priceItem) {
  totalPrice = totalPrice + (priceItem * countItem)

  let box1 = getDivBox('item-group')
  let box2 = getDivBox('item-group')
  let box3 = getDivBox('item-group')
  let box4 = getDivBox('item-group')
  let allBox = getDivBox('item-all__group')

  let upperName = document.createElement('p')
  upperName.textContent = 'Название'
  upperName.classList.add('item-upper__text')

  let downName = document.createElement('p')
  downName.textContent = nameItem
  downName.classList.add('item-down__text')

  box1.append(upperName, downName)

  let upperCount = document.createElement('p')
  upperCount.textContent = 'Кол-во'
  upperCount.classList.add('item-upper__text')

  let downCount = document.createElement('p')
  downCount.textContent = countItem
  downCount.classList.add('item-down__text')

  box2.append(upperCount, downCount)

  let upperPrice = document.createElement('p')
  upperPrice.textContent = 'Цена'
  upperPrice.classList.add('item-upper__text')

  let downPrice = document.createElement('p')
  downPrice.textContent = `${priceItem} руб`
  downPrice.classList.add('item-down__text')

  box3.append(upperPrice, downPrice)

  let upperPriceTotal = document.createElement('p')
  upperPriceTotal.textContent = 'Общая цена'
  upperPriceTotal.classList.add('item-upper__text')

  let downPriceTotal = document.createElement('p')
  downPriceTotal.textContent = `${priceItem * countItem} руб`
  downPriceTotal.classList.add('item-down__text')

  box4.append(upperPriceTotal, downPriceTotal)

  allBox.append(box1, box2, box3, box4)

  return allBox
}

// Созданмие заголовка
let title = document.createElement('h1')
title.textContent = 'Чек покупки'

// Текстовые поля для ввода товаров
let nameItemInp = getInput('Название товара', 'text', 'main-input')
let countItemInp = getInput('Количество', 'number', 'main-input')
let priceItemInp = getInput('Цена', 'number', 'main-input')

// Добавление товаров
let itemBox = getDivBox('item-container')

// Кнопка добавления товара
let addBtn = getBtn('Добавить', 'add-btn')
addBtn.onclick = function () {
  let nameItemValue = nameItemInp.value
  let countItemValue = countItemInp.value
  let priceItemValue = priceItemInp.value

  index++

  // Товар
  let numeric = document.createElement('span')
  numeric.textContent = `${index}`

  let item = getGroupBox(nameItemValue, countItemValue, priceItemValue)

  let editBtn = getBtn('Изменить', 'edit-btn')
  let removeBtn = getBtn('Удалить', 'remove-btn')

  // Добавление товаров
  let itemBox = getDivBox('item-container')
  itemBox.append(numeric, item, editBtn, removeBtn)

  totalSum.textContent = `${totalPrice} руб`

  document.body.append(itemBox, totalBox)

  editBtn.onclick = function () {
    let editName = prompt(`Изменить имя: ${nameItemValue}?`)
    let editCount = prompt(`Изменить кол-во: ${countItemValue}?`)
    let editPrice = prompt(`Изменить цену: ${priceItemValue}?`)


  }

  removeBtn.onclick = function () {
    itemBox.remove()
    totalPrice = totalPrice - (countItemValue * priceItemValue)
    totalSum.textContent = `${totalPrice} руб`
    index--
  }

  nameItemInp.value = ''
  countItemInp.value = ''
  priceItemInp.value = ''
}

// Добавление итогового подсчета
let totalText = document.createElement('span')
totalText.textContent = 'Итоговая стоимость: '
let totalSum = document.createElement('span')

let totalBox = getDivBox('total-container')
totalBox.append(totalText, totalSum)

// Добавление элементов в контейнер
let inpBox = getDivBox('main-container')
inpBox.append(nameItemInp, countItemInp, priceItemInp, addBtn)

// Добавление основных элементов в body
document.body.append(title, inpBox, totalBox)

