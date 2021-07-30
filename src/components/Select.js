import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

class Select extends React.Component {
  constructor() {
    super();
    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions(array) {
    return array.map((tag) => <Option key={ tag } text={ tag } />);
  }

  render() {
    const { name, text, content } = this.props;
    return (
      <label htmlFor={ name }>
        { text }
        <select name={ name } id={ name }>
          { this.renderOptions(content) }
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  content: [],
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string),
};

export default Select;
