let index = 0

document.write(`<h1>Корзина</h1>
<div class = "main-list">`)

// Товар 1
index = index + 1
let product1 = "iPhone 14" // Название товара
let productDesc1 = "Базовая модель флагманской линейки смартфонов Apple 2023-го года." // Описание товара
let productPrice1 = 9000 // Стоимость товара

document.write(`<div class = "list-item">
<h4>${index}</h4>
<h2>${product1}</h2>
<p>${productDesc1}</p>
<h3>${productPrice1} руб</h3>
</div>`)

// Товар 2
index = index + 1
let product2 = "Чехол для iPhone 14" // Название товара
let productDesc2 = "Защитный чехол для iPhone 14 - выполнен из качественного пластика." // Описание товара
let productPrice2 = 700 // Стоимость товара

document.write(`<div class = "list-item">
<h4>${index}</h4>
<h2>${product2}</h2>
<p>${productDesc2}</p>
<h3>${productPrice2} руб</h3>
</div>`)


// Товар 3
index = index + 1
let product3 = "Защитное стекло" // Название товара
let productDesc3 = "Прочное стекло защищает экран смартфона от царапин и повреждений." // Описание товара
let productPrice3 = 1200 // Стоимость товара

document.write(`<div class = "list-item">
<h4>${index}</h4>
<h2>${product3}</h2>
<p>${productDesc3}</p>
<h3>${productPrice3} руб</h3>
</div>`)

document.write(`</div>`)

// Стоимость доставки
let deliveryPrice = 400 //
let totalPrice = productPrice1 + productPrice2 + productPrice3 + deliveryPrice

document.write(`<div class = "main-total">
<p>Стоимость доставки: ${deliveryPrice} руб</p>
<p>Общая стоимость: ${totalPrice} руб</p>

</div>`)








