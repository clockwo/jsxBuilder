import { Head } from "minista"

export default function () {
  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>

      <div className="container">
        <h1>Заголовок 1</h1>
        <h2>Заголовок 2</h2>
        <h3>Заголовок 3</h3>
        <h4>Заголовок 4</h4>
        <h5>Заголовок 5</h5>
        <h6>Заголовок 6</h6>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          deserunt expedita ab officiis! Accusamus ea necessitatibus similique
          obcaecati nemo. Facere fugiat excepturi magni officia nihil.
          Laudantium numquam excepturi aspernatur nihil! <a href="/">Ссылка </a>
        </p>

        <a href="/" className="link--arrow">
          Ссылка <span className="arrow"></span>
        </a>

        <ul>
          <li>Первый пункт</li>
          <li>Второй пункт</li>
          <li>Третий пункт</li>
        </ul>

        <ul className="line">
          <li>
            Первый пункт
            <ul className="line">
              <li>Первый пункт</li>
              <li>Второй пункт</li>
              <li>Третий пункт</li>
            </ul>
          </li>
          <li>Второй пункт</li>
          <li>Третий пункт</li>
        </ul>

        <form action="">
          <input type="text" placeholder="Text" />
          <input type="email" placeholder="Text" />
          <input type="tel" placeholder="Text" />
          <input type="url" placeholder="Text" />
          <input type="password" placeholder="Text" />
          <input type="number" placeholder="Text" />
          <input type="search" placeholder="Text" />
          <input type="datetime-local" placeholder="Text" />
          <input type="date" placeholder="Text" />
          <input type="month" placeholder="Text" />
          <input type="week" placeholder="Text" />
          <input type="time" placeholder="Text" />

          <input type="hidden" placeholder="Text" value="hidden" />
          <textarea placeholder="textarea"></textarea>
          <select name="name">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>

          <input type="submit" placeholder="Text" value="submit" />
          <input type="reset" placeholder="Text" value="reset" />
          <input type="button" placeholder="Text" value="button" />

          <input type="submit" placeholder="Text" value="submit" disabled />
          <input type="reset" placeholder="Text" value="reset" disabled />
          <input type="button" placeholder="Text" value="button" disabled />
          <button>Кнопка</button>
          <a href="/" className="btn">
            Фэйковая кнопка
          </a>
          <button className="btn-border">Кнопка</button>
          <button disabled>Кнопка</button>
        </form>
      </div>
    </>
  )
}
