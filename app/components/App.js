import React from 'react'
import ZipCode from './Zipcode'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <div>
          <h1>Main Header</h1>
        </div>
        <div className='home-container'>
          <h1 className='header'>Enter a City and State</h1>
          <ZipCode
            direction='column'
            onSubmitZipcode={ function () {} }
            onUpdateZipcode={ function () {} }
            zipcode={12345}
          />
        </div>
      </div>
    )
  }
}

export default App
