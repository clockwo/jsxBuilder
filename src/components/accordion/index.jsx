import "./style.scss"

const Accordion = ({ props }) => {
  return (
    <For each="item" in={props}>
      <div className="accordion">
        <header className="accordion--name">
          <p className="name">{item.faq}</p>
          <button className="arrow"></button>
        </header>
        <div className="accordion--child">
          <div className="contant">
            <p>
              {!item.text ? (
                <>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur, eos alias. Iure, perferendis cum optio, nesciunt
                  totam veniam velit expedita aperiam pariatur earum enim ad
                  corrupti facilis, accusantium libero aut?
                </>
              ) : (
                item.text
              )}
            </p>
          </div>
        </div>
      </div>
    </For>
  )
}

export default Accordion
