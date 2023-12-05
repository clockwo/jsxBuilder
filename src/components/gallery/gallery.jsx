import "./gallery.scss"

export default ({ images }) => {
  return (
    <div className="gallery">
      {images.map((img, index) => {
        return <img className="gallery__img" key={index} src={img} />
      })}
    </div>
  )
}
