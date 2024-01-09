// Добавьте возможность ввода данных пользователя с клавиатуры. Так что бы они были выведены в документе по заданному шаблону.

document.write("<h1>Адрес пользователя</h1>")

let userName = prompt('Your Name') // Имя пользователя
let userCity = prompt('Your City') // Город
let userStreet = prompt('Your Street') // Улица
let userHouse = Number(prompt('Your House number')) // Номер дома
let userApartment = Number(prompt('Your Apartment number')) // Номер квартиры

document.write(`<p>Имя: <strong>${userName}</strong></p>
                <p>Город: <strong>${userCity}</strong>
                <p>Улица: <strong>${userStreet}</strong></p>
                <p>Дом: <strong>${userHouse}</strong></p>
                <p>Квартира: <strong>${userApartment}</strong></p>`)