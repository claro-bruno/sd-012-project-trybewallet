// import React from 'react';
// import PropTypes from 'prop-types';

// class Input extends React.Component {
//   render() {
//     const { label, id, type, name, value, onChange } = this.props;
//     return (
//       <label htmlFor={ id }>
//         <span>{ label }</span>
//         <input
//           type={ type }
//           id={ id }
//           data-testid={ id }
//           name={ name }
//           value={ value }
//           onChange={ onChange }
//         />
//       </label>
//     );
//   }
// }

// Input.propTypes = {
//   id: PropTypes.string,
//   label: PropTypes.string,
//   type: PropTypes.string,
//   onChange: PropTypes.func,
// }.isRequired;

// export default Input;

import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { label, id, value, onChange, type, name } = props;

  return (
    <label htmlFor={ id }>
      { label }
      <input
        type={ type }
        id={ id }
        data-testid={ id }
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default Input;
