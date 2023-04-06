import React from "react";

const MenuItem = ({ img, title, price, desc, category}) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
            <div>
            <i>{category}</i>
            <h5>{title}</h5>
            </div>
            <span className="item-price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
