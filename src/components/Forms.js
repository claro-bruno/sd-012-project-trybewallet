import React, { Component } from 'react';
import Valor from './FormsInputs/Valor';
import Moeda from './FormsInputs/Moeda';
import Payament from './FormsInputs/Payament';
import Tag from './FormsInputs/Tag';
import Description from './FormsInputs/Description';

class Forms extends Component {
  render() {
    return (
      <form>
        <Valor />
        <Moeda />
        <Payament />
        <Tag />
        <Description />
      </form>
    );
  }
}

export default Forms;
