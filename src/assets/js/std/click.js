export const click = (function () {
  // data-toggle

  ;(function () {
    const btns = document.querySelectorAll("[data-toggle]")

    if (!btns.length) return

    btns.forEach((btn) => {
      const cls = btn.dataset.toggle
      const button = btn.querySelector("[js-btn]")

      btn.addEventListener("click", ({ target }) => {
        if (target.dataset.toggle) {
          btn.classList.toggle(cls)
        }
      })

      if (button) {
        button.addEventListener("click", () => {
          btn.classList.toggle(cls)
        })
      }
    })
  })()
})()
