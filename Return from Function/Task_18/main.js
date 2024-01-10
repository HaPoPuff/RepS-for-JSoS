// Исправьте код так, что бы в документ был выведен верный результат, а именно возраст, рассчитанный по введенному в prompt() году рождения.

// Функция, которая возвращает возраст по году рождения
function getAge(year) {
  let age = 2024 - year
  return age
}

// Эта функция - продвинутый prompt, которая показывает окно ввода prompt и переводит введенное значение в число. Возвращает результат ввода в виде числа.
function numberPrompt(text) {
  let year = prompt(text)
  let numberYear = Number(year)
  return numberYear
}

let year = numberPrompt("Введите год рождения")
let age = getAge(year)

document.write("<h1>Расчет возраста</h1>")

document.write(`<p>
                  Возраст: <strong>${age}</strong>
                </p>`)