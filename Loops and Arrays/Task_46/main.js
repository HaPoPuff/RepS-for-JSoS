// В этой программе существует функция, создающая выпадающий список - select. Но есть проблема. В выпадающем списке создаётся только один элемент - option, хотя в функции есть цикл, который обрабатывает переданный массив. Исправьте код так, что бы функция создавала выпадающий список на основе массива правильно, с полным списком элементов - option.

function getSelect(optionsArray) {
  let select = document.createElement("select")
  for (let i = 0; i < optionsArray.length; i++) {
    let option = document.createElement("option")
    option.textContent = optionsArray[i]
    option.value = optionsArray[i]
    select.append(option)
  }
  return select
}

let cityArray = ["Москва", "Волгоград", "Омск", "Ростов", "Екатеринбург"]
let citySelect = getSelect(cityArray)

document.body.append(citySelect)