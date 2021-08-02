import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ValueInput from './formComponents/ValueInput';
import DescriptionInput from './formComponents/DescriptionInput';
import CurrencySelect from './formComponents/CurrencySelect';
import MethodSelect from './formComponents/MethodSelect';
import TagSelect from './formComponents/TagSelect';
import EditExpensesButton from './formComponents/EditExpensesButton';
import AddExpensesButton from './formComponents/AddExpensesButton';

const walletForm = (props) => {
  const { editor } = props;
  return (
    <form>
      <ValueInput />
      <DescriptionInput />
      <CurrencySelect />
      <MethodSelect />
      <TagSelect />
      { (editor)
        ? <EditExpensesButton />
        : <AddExpensesButton /> }
    </form>
  );
};

const mapStateToProps = (state) => ({
  editor: state.wallet.editor,
});

walletForm.propTypes = {
  editor: PropTypes.bool,
};

walletForm.defaultProps = {
  editor: false,
};

export default connect(mapStateToProps)(walletForm);
