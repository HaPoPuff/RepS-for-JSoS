// Сделайте программу вывода рецепта приготовления пельменей короче:

// Используйте более короткий способ вывода, объединив несколько команд document.write() в одну

// Определите повторяющийся фрагмент кода и создайте для этого фрагмента отдельную функцию с параметрами (аргументами). Вызывайте функцию с параметрами в нужной части программы.

document.write('<div class="container">')
document.write('<h1 class="main-title">Приготовление пельменей</h1>')

let index = 0 // Счетчик этапов

document.write('<ul class="list">')

function cooking(text, className = ""){
    index++
    document.write(`<li class="list__item ${className}">`)
    document.write(`<span class="list__index">${index}</span>`)
    document.write(`<p class="list__text">${text}</p> `)
    document.write(`</li>`)
}

// Этап 1
cooking('Налейте в кастрюлю воду')

// Этап 2
cooking('Достаньте из холодильника пельмени')

// Этап 3
cooking('Забросьте пельмени в горячую воду. ОСТОРОЖНО, НЕ ОБОЖГИТЕСЬ!', 'list__item_warning')

// Этап 4
cooking('Посолите и поперчите по вкусу')

// Этап 5
cooking('Ждите готовности')

// Этап 6
cooking('Приятного аппетита!', 'list__item_finish')


document.write('</ul>')
document.write('</div>')