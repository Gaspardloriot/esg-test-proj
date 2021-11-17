import React from 'react'
import './App.scss'
// import Button from 'react-bootstrap/Button'
import { Example } from './containers/header.js'
// import Darkreader from 'react-darkreader';

const App = () => (
  <div className="app">
    <h1>esg analytics</h1>
    <Example />
    <iframe
      title="something"
      src="http://esg-test.herokuapp.com/embed/dashboard/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjJ9LCJwYXJhbXMiOnt9LCJleHAiOjE2MzcxNzA1MzF9.LNPhush791LjDNd8SSnBN1jw6DCxRbeLwqY034Qc30s#theme=night&bordered=true&titled=true"
      frameBorder="0"
      width="100%"
      height="1200"
      style={{ borderRadius: '8px' }}
      allowTransparency
    />
    <h1>esg analytics</h1>
    <iframe
      title="other"
      src="http://esg-test.herokuapp.com/public/question/dffe38fa-5ef6-4e5b-9fcb-735d3207ceca"
      frameBorder="0"
      width="800"
      height="600"
      style={{ backgroundColor: 'blue' }}
      allowTransparency
    />
  </div>
)

export default App
