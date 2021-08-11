import {
  FETCHING_DATA, FAILED_REQUEST, REMOVE_EXPENSE,
  EXPENSES_API_GETSTATE, EXPENSES_API_FAILED,
  EDIT_EXPENSE, TOGGLE_EDIT } from '../actions';

const INIT_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  editing: 'none', // estado que será utilizado para alternar entre o botão que edita e o que adiciona o que foi editado. Editing receberá o id.
};

/** início da lógica para editar a despesa. Consulta ao repositório de Luciano Almeida em: https://github.com/tryber/sd-012-project-trybewallet/pull/47/files */

const addEditedExpense = (expenses, payload, id) => {
  const newExpenses = expenses.map((e) => { // array expenses do estado global.
    if (e.id === id) { // compara id de cada elemento do array (que vem pelo botão editar)  com o ide que vem pela action.
      return { id, ...payload, exchangeRates: e.exchangeRates }; // retorna um objeto com as chaves: id (do item - objeto - editado), payload (os dados que foram editados e, após a submissão, são enviado para o state do componente) e exchangeRates.
    }
    return e; // caso nada seja editado, retorna a própria despesa.
  });
  return newExpenses; // o retorno da função é um objeto, que corresponde à despesa e será usado no reducer.
};

const editingAndRemoving = (editing, id) => {
  if (editing === id) {
    return 'none';
  }
  return editing;
};

const wallet = (state = INIT_STATE, action) => {
  switch (action.type) {
  case FETCHING_DATA:
    return {
      ...state,
      currencies: Object.keys(action.currencies), // feito com a ajuda de Miguel Retroz
    };

  case FAILED_REQUEST:
    return {
      ...state,
      error: action.error,
    };

  case EXPENSES_API_GETSTATE:
    return {
      ...state,
      expenses: [
        ...state.expenses, { id: state.expenses.length, ...action.state },
      ],
      error: '',
    };

  case EXPENSES_API_FAILED:
    return { ...state, error: action.error };

  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.state),
      editing: editingAndRemoving(state.editing, action.id),
    };

  case TOGGLE_EDIT:
    return { ...state, editing: action.id }; // editing receberá o id do objeto selecionado e a condicional verifica se existe um valor diferente de 'none' e isso fará a alternância entre os botões editar e adicionar o que foi editado.

  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: addEditedExpense(state.expenses, action.payload, action.id), // o array expenses está no estado global.
      editing: 'none', // lógica para alternância do botão entre editar e adicionar.
    };

  default:
    return state;
  }
};

export default wallet;
