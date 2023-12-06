export const accordion = (function () {
  const selectors = {
    accordion: ".accordion",
    child: ".accordion--child",
    btn: ".accordion--name",
  }
  const accordiones = document.querySelectorAll(selectors.accordion)

  if (!accordiones.length) return

  const active = "active"

  accordiones.forEach((acc) => {
    const child = acc.querySelector(selectors.child)
    const btn = acc.querySelector(selectors.btn)

    if (!(child || btn)) return

    btn.addEventListener("click", function () {
      acc.classList.toggle(active)
    })
  })
})()
