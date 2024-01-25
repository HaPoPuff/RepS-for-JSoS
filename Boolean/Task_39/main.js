/* 
Это приложение - мессенджер. В нём вы сможете пообщаться со скромным и немногословным ботом, который может вас приветствовать. Но в будущем мы это исправим. Пока сосредоточимся на доработке кода.

Внимательно изучите программу и проверьте работу мессенджера, запустив его в браузере.

В данный момент в приложении доступна возможность отправлять пустые сообщения без ввода E-mail и текста сообщения. Так быть не должно.

Добавьте валидацию (проверку) ввода данных в этом приложении. 

Проверка E-mail:
- минимальное количество символов в E-mail - 6
- в E-mail обязательно должны присутствовать символы @ и .

Проверка текста сообщения:
- минимальное количество символов в сообщении - 3
- максимальное количество символов - 100

Если пользователь ввёл неверные данные, не соответствующие требованиям ввода, покажите окно alert() с соответствующим текстом.

Это еще не все. Сейчас в каждом сообщении есть кнопка "Удалить", и она не работает. Добавьте удаление сообщения при клике на кнопку, но перед удалением, покажите окно confirm("Вы уверены, что хотите удалить сообщение?") для подтверждения удаления.
*/

// Функция, возвращающая новую кнопку
function getButton(text) {
  let button = document.createElement("button")
  button.classList.add("send-box__btn")
  button.textContent = text
  return button
}

// Функция, возвращающая новый input
function getInput(type, placeholder) {
  let input = document.createElement("input")
  input.classList.add("send-box__inp")
  input.type = type
  input.placeholder = placeholder
  return input
}

// Функция, возвращающая новый textarea
function getTextarea(placeholder) {
  let textarea = document.createElement("textarea")
  textarea.classList.add("send-box__inp")
  textarea.placeholder = placeholder
  return textarea
}

// Функция, возвращающая карточку сообщения
function getMsgCard(email, msg, incoming = false) {
  let msgCard = document.createElement("div")
  msgCard.classList.add("msg-box__card")

  // Если сообщение входящее
  if (incoming === true) {
    // Добавляем класс
    msgCard.classList.add("msg-box__card_incoming")
  }

  let emailSpan = document.createElement("span")
  emailSpan.classList.add("msg-box__email")
  emailSpan.textContent = email

  let msgText = document.createElement("p")
  msgText.classList.add("msg-box__text")
  msgText.textContent = msg

  let removeBtn = document.createElement("button")
  removeBtn.classList.add("msg-box__remove-btn")
  removeBtn.textContent = "Удалить"

  removeBtn.onclick = function () {
    msgCard.remove()
  }

  msgCard.append(emailSpan, msgText, removeBtn)

  return msgCard
}

// Блок для сообщений
let msgBox = document.createElement("div")
msgBox.classList.add("msg-box")

// Блок для отправки сообщения
let sendBox = document.createElement("div")
sendBox.classList.add("send-box")

// Создание текстовых полей и кнопки
let emailInp = getInput("email", "E-mail")
let emailInpError = document.createElement('label')
emailInpError.classList.add('error')
emailInpError.textContent = ''

let msgText = getTextarea("Сообщение")
let msgTextError = document.createElement('label')
msgTextError.classList.add('error')
msgTextError.textContent = ''

let sendBtn = getButton("Отправить сообщение")

sendBox.append(emailInp, emailInpError, msgText, msgTextError, sendBtn) // Добавление в sendBox

// Отправка сообщения
sendBtn.onclick = function () {
  let emailValue = emailInp.value
  let msgTextValue = msgText.value


  emailInpError.classList.remove('hide')
  if (emailValue.length < 6) {
    emailInpError.classList.add('hide')
    emailInpError.textContent = 'VERY SHORT EMAIL'
    emailValue.remove()
  }

  emailInpError.classList.remove('hide')
  if (emailValue.includes('@') === false || emailValue.includes('.') === false) {
    emailInpError.classList.add('hide')
    emailInpError.textContent = 'NOT INCLUDES "@" AND "."'
    emailValue.remove()
  }

  msgTextError.classList.remove('hide')
  if (msgTextValue.length < 3) {
    msgTextError.classList.add('hide')
    msgTextError.textContent = 'VERY SHORT TEXT'
    msgTextValue.remove()
  }

  msgTextError.classList.remove('hide')
  if (msgTextValue.length > 100) {
    msgTextError.classList.add('hide')
    msgTextError.textContent = 'VERY LONG TEXT'
    msgTextValue.remove()
  }

  // let validationError = false // Флаг ошибки

  // // Сброс текста ошибок
  // emailError.textContent = ""
  // msgTextError.textContent = ""

  // // Проверки
  // if (emailValue.includes("@") === false || emailValue.includes(".") === false) {
  //   emailError.textContent = "E-mail должен содержать символы @ и ."
  //   validationError = true
  // }

  // if (emailValue.length < 6) {
  //   emailError.textContent = "Минимальное кол-во символов в E-mail 6"
  //   validationError = true
  // }

  // if (msgTextValue.length < 3) {
  //   msgTextError.textContent = "Минимальное кол-во символов в сообщении 3"
  //   validationError = true
  // }

  // if (msgTextValue.length > 100) {
  //   msgTextError.textContent = "Максимальное кол-во символов в сообщении 100"
  //   validationError = true
  // }

  // // Если ошибки есть, завершаем выполнение функции клика
  // if (validationError === true) {
  //   return
  // }

  // Отправка сообщения
  let newMsgCard = getMsgCard(emailValue, msgTextValue)
  msgBox.prepend(newMsgCard) // Добавляем в начало msgBox

  // Ответ от бота
  let botEmail = "bot@kurs.js"
  let botText = `Привет, ${emailValue}! Я Бот и я умею отвечать только приветственным сообщением. Но думаю скоро смогу научиться делать намного больше.`

  let botMsgCard = getMsgCard(botEmail, botText, true)
  msgBox.prepend(botMsgCard) // Добавляем в начало msgBox

  // Очищаем текст сообщения
  msgText.value = ""
}

document.body.append(sendBox, msgBox)