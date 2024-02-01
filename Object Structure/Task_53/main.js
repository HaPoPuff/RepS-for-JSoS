// Данная программа создает выпадающих список select на основе массива объектов, переданного в функцию getSelect(). Но в коде есть ошибки. Попробуйте их исправить.


// Функция, возвращая select
function getSelect(optionsArr) {
  let select = document.createElement("select")
  for (let i = 0; i < optionsArr.length; i++) {
    let option = document.createElement("option")
    option.textContent = optionsArr[i].text
    option.value = optionsArr[i].value
    select.append(option)
  }
  return select
}

// Массив объектов хобби
let hobbyArr = [
  {
    text: "Спорт",
    value: "sport"
  },
  {
    text: "Рисование",
    value: "drawing"
  },
  {
    text: "Музыка",
    value: "music"
  },
  {
    text: "Игры",
    value: "games"
  },
  {
    text: "Программирование",
    value: "programming"
  }
]

let hobbySelect = getSelect(hobbyArr) // Создаем select

document.body.append(hobbySelect)