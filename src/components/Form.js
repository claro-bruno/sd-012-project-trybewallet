import React from 'react';

const Form = () => {
  const arrayToOptions = {
    paymentType: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    tag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  };
  return (
    <form>
      <label>
        Valor:
        <input type="text" name="name" />
      </label>
      <label>
        Descrição:
        <input type="text" name="name" />
      </label>
      <label>
        Moedas:
        <select />
      </label>
      <label>
        Método de pagamento:
        <select>
          {arrayToOptions
            .paymentType.map((e) => <option value={ e } key={ e }>{e}</option>)}
        </select>
      </label>
      <label>
        Tag:
        <select>
          {arrayToOptions
            .tag.map((e) => <option value={ e } key={ e }>{e}</option>)}
        </select>
      </label>
    </form>
  );
};

export default Form;
