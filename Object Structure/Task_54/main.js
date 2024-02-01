// Это знакомое вам из прошлого видео меню, основанное на двух массивах. Измените код программы так, что бы меню строилось на основе одного массива объектов, а не на двух отдельных.

function getOpenBtn() {
  let openBtn = document.createElement("button")
  openBtn.classList.add("open-btn")
  openBtn.textContent = "Открыть меню"

  openBtn.onclick = function () {
    if (menu.classList.contains("open") === true) {
      openBtn.textContent = "Открыть меню"
      menu.classList.remove("open")
    } else {
      openBtn.textContent = "Закрыть меню"
      menu.classList.add("open")
    }
  }

  return openBtn
}

let menuObjArr = [
  {
    text: "Youtube",
    href: "http://youtube.com/@alex_dudukalo",
  },
  {
    text: "Телеграм",
    href: "https://t.me/frontend_du2",
  },
  {
    text: "Discord",
    href: "https://discord.gg/frontend",
  },
  {
    text: "Домашние работы",
    href: "https://dudukalo.notion.site/Javascript-945c674247b44ec9b503a6c1cc97615e"
  }
]

function getMenu(menuArr) {
  let menuList = document.createElement("ul")
  menuList.classList.add("menu")

  for (let i = 0; i < menuArr.length; i++) {
    let item = document.createElement("li")
    item.classList.add("menu__item")

    let link = document.createElement("a")
    link.classList.add("menu__link")
    link.textContent = menuArr[i].text
    link.href = menuArr[i].href

    item.append(link)
    menuList.append(item)
  }

  return menuList
}

let menu = getMenu(menuObjArr)

document.body.append(getOpenBtn(), menu)