export const modal = (function () {
  const active = "active"

  // MODALS
  ;(function () {
    // Собираю все модалки на странице
    const modals = document.querySelectorAll(".modal")

    // Если модалок нет, тогда дальнейший код нам не нужен
    if (!modals.length) return

    // Перебираем все модалки и даем им действие на клик
    modals.forEach((modal) => {
      modal.addEventListener("click", ({ target }) => {
        // Если клик произошел за пределами тела модалки, или по кнопке закрытия, тогда нужно скрыть модалку
        if (
          target.classList.contains("modal") ||
          target.closest("[data-close]")
        ) {
          modal.classList.remove(active) // Скрываем модалку
        }
      })
    })
  })()

  // data-modal
  ;(function () {
    const btns = document.querySelectorAll("[data-modal]")

    if (!btns.length) return

    btns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault()
        const modal = document.querySelector(
          `[data-modal-name="${btn.dataset.modal}"]`
        )

        modal.classList.add(active) // Показываем модалку
      })
    })
  })()
})()
