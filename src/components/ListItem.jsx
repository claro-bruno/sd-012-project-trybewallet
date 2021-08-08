import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ListItem extends Component {
  render() {
    const { expenseList } = this.props;
    return (
      <section>
        <ul className="list-expense">
          { expenseList.map((list, index) => {
            const { description, value, currency, method, tag } = list;
            return (
              <li
                className="list-item-expense"
                id={ index }
                key={ index }
              >
                <span>{ `${description} ${tag} ${method} ${currency} ${value}` }</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

ListItem.propTypes = {
  expenseList: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenseList: state.wallet.expenses,
});

export default connect(mapStateToProps)(ListItem);
