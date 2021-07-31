import React from 'react';
import Header from './WComponents/Header';
import ExpensesForm from './WComponents/ExpensesForm';
import DispensesTable from './WComponents/DispensesTable';

const INITIAL_STATE = {
  editing: false,
  editID: 0,
};
class Wallet extends React.Component {
  constructor() {
    super();
    this.requestEdition = this.requestEdition.bind(this);
    this.exitEditSection = this.exitEditSection.bind(this);

    this.state = INITIAL_STATE;
  }

  requestEdition(id) {
    this.setState({ editing: true, editID: id });
  }

  exitEditSection() {
    this.setState(INITIAL_STATE);
  }

  render() {
    const { editing, editID } = this.state;

    return (
      <div>
        <Header />
        <main>
          <ExpensesForm
            editing={ editing }
            editID={ editID }
            exitEditSection={ this.exitEditSection }
          />
          <DispensesTable requestEdition={ this.requestEdition } />
        </main>
      </div>
    );
  }
}

export default Wallet;
