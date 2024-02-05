let index = 0
let itemNameArr = []
let itemCountArr = []
let itemPriceArr = []

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
function getGroupBox(index, nameItem, countItem, priceItem) {
  let numeric = document.createElement('span')
  let upperName = document.createElement('p')
  let downName = document.createElement('p')
  let box1 = getDivBox('item-group')
  let upperCount = document.createElement('p')
  let downCount = document.createElement('p')
  let box2 = getDivBox('item-group')
  let upperPrice = document.createElement('p')
  let downPrice = document.createElement('p')
  let box3 = getDivBox('item-group')
  let upperPriceTotal = document.createElement('p')
  let downPriceTotal = document.createElement('p')
  let box4 = getDivBox('item-group')
  let editBtn = getBtn('Изменить', 'edit-btn')
  let removeBtn = getBtn('Удалить', 'remove-btn')
  let allBox = getDivBox('item-all__group')

  numeric.textContent = `${index + 1}`
  upperName.textContent = 'Название'
  downName.textContent = nameItem
  upperCount.textContent = 'Кол-во'
  downCount.textContent = countItem
  upperPrice.textContent = 'Цена'
  downPrice.textContent = `${priceItem} руб`
  upperPriceTotal.textContent = 'Общая цена'
  downPriceTotal.textContent = `${priceItem * countItem} руб`

  upperName.classList.add('item-upper__text')
  downName.classList.add('item-down__text')
  upperCount.classList.add('item-upper__text')
  downCount.classList.add('item-down__text')
  upperPrice.classList.add('item-upper__text')
  downPrice.classList.add('item-down__text')
  upperPriceTotal.classList.add('item-upper__text')
  downPriceTotal.classList.add('item-down__text')

  editBtn.onclick = function () {
    let editName = prompt(`Изменить имя: ${nameItem}?`)
    let editCount = prompt(`Изменить кол-во: ${countItem}?`)
    let editPrice = prompt(`Изменить цену: ${priceItem}?`)

    itemNameArr[index] = editName
    itemCountArr[index] = editCount
    itemPriceArr[index] = editPrice

    render(itemNameArr, itemCountArr, itemPriceArr)
  }

  removeBtn.onclick = function () {
    itemNameArr.splice(index, 1)
    itemCountArr.splice(index, 1)
    itemPriceArr.splice(index, 1)

    render(itemNameArr, itemCountArr, itemPriceArr)
  }

  box1.append(upperName, downName)
  box2.append(upperCount, downCount)
  box3.append(upperPrice, downPrice)
  box4.append(upperPriceTotal, downPriceTotal)
  allBox.append(numeric, box1, box2, box3, box4, editBtn, removeBtn)

  return allBox
}

// Созданмие заголовка
let title = document.createElement('h1')
title.textContent = 'Чек покупки'

// Текстовые поля для ввода товаров
let nameItemInp = getInput('Название товара', 'text', 'main-input')
let countItemInp = getInput('Количество', 'number', 'main-input')
let priceItemInp = getInput('Цена', 'number', 'main-input')

// Кнопка добавления товара
let addBtn = getBtn('Добавить', 'add-btn')

let itemBox = getDivBox('item-container')

addBtn.onclick = function () {
  let nameItemValue = nameItemInp.value
  let countItemValue = countItemInp.value
  let priceItemValue = priceItemInp.value

  // Добавление товаров
  itemNameArr.push(nameItemValue)
  itemCountArr.push(countItemValue)
  itemPriceArr.push(priceItemValue)

  render(itemNameArr, itemCountArr, itemPriceArr)

  document.body.append(itemBox)
  document.body.append(totalBox)

  nameItemInp.value = ''
  countItemInp.value = ''
  priceItemInp.value = ''
}

function render(nameArr, countArr, priceArr) {
  itemBox.innerHTML = ''
  let totalPrice = 0

  if (nameArr.length === 0) {
    let box = getDivBox('list-null')
    box.textContent = 'Список товаров пуст'
    itemBox.append(box)
    return
  }

  for (let i = 0; i < nameArr.length; i++) {
    let item = getGroupBox(i, nameArr[i], countArr[i], priceArr[i])
    itemBox.append(item)

    totalPrice = totalPrice + (countArr[i] * priceArr[i])
  }

  totalSum.textContent = `${totalPrice} руб`
}

render(itemNameArr, itemCountArr, itemPriceArr)

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
document.body.append(title, inpBox, itemBox, totalBox)


