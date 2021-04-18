import cn from 'classnames';
import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "components/header";

const Layout = ({ children, isMain }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [isScrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <Header isMain={isMain} isScrolled={isScrolled} />
        <main className={cn(!isMain && isScrolled && 'main--scrolled')}>{children}</main>
        <footer
          style={{
            display: `flex`,
            justifyContent: `center`,
            margin: `1rem`,
          }}
        >
        ТехМерч Омск © {new Date().getFullYear()}
        </footer>
    </div>
  )
}

export default Layout
