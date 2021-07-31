import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAction } from '../actions/userAction';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleChangeSenha(e) {
    this.setState({
      senha: e.target.value,
    });
  }

  validateEmail(email, password) {
    const re = /\S+@\S+\.\S+/;
    const NUMBER_SIX = 6;
    if (re.test(email) && password.length >= NUMBER_SIX) {
      return true;
    }
    return false;
  }

  render() {
    const { emailDispatch } = this.props;
    const { email, senha } = this.state;

    return (
      <div>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                data-testid="email-input"
                onChange={ this.handleChangeEmail }
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                name="senha"
                type="senha"
                placeholder="senha"
                data-testid="password-input"
                onChange={ this.handleChangeSenha }
              />
            </Form.Group>
            <Link to="/carteira">
              <Button
                disabled={ !this.validateEmail(email, senha) }
                variant="primary"
                type="button"
                onClick={ emailDispatch(email) }
              >
                Entrar
              </Button>
            </Link>
          </Form>
        </Col>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(userAction(state)),
});

LoginForm.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);
