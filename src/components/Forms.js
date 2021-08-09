import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Valor from './FormsInputs/Valor';
import Moeda from './FormsInputs/Moeda';
import Payament from './FormsInputs/Payament';
import Tag from './FormsInputs/Tag';
import Description from './FormsInputs/Description';
import { fetchcotations } from '../actions/index';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.hadlechange = this.hadlechange.bind(this);
    this.addExpenses = this.addExpenses.bind(this);
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  hadlechange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addExpenses() {
    const { value, currency, method, tag, description } = this.state;
    const { getcotation } = this.props;
    getcotation({ value, currency, method, tag, description });
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    return (
      <form>
        <Valor value={ value } hadlechange={ this.hadlechange } />
        <Moeda value={ currency } hadlechange={ this.hadlechange } />
        <Payament value={ method } hadlechange={ this.hadlechange } />
        <Tag value={ tag } hadlechange={ this.hadlechange } />
        <Description value={ description } hadlechange={ this.hadlechange } />
        <button type="button" onClick={ this.addExpenses }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getcotation: (state) => dispatch(fetchcotations(state)),
});

Forms.propTypes = {
  getcotation: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Forms);
