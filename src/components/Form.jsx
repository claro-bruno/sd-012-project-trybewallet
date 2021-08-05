import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { fetchAPI } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      descricao: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { currency } = this.props;
    currency();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valor, descricao, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <div>
        <form>
          <Input
            label="Valor"
            datatestid="semTest"
            type="number"
            name="valor"
            id="value-input"
            value={ valor }
            onChange={ this.handleChange }
          />

          <Input
            label="Descrição"
            datatestid="semTest"
            type="text"
            name="descricao"
            id="desc-input"
            value={ descricao }
            onChange={ this.handleChange }

          />

          <Select
            currencies={ currencies }
            method={ method }
            tag={ tag }
            onChange={ this.handleChange }
          />

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currency: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
