import React from 'react';
import PropTypes from 'prop-types';

export default class InputCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Loading...'],
    };
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => res.json())
      .then((obj) => Object.keys(obj))
      .then((currs) => currs.filter((curr) => curr !== 'USDT'))
      .then((filtered) => this.setState({ options: filtered }));
  }

  render() {
    const { options } = this.state;
    const optionsRender = options.map((option) => (
      <option key={ option }>{option}</option>
    ));
    const { onChangeHandler } = this.props;

    return (
      <>
        <label htmlFor="currency">
          Moeda:
          <select
            onChange={ onChangeHandler }
            name="currency"
            id="currency"
          >
            { optionsRender }
          </select>
        </label>
        <br />
      </>
    );
  }
}

InputCurrency.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
};
