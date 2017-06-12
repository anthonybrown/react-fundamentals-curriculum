import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ZipCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 90210
    }
  }

  handleSubmitZipcode() {

  }

  handleUpdateZipcode() {

  }

  render() {
    return (
      <div
        className='zipcode-container'
        style={{flexDirection: this.props.direction}}
      >
        <input
          className='form-control'
          onChange={this.handleUpdateZipcode}
          placeholder='Boston, MA'
          type='text'
          value={this.state.zipcode}
        />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitZipcode}
        >
          Get Weather
        </button>
      </div>
    )
  }
}

ZipCode.defaultProps = {
  direction: 'column'
}

ZipCode.propTypes = {
  direction: PropTypes.string,
}

export default ZipCode
