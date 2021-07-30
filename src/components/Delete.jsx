import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delWallet } from '../actions';

class Delete extends Component {
  render() {
    const { delAction, subCoin, id } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        id={ id }
        onClick={ ({ target }) => { subCoin(target.id); delAction(target.id); } }
      >
        X
      </button>
    );
  }
}

Delete.propTypes = {
  delAction: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  subCoin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  delAction: (id) => dispatch(delWallet(id)),
});

export default connect(null, mapDispatchToProps)(Delete);
