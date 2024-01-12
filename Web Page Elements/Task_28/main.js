
function addButton(text, className = "") {
    let btn = document.createElement("button")
    btn.textContent = text
    btn.classList.add(className)
    return btn
}

function addNewItem(text) {
    let list = document.createElement("div")
    list.classList.add("container-item")

    let desc = document.createElement("p")
    desc.textContent = text
    desc.classList.add("item-text")

    let doneBtn = addButton('Выполнено', 'btn')
    let changeBtn = addButton('Изменить', 'btn')
    let deleteBtn = addButton('Удалить', 'btn')

    doneBtn.onclick = function () {
        doneBtn.remove()
        changeBtn.remove()
        list.classList.add("done")
        desc.classList.add("done")
        deleteBtn.classList.add("delete-btn")
        deleteBtn.classList.remove("btn")

    }

    changeBtn.onclick = function () {
        let newDesc = prompt(`Изменить ${desc.textContent} на: `)
        desc.textContent = newDesc
    }

    deleteBtn.onclick = function () {
        list.remove()
    }

    container.append(list)
    list.append(desc, doneBtn, changeBtn, deleteBtn)

    return list
}

let addBox = document.createElement("div")
addBox.classList.add("top-container")

let addInp = document.createElement("input")
addInp.classList.add("top-input")
addInp.type = "text"
addInp.placeholder = "Введите задачу"

let addBtn = addButton('Создать задачу', 'top-btn')


document.body.append(addBox)
addBox.append(addInp, addBtn)

let container = document.createElement("div")
container.classList.add("main-container")

document.body.append(container)

addBtn.onclick = function () {
    addNewItem(addInp.value)
    addInp.value = ""
}




