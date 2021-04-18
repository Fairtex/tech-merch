import React from "react";
import { useMediaQuery } from 'react-responsive';

const Contacts = () => {
  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 1023px)'
  });
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__inner">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__wrap"> 
          <div className="contacts__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1125.4272743075483!2d73.39053625962029!3d54.96961026004848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafde361dfb43d%3A0x76cbf994f29bec0b!2z0YPQuy4g0KPRh9C10LHQvdCw0Y8sIDE1Miwg0J7QvNGB0LosINCe0LzRgdC60LDRjyDQvtCx0LsuLCA2NDQwNDY!5e0!3m2!1sru!2sru!4v1617554852804!5m2!1sru!2sru" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
          </div>
          <dl className="contacts__info">
            <dt className="contacts__term">Адрес:</dt>
            <dd className="contacts__def">г. Омск, ул.Учебная 152</dd>

            <dt className="contacts__term">Часы работы:</dt>
            <dd className="contacts__def">с 10:00 до 19:00</dd>

            <dt className="contacts__term">Телефоны:</dt>
            <dd className="contacts__def">
              +7 (3812) 53-44-83 <br />
              +7 (3812) 29-15-76 <br />
              +7 (3812) 29-16-05
            </dd>

            <dt className="contacts__term">Электронная почта:</dt>
            <dd className="contacts__def">
              <a href="mailto:btl@ad-omsk.ru">btl@ad-omsk.ru</a> 
              <br />
              <a href="mailto:s.ulanov@ad-omsk.ru">s.ulanov@ad-omsk.ru</a>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  )
};

export default Contacts;
