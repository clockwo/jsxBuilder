// В файле test.js
export const initializeTest = () => {
  const images = document.querySelectorAll(".gallery__img")

  images.forEach((img) => {
    img.addEventListener("click", () => {
      console.log(1)
    })
  })
}
