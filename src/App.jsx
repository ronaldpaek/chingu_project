import axios from 'axios'
import { useState } from 'react'
import Book from './components/Book'

const App = () => {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')

    const getBooks = async (search) => {
        const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='
        const query = search.split(' ').join('+')
        const index = 0
        const url = `${baseURL}${query}&index=${index}`

        try {
            const response = await axios.get(url)
            setBooks(response.data.items)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='flow-content'>
        <header className='header container flow-content'>
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
        </header>
        <div className='books container split'>
            {books?.map(book => <Book key={book.id} {...book.volumeInfo} />)}
        </div>
    </div>
  )
}

export default App
