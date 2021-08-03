// import React from 'react';

// export default class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       options: ['Loading...'],
//     };
//     this.renderForm = this.renderForm.bind(this);
//   }

//   componentDidMount() {
//     fetch('https://economia.awesomeapi.com.br/json/all')
//       .then((res) => res.json())
//       .then((obj) => Object.keys(obj))
//       .then((currs) => currs.filter((curr) => curr !== 'USDT'))
//       .then((filtered) => this.setState({ options: filtered }));
//   }

//   renderForm() {
//     const { options } = this.state;
//     const optionsRender = options.map((option) => (
//       <option key={ option }>{option}</option>
//     ));
//     return (
//       <form>
//         {/* <label htmlFor="amount">
//           Valor:
//           <input onChange={ this.handleChange } type="number" name="amount" id="amount" />
//         </label>
//         <br /> */}

//         {/* <label htmlFor="currency">
//           Moeda:
//           <select name="currency" id="currency">
//             { optionsRender }
//           </select>
//         </label>
//         <br /> */}

//         {/* <label htmlFor="method">
//           Método de pagamento:
//           <select name="method" id="method">
//             <option value="cash">Dinheiro</option>
//             <option value="credit">Cartão de crédito</option>
//             <option value="debit">Cartão de débito</option>
//           </select>
//         </label>
//         <br /> */}

//         {/* <label htmlFor="tag">
//           Tag:
//           <select name="tag" id="tag">
//             <option value="food">Alimentação</option>
//             <option value="recreation">Lazer</option>
//             <option value="work">Trabalho</option>
//             <option value="transport">Transporte</option>
//             <option value="health">Saúde</option>
//           </select>
//         </label>
//         <br /> */}

//         {/* <label htmlFor="descricao">
//           Descrição:
//           <input type="text" name="descricao" id="descricao" />
//         </label>
//         <br /> */}

//         <button type="submit">Adicionar despesa</button>
//       </form>
//     );
//   }

//   render() {
//     return (
//       this.renderForm()
//     );
//   }
// }
