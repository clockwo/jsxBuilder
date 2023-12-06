import "./style.scss"

export default ({ text }) => {
  return (
    <div className="breadcrumbs">
      <ul className="bc-list">
        <li>
          <a href="/">Главная</a>
        </li>
        {text.slice(0, -1).map((item) => {
          return (
            <li>
              <a href="/">{item}</a>
            </li>
          )
        })}
        <li>{text.slice(-1)[0]}</li>
      </ul>
    </div>
  )
}
