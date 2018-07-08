import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./styles.scss";
import { itemAdd, itemRemove } from "../../actions/order";

const ItemControls = ({ id, quantity, itemAdd, itemRemove }) => {
  const removeDisabled = quantity < 1;

  return (
    <div className="item__controls">
      <button
        className="item__control item__control--minus"
        onClick={() => itemRemove(id)}
        disabled={removeDisabled}
        type="button"
      >
        <svg className="item__control__icon">
          <use xlinkHref="#circle-minus" />
        </svg>
        <span className="visually-hidden">Remove item</span>
      </button>
      <button
        className="item__control item__control--plus"
        onClick={() => itemAdd(id)}
        type="button"
      >
        <svg className="item__control__icon">
          <use xlinkHref="#circle-plus" />
        </svg>
        <span className="visually-hidden">Add item</span>
      </button>
    </div>
  );
};

ItemControls.defaultProps = {
  quantity: 0
};

ItemControls.propTypes = {
  quantity: PropTypes.number,
  itemAdd: PropTypes.func,
  itemRemove: PropTypes.func
};

const mapDispatchToProps = {
  itemAdd,
  itemRemove
};

export default connect(
  null,
  mapDispatchToProps
)(ItemControls);
