import "./style.scss"

const Trigger = ({ type, name, text }) => {
  return (
    <label className="triggers">
      <input type="{type}" name="{name}" />
      <span className="trigger"></span>
      <span className="value">{text}</span>
    </label>
  )
}

Trigger.defaultProps = {
  type: "radio",
  name: "name",
  text: "Text",
}

export default Trigger
