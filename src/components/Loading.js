import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { loading } = this.props;

    if (loading === false) {
      return <Redirect to="/carteira" />;
    }

    return (
      <div className="loading">

        <span>Loading...</span>
      </div>
    );
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.wallet.isLoading,
});

export default connect(mapStateToProps)(Loading);
