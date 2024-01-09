let index = 0

document.write(`<h1>Доход Водителей</h1>`)

document.write(`<div class = "main-container">`)

// first driver
index++
let driverName1 = prompt(`Введите имя водителя ${index}`)
let driverSecondName1 = prompt(`Введите фамилию водителя ${index}`)
let valueMonth1 = Number(prompt(`Введите кол-во поездок ${driverName1} ${driverSecondName1} в этом месяце`))
let salaryMonth1 = Number(prompt(`Введите доход ${driverName1} ${driverSecondName1} в этом месяце`))
let avarageSalary1 = salaryMonth1 / valueMonth1

document.write(`<div class = "main-driver">
<p>${index}</p>
<p>Водитель: <b>${driverName1} ${driverSecondName1}</b></p>
<p>Кол-во поездок: ${valueMonth1}</p>
<p>Доход: ${salaryMonth1}</p>
<p>Средняя стоимость поездки: ${avarageSalary1}</p>
</div>`)

// second driver
index++
let driverName2 = prompt(`Введите имя водителя ${index}`)
let driverSecondName2 = prompt(`Введите фамилию водителя ${index}`)
let valueMonth2 = Number(prompt(`Введите кол-во поездок ${driverName2} ${driverSecondName2} в этом месяце`))
let salaryMonth2 = Number(prompt(`Введите доход ${driverName2} ${driverSecondName2} в этом месяце`))
let avarageSalary2 = salaryMonth2 / valueMonth2

document.write(`<div class = "main-driver">
<p>${index}</p>
<p>Водитель: ${driverName2} ${driverSecondName2}</p>
<p>Кол-во поездок: ${valueMonth2}</p>
<p>Доход: ${salaryMonth2}</p>
<p>Средняя стоимость поездки: ${avarageSalary2}</p>
</div>`)

// third driver
index++
let driverName3 = prompt(`Введите имя водителя ${index}`)
let driverSecondName3 = prompt(`Введите фамилию водителя ${index}`)
let valueMonth3 = Number(prompt(`Введите кол-во поездок ${driverName3} ${driverSecondName3} в этом месяце`))
let salaryMonth3 = Number(prompt(`Введите доход ${driverName3} ${driverSecondName3} в этом месяце`))
let avarageSalary3 = salaryMonth3 / valueMonth3

document.write(`<div class = "main-driver">
<p>${index}</p>
<p>Водитель: ${driverName3} ${driverSecondName3}</p>
<p>Кол-во поездок: ${valueMonth3}</p>
<p>Доход: ${salaryMonth3}</p>
<p>Средняя стоимость поездки: ${avarageSalary3}</p>
</div>`)

document.write(`</div>`)


// Total avarage

let totalValue = valueMonth1 + valueMonth2 + valueMonth3
let totalSalary = salaryMonth1 + salaryMonth2 + salaryMonth3
let totalAvarageSalary = avarageSalary1 + avarageSalary2 + avarageSalary3

document.write(`<div class = "main-total">
<h2>Средние показатели всех водителей</h2>
<p>Среднее кол-во поездок: ${totalValue / index}</p>
<p>Средний доход: ${totalSalary / index}</p>
<p>Средння стоимость поездки: ${totalAvarageSalary / index}</p>
</div>`)
