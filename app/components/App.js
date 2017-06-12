import React, { Component } from 'react'
import ZipCode from './ZipCode'
import Forecast from './Forecast'
import ReactRouter, { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='container'>
          <Route render={(props) => {
            return (
              <div className='navbar'>
                <h1>React weather app</h1>
                <ZipCode
                  direction='row'
                  onSubmitZipcode={(city) => {
                    props.history.push({
                      pathname: 'forecast',
                      search: `?city=${city}`
                    });
                  }}
                  zipcode={12345} />
              </div>
            )
          }} />

          <Route exact path='/' render={(props) => {
            return (
              <div
                className='home-container'
                style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                <h1 className='header'>Enter a City and State</h1>
                <ZipCode
                  direction='column'
                  onSubmitZipcode={(city) => {
                    props.history.push({
                      pathname: 'forecast',
                      search: `?city=${city}`
                    })
                  }}
                  zipcode={12345} />
              </div>
            )
          }} />

          <Route path='/forecast' component={Forecast} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
