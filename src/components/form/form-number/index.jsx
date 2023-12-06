import "./style.scss"

const FormNumber = ({ name }) => {
  return (
    <div className="form--number">
      {name && <input type="text" name="{name}" className="hide" hidden />}
      <button type="button" className="btn--num" data-step="down"></button>
      <output className="number">01</output>
      <button type="button" className="btn--num" data-step="up"></button>
    </div>
  )
}

export default FormNumber
