// Массив КАТАЛОГА товаров
let catalogArr = [
  {
    title: "iPhone 14 Pro",
    price: 110000,
    desc: "Смартфон Apple iPhone 14 Pro 128GB",
    img: 'img/1.jpg'
  },
  {
    title: "AirPods Pro",
    price: 2100,
    desc: "Наушники Apple AirPods Pro (2-го поколения, 2022)",
    img: 'img/2.jpg'
  },
  {
    title: "Чехол iPhone 14 Pro",
    price: 1200,
    desc: "Чехол для Apple iPhone 14 Pro - желтый",
    img: 'img/3.jpg'
  }
]

let catalogBuysArr = [

]

let index = 0


function getDivBox(className) {
  let box = document.createElement('div')
  box.classList.add(className)
  return box
}

function getBtn(text, className) {
  let btn = document.createElement('button')
  btn.textContent = text
  btn.classList.add(className)
  return btn
}

function getCardItem(cardArr, index) {
  let container = getDivBox('item-container')
  let imgItem = document.createElement('img')
  let titleItem = document.createElement('h2')
  let descItem = document.createElement('p')
  let priceItem = document.createElement('p')
  let addBtn = getBtn('+ В корзину', 'item-add__btn')

  imgItem.src = cardArr.img
  titleItem.textContent = cardArr.title
  descItem.textContent = cardArr.desc
  priceItem.textContent = `${cardArr.price} руб`

  imgItem.classList.add('item-img')
  titleItem.classList.add('item-title')
  descItem.classList.add('item-desc')
  priceItem.classList.add('item-price')

  addBtn.onclick = function () {
    catalogBuysArr.push(cardArr)
    renderBuys(catalogBuysArr)
  }

  container.append(imgItem, titleItem, descItem, priceItem, addBtn)

  return container
}

function getBusket() {
  let container = getDivBox('busket-container')
  let addBtn = document.createElement('button')
  let icon = document.createElement('img')

  icon.src = 'img/basket.svg'

  icon.classList.add('basket-img')
  addBtn.classList.add('basket-add__btn')

  addBtn.onclick = function () {
    if (addBtn.classList.contains('basket-add__btn')) {
      icon.src = 'img/close.svg'
      containerBuys.classList.remove('hide')
      addBtn.classList.remove('basket-add__btn')
      addBtn.classList.add('basket-close__btn')
    } else {
      icon.src = 'img/basket.svg'
      containerBuys.classList.add('hide')
      addBtn.classList.add('basket-add__btn')
      addBtn.classList.remove('basket-close__btn')
    }
  }

  addBtn.append(icon)
  container.append(addBtn)

  return container
}


let mainTitle = document.createElement('h1')
mainTitle.textContent = 'Каталог'

let containerItem = getDivBox('main-container')

function renderItem(arr) {
  containerItem.innerHTML = ""

  for (let i = 0; i < arr.length; i++) {
    let taskItem = getCardItem(arr[i], i)
    containerItem.append(taskItem)
  }
}

renderItem(catalogArr)

let containerBuys = getDivBox("buys-container")
containerBuys.classList.add('hide')

function getBuysItem(buysArr, index) {

  let box = getDivBox('buys-item')
  let img = document.createElement('img')
  let textBox = getDivBox('buys-label')
  let title = document.createElement('span')
  let price = document.createElement('span')
  let removeBtn = document.createElement('button')

  img.src = buysArr.img
  title.textContent = buysArr.title
  price.textContent = `${buysArr.price} руб`
  removeBtn.textContent = 'Удалить'

  img.classList.add('buys-img')
  title.classList.add('buys-title')
  price.classList.add('buys-price')
  removeBtn.classList.add('buys-remove__btn')

  removeBtn.onclick = function () {
    catalogBuysArr.splice(index, 1)
    renderBuys(catalogBuysArr)

  }



  textBox.append(title, price)
  box.append(img, textBox, removeBtn)

  return box
}

function renderBuys(arr) {
  containerBuys.innerHTML = ''

  let totalPrice = 0

  if (arr.length === 0) {
    let text = document.createElement('p')
    text.textContent = 'Товаров в карзине нет'
    text.classList.add('buys-null')
    containerBuys.append(text)
  } else {
    for (let i = 0; i < arr.length; i++) {
      let taskItem = getBuysItem(arr[i], i)
      totalPrice = totalPrice + arr[i].price
      containerBuys.append(taskItem)
    }
  }

  let buyBth = document.createElement('button')
  buyBth.classList.add('buys-buy__btn')
  buyBth.textContent = `Заказать на сумму ${totalPrice} руб`

  buyBth.onclick = function () {
    alert('Раздел в разработке')
  }

  containerBuys.append(buyBth)
}

renderBuys(catalogBuysArr)

let basket = getBusket()

document.body.append(mainTitle, containerItem, containerBuys, basket)



