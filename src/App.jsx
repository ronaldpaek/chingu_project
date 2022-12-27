import axios from 'axios'
import { useState, useEffect } from 'react'
import Book from './components/Book'

const App = () => {
    // console.log(JSON.stringify(import.meta.env))
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')

    const getBooks = async (search) => {
        const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='
        const query = search
        const index = 0
        const url = `${baseURL}${query}&index=${index}`

        try {
            const response = await axios.get(url)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='app container'>
        <h1 className='title'>Book finder</h1>
        <div className='search'>
            <input
                className='search__input'
                type="text"
                placeholder="Search for a book"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className='btn'
                onClick={() => getBooks(search)}
            >Search</button>
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
