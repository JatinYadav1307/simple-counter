import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Ubuntu');
  
  body {
  	font-family: 'Ubuntu', sans-serif;
  	font-weight: normal;
  	background: #232428;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
