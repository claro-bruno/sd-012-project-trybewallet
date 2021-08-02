import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleExpenseForm } from '../../actions';

const TagSelect = (props) => {
  const { tag, handleExpenseFormInputs } = props;
  return (
    <label htmlFor="tag">
      Tag:
      <select
        name="tag"
        id="tag"
        value={ tag }
        data-testid="tag-input"
        onChange={ handleExpenseFormInputs }
      >
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    </label>
  );
};

const mapStateToProps = (state) => ({
  coins: state.wallet.coins,
  tag: state.form.tag,
});

const mapDispatchToProps = (dispatch) => ({
  handleExpenseFormInputs: ({ target }) => dispatch(handleExpenseForm(target)),
});

TagSelect.propTypes = {
  handleExpenseFormInputs: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TagSelect);
