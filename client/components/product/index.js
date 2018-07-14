import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import ItemControls from "../item-controls";
import { fmtCurrency } from "../../utils";

const Product = ({ item, quantity }) => {
  const { id, image, name, price } = item;

  return (
    <li className="shadowed card item">
      <img className="item__image" src={image} alt={`photo of ${name}`} />
      <footer className="item__footer">
        <p className="item__label">{name}</p>
        <p className="item__price">{fmtCurrency(price)}</p>
        <ItemControls id={id} quantity={quantity} />
      </footer>
    </li>
  );
};

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  }),
  quantity: PropTypes.number
};

export default Product;
