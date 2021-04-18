import React from "react";
import cn from 'classnames';
import InstaLogo from 'assets/icons/insta';
import WhatsAppLogo from 'assets/icons/whatsupp';
import CallIcon from 'assets/icons/call';

const Social = () => (
  <ul className="social">
    <li className="social__item">
      <a 
        href="https://www.instagram.com/techmerchandising_omsk/"
        rel="noreferrer noopener" 
        target="_blank"
        className="social__link"
      >
        <InstaLogo className="social__logo"/>
      </a>
    </li>
    <li className="social__item">
      <a 
        href="https://api.whatsapp.com/send?phone=79139785018"
        rel="noreferrer noopener" 
        target="_blank"
        className="social__link"
      >
        <WhatsAppLogo className="social__logo"/>
      </a>
    </li>
    <li className="social__item">
      <a 
        href="tel:+73812534483"
        rel="noreferrer noopener" 
        target="_blank"
        className="social__link"
      >
        <CallIcon className={cn("social__logo", "social__logo--call")}/>
      </a>
    </li>
  </ul>
);

export default Social;
