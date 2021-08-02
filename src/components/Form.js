import React, { Component } from 'react';
import SelectMoedas from './SelectMoedas';
import SelectPagamento from './SelectPagamento';
import SelectTag from './SelectTag';

class Form extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     valor: Number,
  //     descricao: '',

  //   };
  // }

  render() {
    // const {  } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
            name="valor"
            // value={  }
            placeholder="Adicione um valor"
            // onChange={  }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
            name="descricao"
            // value={  }
            placeholder="Adicione uma descrição"
            // onChange={  }
          />
        </label>
        <SelectMoedas />
        <SelectPagamento />
        <SelectTag />
        {/* <button>
          Adicionar despesas
        </button> */}
      </form>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   SetUserStore: (user) => dispatch(saveUser(user)),
// });

export default Form;
