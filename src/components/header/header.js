import React from "react";
import { Link } from "gatsby";
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Social from 'components/social';
import { StaticImage } from "gatsby-plugin-image";


const Header = ({ isMain, isScrolled }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  });
  return (
    <header className={cn('header', isMain && 'header-main', isScrolled && 'fixed')}>
      <div className="container">
        <div className="header__inner">
          <Link to="/" className={cn("header__link", isMain && "header__link--main")}>
            <StaticImage 
              src="../../assets/images/main-logo.png"
              alt="Торговое оборудование"
              placeholder="blurred"
              quality={100}
              width={200}
            />
          </Link>
          {isMain && isDesktop && (
            <nav className={cn("header__nav")}>
              <AnchorLink 
                to="/#about" 
                title="О компании" 
                className="header__nav-link" 
                stripHash
              >
                О компании
              </AnchorLink>
              <AnchorLink 
                to="/#services" 
                title="Услуги" 
                className="header__nav-link"  
                stripHash
              >
                Услуги
              </AnchorLink>
              <AnchorLink 
                to="/#portfolio" 
                title="Портфолио" 
                className="header__nav-link"  
                stripHash
              >
                Портфолио
              </AnchorLink>
              <AnchorLink 
                to="/#contacts" 
                title="Контакты" 
                className="header__nav-link" 
                stripHash
              >
                Контакты
              </AnchorLink>
            </nav>
          )}
          <Social />
        </div>
      </div>
    </header>
)}

export default Header;
