import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useMediaQuery } from 'react-responsive';

import ServicesArrow from 'assets/icons/serviceArrow';
import InstallationIcon from 'assets/icons/installation';
import WareHouseIcon from 'assets/icons/warehouse';
import LogisticIcon from 'assets/icons/logistic';
import RecycleLogo from 'assets/icons/recycle';
import AuditIcon from 'assets/icons/audit';
import PosIcon from 'assets/icons/pos';
import DisplayIcon from 'assets/icons/storeDisplay';
import RepairIcon from 'assets/icons/repair';

const Services = () => {
  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 1023px)'
  });
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__inner">
          <h2 
            className="services__title"
            data-sal="slide-up"
            data-sal-duration="1500"
            data-sal-delay="100"
            data-sal-easing="ease-out-back"
          >
            Наши Услуги
          </h2>
          <ul className="services__list">
            <li 
              className="services__item"
              data-sal="zoom-in"
              data-sal-duration="1500"
              data-sal-delay="100"
              data-sal-easing="ease-out-back"
            >
              <InstallationIcon className="services__img" />
              <h4 className="services__item-title">
                Монтаж и демонтаж конструкций
              </h4>
              <ServicesArrow className="services__arrow" />
              <div className="services__tooltip">
                <p className="services__tooltip-text">
                  Качественная сборка и закрепление оборудования, а также снятие и замена объектов с торговых точек.
                </p>
                <AnchorLink 
                  to="/#order" 
                  title="Обратная связь" 
                  className="services__tooltip-link" 
                  stripHash
                >
                  Заказать
                </AnchorLink>
              </div>
            </li>

            <li 
              className="services__item"
              data-sal="zoom-in"
              data-sal-duration="1500"
              data-sal-delay="300"
              data-sal-easing="ease-out-back"
            >
              <WareHouseIcon className="services__img" />
              <h4 className="services__item-title">
                Склад
              </h4>
              <ServicesArrow className="services__arrow" />
              <div className="services__tooltip">
                <p className="services__tooltip-text">
                  Грамотная организация хранения товаров
                </p>
                <AnchorLink 
                  to="/#order" 
                  title="Обратная связь" 
                  className="services__tooltip-link" 
                  stripHash
                >
                  Заказать
                </AnchorLink>
              </div>
            </li>

            <li 
              className="services__item"
              data-sal="zoom-in"
              data-sal-duration="1500"
              data-sal-delay="500"
              data-sal-easing="ease-out-back"
            >
              <LogisticIcon className="services__img" />
              <h4 className="services__item-title">
                Логистика
              </h4>
              <ServicesArrow className="services__arrow" />
              <div className="services__tooltip">
                <p className="services__tooltip-text">
                  Своевременная доставка материалов из одной точки в другую по оптимальному маршруту.
                </p>
                <AnchorLink 
                  to="/#order" 
                  title="Обратная связь" 
                  className="services__tooltip-link" 
                  stripHash
                >
                  Заказать
                </AnchorLink>
              </div>
            </li>

            <li 
              className="services__item"
              data-sal="zoom-in"
              data-sal-duration="1500"
              data-sal-delay="700"
              data-sal-easing="ease-out-back"
            >
              <RecycleLogo className="services__img" />
              <h4 className="services__item-title">
                Утилизация POS-материалов
              </h4>
              <ServicesArrow className="services__arrow" />
              <div className="services__tooltip">
                <p className="services__tooltip-text">
                  Безопасное уничтожение материалов, ставших непригодными в торговых точках.
                </p>
                <AnchorLink 
                  to="/#order" 
                  title="Обратная связь" 
                  className="services__tooltip-link" 
                  stripHash
                >
                  Заказать
                </AnchorLink>
              </div>
            </li>

            <li 
              className="services__item"
              data-sal="zoom-in"
              data-sal-duration="1500"
              data-sal-delay="100"
              data-sal-easing="ease-out-back"
            >
              <AuditIcon className="services__img" />
              <h4 className="services__item-title">
                Аудит
              </h4>
              <ServicesArrow className="services__arrow" />
              <div className="services__tooltip">
                <p className="services__tooltip-text">
                  Компетентная оценка эффективности и качественности установки рекламных материалов
                </p>
                <AnchorLink 
                  to="/#order" 
                  title="Обратная связь" 
                  className="services__tooltip-link" 
                  stripHash
                >
                  Заказать
                </AnchorLink>
              </div>
            </li>

            <li 
              className="services__item"
              data-sal="zoom-in"
              data-sal-duration="1500"
              data-sal-delay="300"
              data-sal-easing="ease-out-back"
            >
              <PosIcon className="services__img" />
              <h4 className="services__item-title">
                Размещение POS-материалов
              </h4>
              <ServicesArrow className="services__arrow" />
              <div className="services__tooltip">
                <p className="services__tooltip-text">
                  Корректное расположение материалов, способствующих продвижению бренда
                </p>
                <AnchorLink 
                  to="/#order" 
                  title="Обратная связь" 
                  className="services__tooltip-link" 
                  stripHash
                >
                  Заказать
                </AnchorLink>
              </div>
            </li>

            <li 
              className="services__item"
              data-sal="zoom-in"
              data-sal-duration="1500"
              data-sal-delay="500"
              data-sal-easing="ease-out-back"
            >
              <RepairIcon className="services__img" />
              <h4 className="services__item-title">
                Диагностика и ремонт оборудования
              </h4>
              <ServicesArrow className="services__arrow" />
              <div className="services__tooltip">
                <p className="services__tooltip-text">
                  Квалифицированные мероприятия, направленные на восстановление исправности исходного состояния объекта
                </p>
                <AnchorLink 
                  to="/#order" 
                  title="Обратная связь" 
                  className="services__tooltip-link" 
                  stripHash
                >
                  Заказать
                </AnchorLink>
              </div>
            </li>

            <li 
              className="services__item"
              data-sal="zoom-in"
              data-sal-duration="1500"
              data-sal-delay="700"
              data-sal-easing="ease-out-back"
            >
              <DisplayIcon className="services__img" />
              <h4 className="services__item-title">
                Выкладка продукции
              </h4>
              <ServicesArrow className="services__arrow" />
              <div className="services__tooltip">
                <p className="services__tooltip-text">
                  Привлекательное для покупателей размещение продукции на рекламном оборудовании
                </p>
                <AnchorLink 
                  to="/#order" 
                  title="Обратная связь" 
                  className="services__tooltip-link" 
                  stripHash
                >
                  Заказать
                </AnchorLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default Services;
