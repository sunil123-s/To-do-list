import { useState } from 'react'
import Mainpage from './components/Mainpage'
import './App.css'
import { Provider } from 'react-redux'
import { appStore } from './Utils/appStore'

function App() {
  

  return (
    <> 
      <Provider store={appStore}>
      <Mainpage/>
      </Provider>
      
    </>
  )
}

export default App
