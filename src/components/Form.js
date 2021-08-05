import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputCard from './InputCard';
import Select from './Select';
import fetchApi from '../actions/apiFetch';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetching } = this.props;
    fetching();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { fetching } = this.props;
    fetching({ ...this.state });
    this.setState(({ id }) => ({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  render() {
    const { value, description } = this.state;
    return (
      <form>
        <InputCard
          type="text"
          id="Valor"
          name="value"
          labelText="Valor"
          value={ value }
          onChange={ this.handleChange }
        />
        <InputCard
          type="text"
          id="Descrição"
          name="description"
          labelText="Descrição"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ () => { this.handleSubmit(); } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  fetching: PropTypes.func.isRequired,
};
const mapStateToProps = ({ wallet }) => ({ currencies: wallet.currencies });
const mapDispatchToProps = (dispacth) => ({
  fetching: (expenses) => dispacth(fetchApi(expenses)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
