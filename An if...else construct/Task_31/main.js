// Данное приложение рассчитывает общую стоимость товара. Вводите в prompt(): название товара, количество и стоимость. После ввода всех значений, в документе создается карточка с названием товара и итоговой стоимостью.

// Данная программа применяет скидку к общей стоимости покупки при следующем условии: суммарная стоимость >= 3000 рублей и количество товара > 3 штук.

// Рамка карточки товара меняет свой цвет на зеленый в случае применения скидки, давая сигнал пользователю приложения о том, что была применена скидка.

// Внимательно изучите код и попробуйте сделать его короче.

// Подсказка: обратите внимание на конструкции if и условия в них.

// Функция возвращает карточку названия и суммарной стоимости товара
function getProductCard(product, totalPrice, className = "") {
  let productCard = document.createElement("h1")

  // Если className равен "discount", меняем стиль карточки, что бы показать примененную скидку
  if (className === "discount") {
    productCard.classList.add("product-card")
    productCard.classList.add("discount")
  } else {
    productCard.classList.add("product-card")
  }

  productCard.textContent = `Общая стоимость "${product}" - ${totalPrice} рублей`
  return productCard
}

// Ввод данных из prompt()
let product = prompt("Введите название товара")
let count = Number(prompt("Введите кол-во товара в корзине"))
let price = Number(prompt("Введите стоимость товара"))

let totalPrice = count * price // Расчет суммарной стоимости покупки

// Проверка условий скидки
if (totalPrice >= 3000 && count > 3) {
  
    // Применяем скидку 500 рублей
    let discountPrice = totalPrice - 500

    // Создаем карточку
    let card = getProductCard(product, discountPrice, "discount")
    document.body.append(card)

} else {
  // Создаем карточку
  let card = getProductCard(product, totalPrice)
  document.body.append(card)
}