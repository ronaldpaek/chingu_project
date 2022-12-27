import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className='App'>
        <h1 className='title'>Book finder</h1>
        <SearchBar />
    </div>
  )
}

export default App
