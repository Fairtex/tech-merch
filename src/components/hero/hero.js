import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from 'gatsby-background-image';
import { AnchorLink } from "gatsby-plugin-anchor-links";

import ScrewDriver from 'assets/icons/screwdriver';
import ToolsIcon from 'assets/icons/tools';
import ProfLogo from 'assets/icons/professinal';

const Hero = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero-bg.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      {...bgImage}
      preserveStackingContext
      className="hero"
    >
      <div className="container">
        <div className="hero__inner">
          <div 
            className="hero__description"
            data-sal="slide-up"
            data-sal-duration="1500"
            data-sal-delay="100"
            data-sal-easing="ease-out-back"
          >
            <p className="hero__title">
              Гарантия надежной работы
            </p>
            <h1 className="hero__subtitle">
              Установка и размещение рекламных материалов
            </h1>
            <AnchorLink 
              to="/#order" 
              title="Сделать заказ" 
              className="hero__link"
              stripHash
            >
              Сделать заказ
            </AnchorLink>
          </div>
          <ul 
            className="features"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="500"
            data-sal-easing="ease-out-back"
          >
            <li className="features__item">
              <ScrewDriver className="features__icon"/>
              <div className="features__info">
                <h3 className="features__title">Качество</h3>
                <p className="features__text">
                  Мы следим за чистотой и температурой наших помещений, чтобы Ваши рекламные материалы были защищены от любых повреждений. 
                </p>
              </div>
            </li>
            <li className="features__item">
              <ToolsIcon className="features__icon"/>
              <div className="features__info">
                <h3 className="features__title">Опыт</h3>
                <p className="features__text">
                  За долгие годы работы мы набрали в свой штат специализированных сотрудников, которые всегда готовы доказать делом преимущество нашего агентства от остальных.
                </p>
              </div>
            </li>
            <li className="features__item">
              <ProfLogo className="features__icon"/>
              <div className="features__info">
                <h3 className="features__title">Профессионализм</h3>
                <p className="features__text">
                  Каждый наш клиент получает персонального менеджера, который всегда готов быстро ответить на все возникающие вопросы и оперативно решить любые проблемы.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero;
