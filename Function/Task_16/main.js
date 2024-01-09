let index = 0
let totalWeight = 0

document.write(`<h1>Калькулятор калорийности блюда</h1>`)

document.write(`<ul class = "main-list">`)

function dish(nameFood, calValue, weightValue) {
    totalWeight = totalWeight + (calValue * weightValue)
    document.write(`<li class = "list-item">
        <p>${index})</p>
        <p>${nameFood}, </p>
        <p>Калорийность: ${calValue} ккал, </p>
        <p>Вес: ${weightValue} гр, </p>
        <p>Всего: ${calValue * weightValue} ккал</p>
    </li>`)
}


index++
dish(prompt(`Введите название продукта ${index}: `), Number(prompt(`Введите калорийность продукта ${index}:`)), Number(prompt(`Введите вес продукта ${index} в граммах:`)))

index++
dish(prompt(`Введите название продукта ${index}: `), Number(prompt(`Введите калорийность продукта ${index}:`)), Number(prompt(`Введите вес продукта ${index} в граммах:`)))

index++
dish(prompt(`Введите название продукта ${index}: `), Number(prompt(`Введите калорийность продукта ${index}:`)), Number(prompt(`Введите вес продукта ${index} в граммах:`)))

document.write(`</ul>`)

document.write(`<div class = "footer">Каллорийность блюда: ${totalWeight} ккал</div>`)