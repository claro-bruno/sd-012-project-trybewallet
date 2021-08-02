import React from 'react';
import PropTypes from 'prop-types';

class ColumnHeader extends React.Component {
  render() {
    const colHeaders = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <div role="combobox" aria-controls="listbox1" aria-expanded="false">
        { colHeaders
          .map((colH) => <span role="columnheader" key={ colH }>{ colH }</span>)}
      </div>
    );
  }
}

ColumnHeader.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default ColumnHeader;
