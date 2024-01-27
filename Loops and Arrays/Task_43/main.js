// Эта программа создает в документе карточки. Сейчас карточкам добавляться два класса:  blue-card и green-card. Сделайте так, что бы только пятой карточке добавлялся класс green-card и только она была зеленой.

for (let i = 0; i < 7; i++) {
  let card = document.createElement("div")
  card.classList.add("blue-card", "green-card")

  if (i === 4) {
    card.classList.remove("blue-card")
  } else {
    card.classList.remove("green-card")
  }

  document.body.append(card)
}



