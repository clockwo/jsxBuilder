export const select = (function () {
  const selectors = {
    select: "[js-select]",
    btn: ".select--name",
    name: ".select--name .name",
    radio: ".select--child input[type='radio']",
    checkbox: ".select--child input[type='checkbox']",
    value: ".value",
  }

  const actions = {
    select: "checked",
    active: "active",
  }

  const selects = document.querySelectorAll(selectors.select)

  if (!selects.length) return

  selects.forEach((select) => {
    const btn = select.querySelector(selectors.btn)
    const name = select.querySelector(selectors.name)

    if (!name) return

    btn.addEventListener("click", () => {
      const active = document.querySelector(
        `${selectors.select}.${actions.active}`
      )

      if (active && active !== select) {
        active.classList.remove(actions.active)
      }

      select.classList.toggle(actions.active)
    })

    // TEMP
    select.addEventListener("click", ({ pageX, pageY, target }) => {
      const x =
        pageX > select.offsetWidth + select.offsetLeft ||
        pageX < select.offsetLeft
      const y =
        pageY > select.offsetHeight + select.offsetTop ||
        pageY < select.offsetTop
      const panel = target == select

      if (panel && (x || y)) {
        select.classList.remove(actions.active)
      }
    })

    // Radios
    ;(function () {
      const radios = select.querySelectorAll(selectors.radio)

      if (!radios.length) return

      radios.forEach((radio) => {
        radio.addEventListener("change", () => {
          const value = radio.parentElement.querySelector(selectors.value)

          if (!value) return

          const replays = document.querySelectorAll(
            `[type="radio"][name="${radio.name}"]`
          )

          if (replays.length) {
            replays.forEach((item) => {
              const acc = item.closest(selectors.select)

              if (acc && acc.classList.contains(actions.select)) {
                acc.classList.remove(actions.select)
              }
            })
          }

          name.innerHTML = value.innerHTML
          if (select.dataset.checked != "false") {
            select.classList.add(actions.select)
          }
          select.classList.remove(actions.active)
        })
      })
      radios[0].click()
    })()

    // Checkbox
    ;(function () {
      const checkbox = select.querySelectorAll(selectors.checkbox)
      let result = []

      if (!checkbox.length) return

      checkbox.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          const value = checkbox.parentElement.querySelector(selectors.value)

          if (!value) return

          const item = value.innerHTML

          if (checkbox.checked) {
            if (!result.includes(item)) {
              result.push(value.innerHTML)
            }
          } else {
            if (result.includes(item)) {
              result = result.filter((el) => el !== value.innerHTML)
            }
          }

          name.innerHTML = ""

          result.forEach((el) => {
            name.innerHTML += el
          })

          if (select.dataset.checked != "false") {
            select.classList.add(actions.select)
          }
          select.classList.remove(actions.active)
        })
      })
    })()
  })
})()
