// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// class ExpenseList extends Component {
//   render() {
//     const { expenses } = this.props;
//     console.log(expenses);
//     return (
//       <ul>
//         { expenses.map((expense, index) => (
//           <li key={ index }>
//             <p>{expense.value}</p>
//             <p>{expense.payment}</p>
//             <p>{expense.description}</p>
//             <p>{expense.tag}</p>
//             <p>{expense.currency}</p>
//             <button type="button" value={ index }>DEL</button>
//           </li>))}
//       </ul>
//     );
//   }
// }

// ExpenseList.propTypes = {
//   expenses: PropTypes.arrayOf(PropTypes.objectOf),
// };

// const mapStateToProps = (state) => ({
//   expenses: state.wallet.expense,
// });

// export default connect(mapStateToProps)(ExpenseList);
