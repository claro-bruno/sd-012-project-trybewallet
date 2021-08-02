// import propTypes from 'prop-types';
// import React from 'react';
// import { connect } from 'react-redux';
// import { getCurrency } from '../actions';

// class Header extends React.Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     expenses: 0,
//   //     id: 0,
//   //     value: 0,
//   //     description: '',
//   //     currency: '',
//   //     method: 'Cash',
//   //     tag: 'Food',
//   //   };
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleClick = this.handleClick.bind(this);
//   // }

//   // handleChange({ target }) {
//   //   const { name, value } = target;
//   //   this.setState({ [name]: value });
//   // }

//   render() {
//     const { user, expense } = this.props;
//     const total = expense.reduce((acc, { value, curren, quotations }) => {
//       const quotation = parseFloat(quotations[curren].ask);
//       acc += value * quotation;
//       return acc;
//     }, 0);
//     return (
//       <header>
//         <form>
//           <label htmlFor="infos">
//             Usuario:
//             <span data-testid="email-field">{user}</span>
//             <div data-testid="total-field">
//               Despesas:
//               <span>{ total }</span>
//               Moeda:
//               <span data-testid="header-currency-field">BRL</span>
//             </div>
//           </label>
//         </form>
//       </header>
//     );
//   }
// }

// Header.propTypes = {
//   user: propTypes.objectOf(propTypes.string).isRequired,
//   expense: propTypes.arrayOf(propTypes.shape({
//     value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
//     currency: propTypes.string.isRequired,
//     exchangeRates: propTypes.shape({
//       USD: propTypes.shape({
//         ask: propTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   })).isRequired,
// };

// const mapStateToProps = (state) => ({
//   user: state.user.email,
//   expense: state.wallet.expenses,
//   total: state.wallet.total,
// });

// const mapDispatchToProps = (dispatch) => ({
//   exchangeRates: (data) => dispatch(getCurrency(data)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
