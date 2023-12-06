export const formNumber = (function () {
  const selectors = {
    form: ".form--number",
    input: "input",
    value: ".number",
    btn: "[data-step]",
  }

  const forms = document.querySelectorAll(selectors.form)

  if (!forms.length) return

  const action = {
    up: (num) => {
      return ++num
    },
    down: (num) => {
      return --num
    },
  }

  forms.forEach((form) => {
    const value = form.querySelector(selectors.value)
    const input = form.querySelector(selectors.input)

    form.addEventListener("click", ({ target }) => {
      const btn = target.closest(selectors.btn)

      if (!btn) return

      let num = Number(value.textContent)

      num = action[btn.dataset.step](num)

      value.textContent = num.toString().padStart(2, "0")

      if (input) {
        input.value = num
      }
    })
  })
})()
