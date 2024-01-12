let count = 0 

let container = document.createElement("div")
container.classList.add("container")

let header = document.createElement("h1")
header.classList.add("main-title")
header.textContent = "Достижения в изучении Javascript"

let list = document.createElement("ul")
list.classList.add("list")

function createBlockElement(desc) {
  count++
  let block = document.createElement("li")
  block.classList.add("list__item")
  
  let counter = document.createElement("span")
  counter.classList.add("list__index")
  counter.textContent = `${count}`

  let text = document.createElement("p")
  text.classList.add("list__desc")
  text.textContent = `${desc}`

  block.append(counter, text)

  return block
}

document.body.append(container)
container.append(header, list)
list.append(createBlockElement('Знаю, что такое вывод и ввод информации'))
list.append(createBlockElement('Знаю о способах вывода информации'))
list.append(createBlockElement('Знаю, что такое числа, строки, и переменные'))
list.append(createBlockElement('Умею создавать функции и пользоваться ими'))
list.append(createBlockElement('Учусь создавать HTML - элементы с помощью встроенных функций'))