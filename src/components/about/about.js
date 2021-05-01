import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useMediaQuery } from 'react-responsive';

import ArrowIcon from 'assets/icons/arrow';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomButtonGroup = ({
  next,
  previous,
  ...rest
}) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  });
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalItems - 1;
  return (
    <>
      {isDesktop ? (
        <div className="about__slider-btn-group">
          <button
            className="about__slider-btn about__slider-btn--prev"
            disabled={isFirst}
            onClick={() => previous()}
          >
            <ArrowIcon className="about__slider-icon"/>
          </button>
          <button
            className="about__slider-btn about__slider-btn--next"
            disabled={isLast}
            onClick={() => next()}
          >
            <ArrowIcon className="about__slider-icon"/>
          </button>
        </div>
        ) : (null)
      }
    </>
  );
};

const About = () => {
  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 1023px)'
  });
  return (
    <section 
      className="about" 
      id="about"
    >
      <div className="about__inner">
        <h2 
          className="about__title"
          data-sal="slide-up"
          data-sal-duration="1500"
          data-sal-delay="100"
          data-sal-easing="ease-out-back"
        >
          О компании
        </h2>
        <Carousel
            swipeable={isMobileOrTablet}
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            containerClass="about__slider-wrap"
            sliderClass="about__slider"
            itemClass="about__slider-item"
            customButtonGroup={<CustomButtonGroup />}
          >
            <div className="slide">
              <div className="slide__info">
                <h3 className="slide__title">
                  О работе
                </h3>
                <p className="slide__text">
                  Мы оказываем комплекс услуг по доставке и установке рекламных материалов и торгового оборудования, 
                  чтобы своевременно и качественно представить бренды наших клиентов в различных торговых точках.
                </p>
              </div>
              <div className="slide__img-wrap">
                <StaticImage
                  src="../../assets/images/montage.jpg"
                  alt="Торговое оборудование"
                  placeholder="blurred"
                  layout="fullWidth"
                  quality={90}
                  style={isMobileOrTablet ? {} : 
                    {
                      maxHeight: 750,
                      minHeight: 750,
                    }}
                  objectFit="fill"
                />
              </div>
            </div>
            <div className="slide">
              <div className="slide__info">
                <h3 className="slide__title">
                  О менеджерах
                </h3>
                <p className="slide__text">
                  За 17 лет работы мы успешно провели более 300 проектов в сфере мерчандайзинга для крупнейших 
                  российских компаний. Мы стремимся к тому, чтобы каждый наш клиент остался доволен нашей работой, 
                  а мы могли ею гордиться. Мы будем рады видеть Вас среди наших клиентов и партнеров!
                </p>
              </div>
              <div className="slide__img-wrap">
                <StaticImage
                  src="../../assets/images/agency.jpg"
                  alt="Наша команда менеджеров"
                  placeholder="blurred"
                  layout="fullWidth"
                  quality={90}
                  style={isMobileOrTablet ? {} : 
                    {
                      maxHeight: 750,
                      minHeight: 750,
                    }}
                  objectFit="fill"
                />
              </div>
            </div>
            <div className="slide">
              <div className="slide__info">
                <h3 className="slide__title">
                  О специалистах
                </h3>
                <p className="slide__text">
                  Наши работники — профессионалы. Мы сами обучаем персонал и ведем круглосуточный 
                  контроль их работы. Результат — оперативное и профессиональное решение Ваших задач.
                </p>
              </div>
              <div className="slide__img-wrap">
                <StaticImage
                  src="../../assets/images/workers.jpg"
                  alt="Наши специалисты"
                  placeholder="blurred"
                  layout="fullWidth"
                  quality={90}
                  style={isMobileOrTablet ? {} : 
                    {
                      maxHeight: 750,
                      minHeight: 750,
                    }}
                  objectFit="fill"
                />
              </div>
            </div>
          </Carousel>
      </div>
    </section>
  )
};

export default About;
