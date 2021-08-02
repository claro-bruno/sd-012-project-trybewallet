import React from 'react';
import Input from './Input';
import Select from './Select';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      descricao: '',
      moeda: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valor, descricao, method, moeda, tag } = this.state;
    return (
      <div>
        <form action>
          <Input
            label="Valor"
            type="number"
            name="valor"
            value={ valor }
            onChange={ this.handleChange }
          />

          <Input
            label="Descrição"
            type="text"
            name="descricao"
            value={ descricao }
            onChange={ this.handleChange }

          />

          <Select
            moeda={ moeda }
            method={ method }
            tag={ tag }
            onChange={ this.handleChange }
          />

        </form>
      </div>
    );
  }
}

// Form.propTypes = {
//   name: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
//   disabled: PropTypes.bool.isRequired,
// };

export default Form;
