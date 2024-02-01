// В этой программе из объекта в документ выводится информация о товаре. Но в коде есть синтаксически ошибки. Попробуйте их справить.

// Объект продукта
let product = {
  title: "Сыр",
  weight: 200,
  price: 420,
  brand: "Вкуснотеевский",
  date: "19.06.2023"
}

// Функция, возвращающая параграф с описанием
function getInfo(caption, value) {
  let p = document.createElement("p")
  p.textContent = `${caption}: ${value}`
  return p
}

let titleInfo = getInfo("Товар", product.title)
let weightInfo = getInfo("Вес", product.weight)
let priceInfo = getInfo("Цена", product.price)
let brandInfo = getInfo("Бренд", product.brand)
let dateInfo = getInfo("Дата изготовления", product.date)

document.body.append(titleInfo, weightInfo, priceInfo, brandInfo, dateInfo)