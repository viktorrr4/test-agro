document.addEventListener('DOMContentLoaded', () => {

  // add + to submenu item
  let navSubmenu = document.querySelectorAll('.nav__submenu')
  navSubmenu.forEach(item => {
    item.parentNode.firstChild.nextSibling.classList.add('nav__arrow')
  })

  // set event handler on + (<1000px)
  if (screen.width < 1000) {
    let navArrow = document.querySelectorAll('.nav__arrow')
    navArrow.forEach(item => {
      item.addEventListener('click', function () {
        this.nextSibling.nextSibling.classList.toggle('open__submenu')
      })
    })
  }

  // toggle nav to mobile (<1000px)
  let siteNav = document.querySelector('.site__nav')
  let mobileBtn = document.querySelector('.mobile__btn')
  mobileBtn.addEventListener('click', function () {
    this.classList.toggle('active__btn')
    siteNav.classList.toggle('open__nav')
  })

  //form handler
  let form = document.querySelector('.contacts__form')
  let formResult = document.querySelector('.form__result')

  form.addEventListener('submit', event => {
    let e = event || window.event
    e.preventDefault()

    let url = 'form-handler.php'
    let data = {
      username: form.elements["user__name"].value,
      usertel: form.elements["user__tel"].value,
      usermail: form.elements["user__mail"].value,
      textarea: form.elements["user__question"].value,
    }

    let fetchHandler = fetch(url, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => response.text())
      .then(data => {
        formResult.innerHTML = data
      })



  })

}) // DOMContentLoaded