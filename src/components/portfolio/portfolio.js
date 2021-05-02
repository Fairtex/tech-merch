import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from "gatsby";

import ArrowIcon from 'assets/icons/arrow';

export const query = graphql`
  query PortfolioQuery {
    allStrapiPortfolio {
      edges {
        node {
          title
          slug
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH 
                quality: 90
                height: 700
                width: 1280
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        } 
      }
    }
  }
`;

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

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return (
    <button
      className="portfolio__slider-btn portfolio__slider-btn--next"
      onClick={() => onClick()}
    >
      <ArrowIcon className="portfolio__slider-icon"/>
    </button>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return (
    <button
      className="portfolio__slider-btn portfolio__slider-btn--prev"
      onClick={() => onClick()}
    >
      <ArrowIcon className="portfolio__slider-icon"/>
    </button>
  );
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
  const data = useStaticQuery(query);
  const source = data.allStrapiPortfolio.edges;
  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 1023px)'
  });
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <h2 
          className="portfolio__title"
          data-sal="slide-up"
          data-sal-duration="1500"
          data-sal-delay="100"
          data-sal-easing="ease-out-back"
        >
          Наше Портфолио
        </h2>
        <Carousel
          swipeable={isMobileOrTablet}
          responsive={responsive}
          arrows={true}
          infinite={true}
          containerClass="portfolio__slider-wrap"
          sliderClass="portfolio__slider"
          itemClass="portfolio__slider-item"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {source.map((item, index) => {
            const image = getImage(item.node.image)
            return (
              <div key={index} className="portfolio__slide">
                <GatsbyImage
                  image={image}
                  alt="Коллаж из фотографий обьекта"
                  style={isMobileOrTablet ? {} : 
                    {
                      maxHeight: 750,
                      minHeight: 750,
                    }}
                  layout="fullWidth"
                  quality={90}
                  objectFit="fill"
                />
                <div className="portfolio__case">
                  <h3 className="portfolio__case-name">
                    {item.node.title}
                  </h3>
                  <Link to={`/${item.node.slug}`} className="portfolio__case-link">
                    Смотреть
                  </Link>
                </div>
              </div>
          )})}  
        </Carousel>
      </div>
    </section>
  )
};

export default Portfolio;
