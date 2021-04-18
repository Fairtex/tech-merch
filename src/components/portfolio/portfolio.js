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
  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 1023px)'
  });
  const {
    carouselState: { currentSlide, totalItems },
  } = rest;
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalItems - 1;
  return (
    <div className="portfolio__slider-btn-group">
      <button
        className="portfolio__slider-btn portfolio__slider-btn--prev"
        disabled={isFirst}
        onClick={() => previous()}
      >
        <ArrowIcon className="portfolio__slider-icon"/>
      </button>
      <button
        className="portfolio__slider-btn portfolio__slider-btn--next"
        disabled={isLast}
        onClick={() => next()}
      >
        <ArrowIcon className="portfolio__slider-icon"/>
      </button>
    </div>
  );
};

const Portfolio = () => {
  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 1023px)'
  });
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <h2 className="portfolio__title">Наше Портфолио</h2>
        <Carousel
            swipeable={isMobileOrTablet}
            responsive={responsive}
            arrows={false}
            infinite={true}
            containerClass="portfolio__slider-wrap"
            sliderClass="portfolio__slider"
            itemClass="portfolio__slider-item"
            customButtonGroup={<CustomButtonGroup />}
          >
            <div className="portfolio__slide">
              <StaticImage
                src="../../assets/images/torg-ob.jpg"
                alt="Торговое оборудование"
                placeholder="blurred"
                style={isMobileOrTablet ? {} : 
                  {
                    maxHeight: 600,
                    minHeight: 600,
                  }}
                layout="fullWidth"
                quality={90}
              />
              <div className="portfolio__case">
                <h3 className="portfolio__case-name">
                  Компания проекта
                </h3>
                <a href="#" className="portfolio__case-link">
                  Смотреть
                </a>
              </div>
            </div>
            <div className="portfolio__slide">
              <StaticImage
                src="../../assets/images/torg-ob.jpg"
                alt="Торговое оборудование"
                placeholder="blurred"
                style={isMobileOrTablet ? {} : 
                  {
                    maxHeight: 600,
                    minHeight: 600,
                  }}
                layout="fullWidth"
                quality={90}
              />
              <div className="portfolio__case">
                <h3 className="portfolio__case-name">
                  Компания проекта
                </h3>
                <a href="#" className="portfolio__case-link">
                  Смотреть
                </a>
              </div>
            </div>
            <div className="portfolio__slide">
              <StaticImage
                src="../../assets/images/torg-ob.jpg"
                alt="Торговое оборудование"
                placeholder="blurred"
                style={isMobileOrTablet ? {} : 
                  {
                    maxHeight: 600,
                    minHeight: 600,
                  }}
                layout="fullWidth"
                quality={90}
              />
              <div className="portfolio__case">
                <h3 className="portfolio__case-name">
                  Компания проекта
                </h3>
                <a href="#" className="portfolio__case-link">
                  Смотреть
                </a>
              </div>
            </div>
          </Carousel>
      </div>
    </section>
  )
};

export default Portfolio;
