import { useState, useEffect } from 'react';

const SearchBar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter&index=2")
            .then(response => response.json())
            .then(data => console.log(data))
    });

  return (
    <div className='search'>
        <input className='search__input' type="text" placeholder="Search for a book" />
        <button className='btn'>Search</button>
    </div>
  )
}

export default SearchBar;

/**
 * book cover
 * book title
 * author
 * publisher
 * see book id
 */
