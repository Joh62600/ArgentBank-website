import React from "react"

import "./Card.css"

export default Card

function Card({ image, title, content, alt }) {
   return (
      <article className="card-feature">
         <img src={image} alt={alt} className="feature-icon" />
         <h3>{title}</h3>
         <p>{content}</p>
      </article>
   )
}
