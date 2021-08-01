import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleOptions = this.handleOptions.bind(this);
  }

  handleOptions() {
    const { options } = this.props;
    return (
      options.map((option) => (
        <option
          key={ option }
          value={ option }
        >
          { option }
        </option>
      ))
    );
  }

  render() {
    const { id, label } = this.props;
    return (
      <label htmlFor={ id }>
        { `${label}: ` }
        <select id={ id }>
          { this.handleOptions() }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
