import React, { Component } from 'react'
import api from '../utils/api'
import queryString from 'query-string'
import utils, { getDate, convertTemp } from '../utils/helpers'

const DayItem = (props) => {
  let date = getDate(props.day.dt)
  let icon = props.day.weather[0].icon
  return (
    <div className='dayContainer'>
      <img
        src={'./app/images/weather-icons/' + icon + '.svg'}
        alt='weather'
        className='weather'
      />
      <h2 className='subHeader'>{date}</h2>
    </div>
  )
}

class Forecast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      forecastData: [],
      loading: true
    }

    this.makeRequest = this.makeRequest.bind(this)
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city
    this.makeRequest(this.city)
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city
  }

  makeRequest(city) {
    this.setState(() => {
      return {
        loading: true
      }
    })

    api.getForeCast(city)
      .then((res) => {
        this.setState({
          loading: false,
          forecastData: res
        })
      })
  }

  render() {
    return (
      this.state.loading === true
      ? <h1 className='forecast-header'>Loading</h1>
      : <div>
        <h1 className='forecast-header'>{this.city}</h1>
        <div className='forecast-container'>
          {this.state.forecastData.list.map((listItem) => {
            return <DayItem key={listItem.dt} day={listItem} />
          })}
        </div>
      </div>
    )
  }
}

export default Forecast
