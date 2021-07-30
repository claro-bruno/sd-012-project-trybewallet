import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import valueInput from './formComponents/valueInput';
import descriptionInput from './formComponents/descriptionInput';
import currencySelect from './formComponents/currencySelect';
import methodSelect from './formComponents/methodSelect';
import tagSelect from './formComponents/tagSelect';
import editExpensesButton from './formComponents/editExpensesButton';
import addExpensesButton from './formComponents/addExpensesButton';

const WalletForm = (props) => {
  const { editor } = props;
  return (
    <form>
      <valueInput />
      <descriptionInput />
      <currencySelect />
      <methodSelect />
      <tagSelect />
      { (editor)
        ? <editExpensesButton />
        : <addExpensesButton /> }
    </form>
  );
};

const mapStateToProps = (state) => ({
  editor: state.wallet.editor,
});

WalletForm.propTypes = {
  editor: PropTypes.bool,
};

WalletForm.defaultProps = {
  editor: false,
};

export default connect(mapStateToProps)(WalletForm);
