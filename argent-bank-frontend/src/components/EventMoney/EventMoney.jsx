import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./EventMoney.css";

function EventMoney({ title, subtitle, content, onClick }) {
  return (
    <article className="account" onClick={onClick}>
      <div className="content-account">
        <h3 className="title-account">{title}</h3>
        <span className="money">{content}</span>
        <p className="subtitle-account">{subtitle}</p>
      </div>
      <div className="cta">
        <FontAwesomeIcon icon={faChevronRight} className="icon-arrow" />
      </div>
    </article>
  );
}

export default EventMoney;
