import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'
import ReactRouter from 'react-router-dom'

class ZipCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    }

    this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this)
    this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this)
  }

  handleSubmitZipcode() {
    api.getCurrentWeather(this.state.zipcode)
      .then((res) => {
        console.log(res)
      })
    this.props.onSubmitZipcode(this.state.zipcode)

    this.setState(() => {
      return {
        zipcode: ''
      }
    })
  }

  handleUpdateZipcode(e) {
    let zip = e.target.value
    this.setState(() => {
      return {
        zipcode: zip
      }
    })
  }

  render() {
    console.log('PROPS', this.props)
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
