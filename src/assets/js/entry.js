export const initializeEntry = () => {
  const btn = document.querySelector(".button-click") // Предполагается, что это класс
  btn.addEventListener("click", () => {
    alert(5)
  })
}
