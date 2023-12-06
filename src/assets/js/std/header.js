export const header = (function () {
  const selectors = {
    header: ".header",
  }
  const header = document.querySelector(selectors.header)

  if (!header) return

  document.body.style.setProperty("--header-height", `${header.offsetHeight}px`)
})()
