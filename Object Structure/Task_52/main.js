// При запуске этого приложение, вам предлагается ввести данные пользователя. После ввода данных, в документе отобразится карточка с данными. Хранить информацию о пользователя в разных переменных не удобно, предлагаю использовать для этого объект.

// Изменить код так, что бы информация о пользователе хранилась в объекте. А функция отрисовки карточки принимала только один параметр - объект. 

let userName = prompt("Введите имя пользователя")
let userYear = Number(prompt("Введите год рождения"))
let userCity = prompt("Введите город")
let userCar = confirm("У пользователя есть машина?")

// Объект пользователя
let user = {
  name: userName,
  year: userYear,
  city: userCity,
  car: userCar
}

function getStrong(text) {
  let strong = document.createElement("strong")
  strong.textContent = text
  return strong
}

function getUserCard(userObj) {
  let card = document.createElement("div")
  let title = document.createElement("h2")
  let yearValue = document.createElement("p")
  let ageValue = document.createElement("p")
  let cityValue = document.createElement("p")
  let carValue = document.createElement("p")

  card.classList.add("card")
  title.classList.add("card__title")
  yearValue.classList.add("card__value")
  ageValue.classList.add("card__value")
  cityValue.classList.add("card__value")
  carValue.classList.add("card__value")

  title.textContent = userObj.name
  yearValue.textContent = "Год рождения: "
  ageValue.textContent = "Возраст: "
  cityValue.textContent = "Город: "
  carValue.textContent = "Машина: "

  yearValue.append(getStrong(userObj.year))
  ageValue.append(getStrong(2023 - userObj.year))
  cityValue.append(getStrong(userObj.city))

  if (userObj.car === true) {
    carValue.append(getStrong("Есть"))
  } else {
    carValue.append(getStrong("Нет"))
  }

  card.append(
    title,
    yearValue,
    ageValue,
    cityValue,
    carValue
  )

  return card
}

let newUserCard = getUserCard(user)

document.body.append(newUserCard)



