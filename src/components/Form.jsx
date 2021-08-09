import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { fetchAPI } from '../actions';
import './components.css';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.idCurriencies = this.idCurriencies.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  idCurriencies(id) {
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { value, description, method, tag, id } = this.state;
    const { currencies, exchange } = this.props;
    return (
      <div>
        <form className="form-add">
          <Input
            label="Valor"
            datatestid="semTest"
            type="number"
            name="value"
            id="value-input"
            value={ value }
            onChange={ this.handleChange }
          />

          <Select
            currencies={ currencies }
            method={ method }
            tag={ tag }
            onChange={ this.handleChange }
          />

          <Input
            label="Descrição"
            datatestid="semTest"
            type="text"
            name="description"
            id="desc-input"
            value={ description }
            onChange={ this.handleChange }
          />

          <Button
            name="Adicionar despesa"
            onClick={ () => { exchange(this.state); this.idCurriencies(id); } }
            disabled={ false }
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  exchange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  exchange: (state) => dispatch(fetchAPI(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
