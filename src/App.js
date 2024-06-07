import React from 'react';
import './App.css';
import one from '../src/assets/headone.png'
import two from '../src/assets/headtwo.png'
import three from '../src/assets/hand.png'

const Header = () => (
  <div className="header">
    <img src={one}></img>
    <img src={two}></img>
  </div>
);

const Preview = () => (
  <div className="preview">
  <div>
  <h1>Специалисты группы компаний “FORSAKEN”</h1>
  <p>Мы первыми реализуем ваши самые смелые фантазии, разрешаем самые безысходные случаи, к нам обращаются с полной уверенностью получить желаемый результат.</p>
  <button>Подробнее</button>
  </div>
  <div className="previewhand">
  <img src={three}></img>
  </div>
  </div>
);

const Product = ({name, price}) => (
  <div className="product">
    <h1>Выберете продукт</h1>
    <h2>{name}</h2>
    <p>от {price} ₿</p>
    <button>Заказать</button>
  </div>
);

const ProductList = () => {
  const products = [
    { name: 'ЛИКВИДАЦИЯ', price: '14.88', image: '/assets/liquidation.png' },
    { name: 'ТРАНСПОРТ', price: '1.12', image: '/assets/transport.png' },
    { name: 'ХРАНЕНИЕ', price: '2.28', image: '/assets/storage.png' },
    { name: 'КОНСУЛЬТАЦИЯ', price: 'БЕСПЛАТНО', image: '/assets/consultation.png' },
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.name} name={product.name} price={product.price} image={product.image} />
      ))}
    </div>
  );
};

const Advantages = () => (
  <section className="advantages">
    <h2>Преимущества</h2>
    <ul>
      <li>Более 10 000 клиентов доверили нашему агентству выполнение самых сложных задач</li>
      <li>Полная ответственность: что бы не произошло - просто позвоните нам и мы подскажем выход</li>
      <li>Гарантируем положительный исход даже по самым сложным вопросам</li>
      <li>Накопительная система скидок. Получите выгоду до 80%</li>
      <li>Клиент никогда не будет обнаружен</li>
    </ul>
  </section>
);

const ContactForm = () => (
  <form className="contact-form">
    <h2>Закажите прямо сейчас</h2>
    <input type="text" placeholder="Ваше имя" />
    <input type="tel" placeholder="+7 (000) 000-0000" />
    <input type="email" placeholder="E-mail" />
    <textarea placeholder="Какая услуга вас интересует"></textarea>
    <button type="submit">Заказать услугу</button>
    <p>Оставляя заявку, вы соглашаетесь на обработку персональных данных условиями бронирования счёта</p>
  </form>
);

const Reviews = () => (
  <section className="reviews">
    <h2>Отзывы</h2>
    <blockquote>
      <p>Это супер крутая инструкция и вы делаете очень полезную вещь</p>
      <footer>— Анонимный клиент</footer>
    </blockquote>
    <blockquote>
      <p>Работа с сервисом приносит радость, потому что высочайший профессионализм, удобство, оперативность, и просто приятные люди!</p>
      <footer>— Анонимный клиент</footer>
    </blockquote>
  </section>
);


function App() {
  return (
    <div className="App">
      <Header />
      <Preview />
      <ProductList />
      <Advantages />
      <ContactForm />
      <Reviews />
    </div>
  );
}

export default App;

