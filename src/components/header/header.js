import React from "react";
import { Link } from "gatsby";
import cn from 'classnames';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Social from 'components/social';


const Header = ({ isMain, isScrolled }) => (
  <header className={cn('header', isMain && 'header-main', isScrolled && 'fixed')}>
    <div className="container">
      <div className="header__inner">
        <Link to="/" className="header__link">
          <span>лого</span>
          <span className="header__link-text">ТехМерч Омск</span>
        </Link>
        {isMain && (
          <nav className="header__nav">
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
)

export default Header
