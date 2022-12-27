import { useState, useEffect } from 'react'
import Book from './components/Book'

const App = () => {
    // console.log(JSON.stringify(import.meta.env))
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
  return (
    <div className='app container'>
        <h1 className='title'>Book finder</h1>
        <div className='search'>
            <input className='search__input' type="text" placeholder="Search for a book" />
            <button className='btn'>Search</button>
        </div>
        <div className='books'>
            {books.map((book, index) => (
                <Book key={index}  />
            ))}
        </div>
    </div>
  )
}

export default App
