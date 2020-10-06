import React from 'react'
import CharacterList from './components/CharacterList'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const App = () => (
  <BrowserRouter>
    <CharacterList />
  </BrowserRouter>
)

export default App
