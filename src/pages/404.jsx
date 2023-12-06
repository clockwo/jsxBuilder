import { Head } from "minista"
import IMG_404 from "/svg/art/404.svg?url"

export default function () {
  return (
    <>
      <Head>
        <title>Страница не найдена</title>
      </Head>
      <section className="error">
        <img src={IMG_404} alt="" className="logo" />
        <h1 className="title">Страница не найдена</h1>
        <p className="h4 text">Тут какоё-то важный текст</p>
        <div className="btns">
          <button className="btn--border">Назад</button>
          <a href="/" className="btn--border">
            Главная
          </a>
        </div>
      </section>
    </>
  )
}
