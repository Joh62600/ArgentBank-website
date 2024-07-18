import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./EventMoney.css";

function EventMoney({ title, subtitle, content }) {
   const navigate = useNavigate();

   const handleNavigate = () => {
      navigate("/transactions");
   };

   return (
      <article className="account">
         <div className="content-account">
            <h3 className="title-account">{title}</h3>
            <span className="money">{content}</span>
            <p className="subtitle-account">{subtitle}</p>
         </div>
         <div className="cta">
            <FontAwesomeIcon icon={faChevronRight} className="icon-arrow" onClick={handleNavigate} />
         </div>
      </article>
   );
}

export default EventMoney;
