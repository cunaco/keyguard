import React from 'react';
import './App.css';
import one from '../src/assets/headone.png'
import two from '../src/assets/headtwo.png'
import three from '../src/assets/hand.png'
import four from '../src/assets/aim.png'
import five from '../src/assets/safe.png'
import six from '../src/assets/stonks.png'
import seven from '../src/assets/ufo.png'

function Header() {
    return (
        <header className="header">
            <div className="header-image">
                <img src={one} alt="Matchstick" />
                <img src={two} alt="Woman with Apple" />
            </div>
            <div className="header-text">
                <h1>НЕУЛОВИМЫЕ РЕШЕНИЯ</h1>
                <p>Специалисты группы компаний “FORSAKEN” являются 
                первыми на рынке анонимных услуг. Мы первыми реализуем 
                ваши самые смелые фантазии, разрешаем самые 
                безысходные случаи, к нам обращаются с полной 
                уверенностью получить желаемый результат.
                </p>
                <button>Подробнее</button>
            </div>
            <div className="previewhand">
            </div>
        </header>
    );
}

function Product() {
    return (
        <section className="product-list">
            <div className="product">
                <h2>ЛИКВИДАЦИЯ</h2>
                <p>от 14.88 ₿</p>
                <button>Заказать</button>
            </div>
            <div className="product">
                <h2>ТРАНСПОРТ</h2>
                <p>от 1.12 ₿</p>
                <button>Заказать</button>
            </div>
            <div className="product">
                <h2>ХРАНЕНИЕ</h2>
                <p>от 2.28 ₿</p>
                <button>Заказать</button>
            </div>
            <div className="product">
                <h2>КОНСУЛЬТАЦИЯ</h2>
                <p>БЕСПЛАТНО</p>
                <button>Заказать</button>
            </div>
        </section>
    );
}

function Advantages() {
    return (
        <section className="advantages">
            <h2>Почему доверяют</h2>
            <ul>
                <li>Полная ответственность</li>
                <li>Результат</li>
                <li>Скидки постоянным клиентам</li>
                <li>Анонимность</li>
            </ul>
        </section>
    );
}

function ContactForm() {
    return (
        <section className="contact-form">
            <h2>Закажите прямо сейчас</h2>
            <form>
                <input type="text" placeholder="Ваше имя" />
                <input type="text" placeholder="+7 (000) 000-0000" />
                <input type="email" placeholder="E-mail" />
                <select>
                    <option>Консультация</option>
                    <option>Страхование</option>
                    <option>Продукт</option>
                </select>
                <button type="submit">Заказать услугу</button>
                <p>Оставляя заявку, вы соглашаетесь на обработку персональных данных условиями бронирования счёта</p>
            </form>
        </section>
    );
}

function Reviews() {
    return (
        <section className="reviews">
            <h2>Отзывы</h2>
            <blockquote>Это супер крутая инструкция и вы делаете очень полезную вещь. Спасибо 😊</blockquote>
            <blockquote>Работа с сервисом приносит радость, потому что высочайший профессионализм, удобство, оперативность, и просто приятные люди!</blockquote>
        </section>
    );
}

function Achievements() {
  return (
      <section className="achievements">
          <h2>НАШИ ДОСТИЖЕНИЯ</h2>
          <ul>
              <li>+100% ЭФФЕКТИВНОСТИ В МЕСЯЦ</li>
              <li>99% УСПЕШНЫХ ТРАНСПОРТИРОВОК</li>
              <li>ХРАНЕНИЕ ЦЕННОСТЕЙ В ТРИЛЛИОН ₿</li>
              <li>СТАТУС “ПРИЗРАК” В СООБЩЕСТВЕ</li>
          </ul>
      </section>
  );
}

function Footer() {
  return (
      <footer className="footer">
          <div className="footer-content">
              <p>О компании</p>
              <p>Новости</p>
              <p>Помощь</p>
              <p>Контакты</p>
              <p>© 2024</p>
          </div>
          <div className="social-media">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">VK</a>
          </div>
      </footer>
  );
}



function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Advantages />
      <ContactForm />
      <Reviews />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
