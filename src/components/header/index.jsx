import "./style.scss"
import "./menu.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo"></a>
        <nav>
          {/* Здесь может быть ваша навигация */}
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/news">Новости</a>
            </li>
            <li>
              <a href="/about">О нас</a>
            </li>
          </ul>
        </nav>
        <button className="burger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
