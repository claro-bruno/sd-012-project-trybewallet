import React from 'react';
import PropTypes from 'prop-types';

class TagSelect extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
            value={ value }
            onChange={ onChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

TagSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TagSelect;
