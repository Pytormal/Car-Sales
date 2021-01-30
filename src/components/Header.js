import React from 'react';
import { connect } from 'react-redux';
import { titleReducer } from '../reducer/titleReducer'

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={titleReducer({ car: props.image })} alt={titleReducer({car: props.name })} />
      </figure>
      <h2>{titleReducer({ car: props.name })}</h2>
      <p>Amount: ${titleReducer({ car: props.price })}</p>
    </>
  );
};

const mapStatetoProps = state => {
  state = state.car;
  
}

export default connect(mapStatetoProps, {}) (Header);
