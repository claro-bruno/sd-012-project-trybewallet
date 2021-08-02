import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProtectedRoute extends React.Component {
  render() {
    const {
      isLoggedIn,
      component: Component,
      redirectRoute,
      ...rest
    } = this.props;

    return (
      <Route
        { ...rest }
        render={ (props) => (
          isLoggedIn
            ? <Component { ...props } />
            : <Redirect to={ redirectRoute } />
        ) }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(ProtectedRoute);

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  redirectRoute: PropTypes.string.isRequired,
};
