import "./style.scss"
// Доработать
const Select = ({ checked }) => {
  return (
    <div className="select" js-select>
      <header className="select--name">
        <p className="name"></p>
        <button type="button" className="arrow"></button>
      </header>
      <div className="select--child">
        {/* @@for(var item of select) {
        <label className="triggers">
          <input 
            type="@@if(context.type){@@type}@@if(!context.type){radio}" 
            name="@@name" 
            value="`+item.value+`" />
          <span className="trigger hide"></span>
          <span className="value">
            `+item.html+`
          </span>
        </label>
    } */}
      </div>
    </div>
  )
}

export default Select
