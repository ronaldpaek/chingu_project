import { useState, useEffect } from 'react'
import axios from 'axios'

import Book from './components/Book'

const App = () => {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
    const [totalBooks, setTotalBooks] = useState(0)
    const [pageIndex, setPageIndex] = useState(0)


    const getBooks = async () => {
        const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='
        const query = search.split(' ').join('+')
        const index = pageIndex * 10
        const url = `${baseURL}${query}&startIndex=${index}`

        try {
            const response = await axios.get(url)
            const totalItems = response.data.totalItems

            if (totalItems === 0) return

            setTotalBooks(totalItems)
            setBooks(response.data.items)

        } catch (error) {
            console.log(error)
        }
    }


    const handlePrevPage = (index) => {
        if (index === 0) return

        setPageIndex(prevPageIndex => prevPageIndex - 1)
        getBooks()
    }

    const handleNextPage = (index) => {
        if (index === Math.ceil(totalBooks / 10)) return

        setPageIndex(prevPageIndex => prevPageIndex + 1)
        getBooks()
    }

  return (
    <div className=''>
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
                    disabled={!search.length}
                    onClick={() => getBooks()}
                >Search</button>
            </div>
        </header>
        <div className='books container split'>
            {books?.map(book => <Book key={book.id} {...book.volumeInfo} />)}
        </div>
        {books.length !== 0 && <div className='page-nav'>
            <a className='btn prev-page' onClick={() => handlePrevPage(pageIndex)}>&lt;</a>
            <a className='btn next-page' onClick={() => handleNextPage(pageIndex)}>&gt;</a>
        </div>}
    </div>
  )
}

export default App
