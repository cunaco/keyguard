import React from 'react';
import './App.css';
import one from '../src/assets/headone.png'
import two from '../src/assets/headtwo.png'
import three from '../src/assets/hand.png'
import advantages from '../src/assets/advantages.png'
import four from '../src/assets/aim.png'
import five from '../src/assets/safe.png'
import six from '../src/assets/stonks.png'
import seven from '../src/assets/ufo.png'
import facebook from '../src/assets/facebook.png'
import instagram from '../src/assets/instagram.png'
import vk from '../src/assets/vk.png'
import twitter from '../src/assets/twitter.png'


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
  
function Header() {
    return (
        <header className="header">
            <div className="header-image">
                <img src={one} className="Matchstick"></img>
                <img src={two} className="Woman with Apple"></img>
            </div>
            <div className='header-container'>
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
                <div className="previewhand"><img src={three}></img>
                </div>
            </div>
        </header>
    );
}

function Product() {
    return (
        <>
        <div className="product-header">
        <h1>Выберите продукт</h1>
        <p>Подберите страховой продукт, который наилучшим образом
        подойдёт именно Вам</p>
        </div>
        <section className="product-list">
            <div className="product">
                <h2>ЛИКВИДАЦИЯ</h2>
                <p>от 14.88 ₿</p>
                <button to="/buy.js">Заказать</button>
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
        </>
    );
}

const Advantages = () => {
    return (
      <section className="advantages">
        <img src={advantages}></img>
      </section>
    );
  };

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
                    <option>Продукт</option>
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
          <div className="social-media">
              <a href="#"><img src={facebook}></img></a>
              <a href="#"><img src={twitter}></img></a>
              <a href="#"><img src={instagram}></img></a>
              <a href="#"><img src={vk}></img></a>
          </div>
          <div className="footer-content">
              <p>О компании</p>
              <p>Новости</p>
              <p>Помощь</p>
              <p>Контакты</p>
              <p>© 2024</p>
          </div>
      </footer>
  );
}

export default App;
