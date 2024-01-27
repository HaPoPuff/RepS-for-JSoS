// Сейчас цикл этой программы выводит в документ параграфы с числами от 5 до 10. Сделайте так, что бы этот цикл выводил параграфы с числами от 1 до 7.

for (let index = 1; index <= 7; index++) {
  let p = document.createElement("p")
  p.textContent = index
  document.body.append(p)
}