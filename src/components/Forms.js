import React, { Component } from 'react';
import Valor from './FormsInputs/Valor';
import Moeda from './FormsInputs/Moeda';
import Payament from './FormsInputs/Payament';
import Tag from './FormsInputs/Tag';
import Description from './FormsInputs/Description';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.hadlechange = this.hadlechange.bind(this);
    this.state = {
      valor: '',
      currency: '',

    };
  }

  hadlechange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { valor, currency } = this.state;
    return (
      <form>
        <Valor value={ valor } hadlechange={ this.hadlechange } />
        <Moeda value={ currency } hadlechange={ this.hadlechange } />
        <Payament />
        <Tag />
        <Description />
      </form>
    );
  }
}

export default Forms;
