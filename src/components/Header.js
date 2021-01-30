import React from 'react';
import { connect } from 'react-redux';
import { titleReducer } from '../reducer/titleReducer'

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={titleReducer({ car: props.image })} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStatetoProps = state => {
  state = state.car;
  
}

export default connect(mapStatetoProps, {}) (Header);
