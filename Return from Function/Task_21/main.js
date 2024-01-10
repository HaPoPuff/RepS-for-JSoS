// Это программа вывода списка животных в приюте. Но программа написана не до конца. Функция getPetInfoLi должна вернуть строку с HTML-элементом li, который является карточкой питомца. Допишите функцию getPetInfoLi так, что бы в документ выводился завершенный результат.

// Используйте в работе полученные вами знания, так же вы можете использовать уже готовые для вас функции в коде: getH2, getSpan, getStrong, getAge

// Пример HTML-кода карточки, который должен генерироваться функцией:
/* <li class="list__item">
  <h2 class="list__title">
    1. Багира
  </h2>
  <span class="list__caption">
    Вес: <strong class="">
      4
    </strong> кг
  </span>
  <span class="list__caption">
    Год рождения: <strong class="">
      2019
    </strong> год
  </span>
  <span class="list__caption">
    Возраст: <strong class="">
      4
    </strong> лет
  </span>
</li> */

// Функция, возвращающая HTML-элемент h2
function getH2(text, className = "") {
  return `<h2 class="${className}">
            ${text}
          </h2>`
}

// Функция, возвращающая HTML-элемент span
function getSpan(text, className = "") {
  return `<span class="${className}">
            ${text}
          </span>`
}

// Функция, возвращающая HTML-элемент strong
function getStrong(text, className = "") {
  return `<strong class="${className}">
            ${text}
          </strong>`
}

// Функция, возвращающая возраст
function getAge(year) {
  return 2023 - year
}

// Функция, возвращающая HTML-элемент Li - карточку питомца
function getPetInfoLi(index, name, weight, year) {
  
  return `<li class = "list__item">
            ${getH2(`${index}. ${name}`, 'list__title')}
            ${getSpan(`Вес: ${getStrong(weight)} кг`, 'list__caption')}
            ${getSpan(`Год рождения: ${getStrong(year)} год`, 'list__caption')}
            ${getSpan(`Возраст: ${getStrong(getAge(year))} лет`, 'list__caption')}
          </li>`
}

let index = 0 // Счетчик

document.write('<div class="container">')
document.write('<h1 class="main-title">Животные в приюте</h1>')

document.write('<ul class="list">')

index++
document.write(getPetInfoLi(index, "Багира", 4, 2019))

index++
document.write(getPetInfoLi(index, "Лорд", 19, 2018))

index++
document.write(getPetInfoLi(index, "Цезарь", 6, 2020))

index++
document.write(getPetInfoLi(index, "Снежок", 4, 2021))

index++
document.write(getPetInfoLi(index, "Бим", 12, 2020))

document.write('</ul>')
document.write('</div>')