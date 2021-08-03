import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { darkmodeOn, darkmodeOff } from '../actions';
import './darkmodeButton.css';

class DarkmodeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { darkmode, darkOn, lightOn } = this.props;
    if (darkmode) return lightOn();
    darkOn();
  }

  render() {
    const { darkmode, className } = this.props;
    return (
      <div className={ className }>
        <button type="button" onClick={ this.handleClick }>
          <i
            className={
              `bi bi-lightning-charge-fill ${darkmode ? 'moonOn' : 'moonOff'}`
            }
          />
          {
            darkmode
              ? (<i className="bi bi-toggle2-off toggle-off" />)
              : (<i className="bi bi-toggle2-on toggle-on" />)
          }
          <i
            className={
              `bi bi-lightning-charge-fill ${!darkmode ? 'sumOn' : 'sumOff'}`
            }
          />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  darkmode: state.user.darkmode,
});

const mapDispatchToProps = (dispatch) => ({
  darkOn: () => dispatch(darkmodeOn()),
  lightOn: () => dispatch(darkmodeOff()),
});

DarkmodeButton.propTypes = {
  darkmode: PropTypes.bool,
  darkOn: PropTypes.func.isRequired,
  lightOn: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

DarkmodeButton.defaultProps = {
  darkmode: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(DarkmodeButton);
