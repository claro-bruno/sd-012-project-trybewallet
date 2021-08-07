import React from 'react';
import PropTypes from 'prop-types';

class TagSelect extends React.Component {
  render() {
    const { onChange, value } = this.props;
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
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
            { tags.map((tag) => (
              <option
                key={ tag }
              >
                {tag}
              </option>
            ))}
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
