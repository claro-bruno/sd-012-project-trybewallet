import React from 'react';
import PropTypes from 'prop-types';

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
      description: '',
      coin: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, coin } = this.state;
    const { coins } = this.props;
    return (
      <form>
        <label htmlFor="Valor">
          Valor
          <input
            id="Valor"
            type="text"
            value={ value }
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <input
            id="Descrição"
            type="text"
            value={ description }
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select
            id="Moeda"
            value={ coin }
            name="coin"
            onChange={ this.handleChange }
          >
            {coins.map((c, index) => <option value={ c } key={ index }>{ c }</option>) }
          </select>
        </label>
      </form>
    );
  }
}

export default Form1;

Form1.propTypes = {
  coins: PropTypes.func.isRequired,
};
