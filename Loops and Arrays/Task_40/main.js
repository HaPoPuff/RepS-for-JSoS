// Код данной программы с помощью цикла создает три заголовка h1, h2 и h3. Но в программе допущена логическая ошибка, почему - то заголовки не отображаются в браузере. Попробуйте исправить эту проблему.

for (let index = 1; index <= 6; index++) {
  let title = document.createElement(`h${index}`)
  title.textContent = `Заголовок H${index}`
  document.body.append(title)
}