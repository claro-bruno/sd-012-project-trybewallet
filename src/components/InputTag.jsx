import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class InputTag extends Component {
  render() {
    const { handleChange } = this.props;

    const tags = ['Selecione', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <label htmlFor="description">
        Tag
        <select required id="description" onChange={ handleChange } name="tag">
          { tags.map((tag, index) => (
            <option key={ index }>
              { tag }
            </option>)) }
        </select>
      </label>
    );
  }
}

InputTag.propTypes = {

  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myWallet: state.wallet,
});

export default connect(mapStateToProps)(InputTag);
