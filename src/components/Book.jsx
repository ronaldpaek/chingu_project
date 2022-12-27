
const Book = (props) => {
  return (
    <div className='book'>
        <img src={props.imageLinks?.thumbnail} alt="The book cover" />
        <h2 className='book__title'>{props.title}</h2>
        <p className='book__author'>{props.authors[0]}</p>
        <p className='book__publisher'>{props.publisher}</p>
        <a href="#" className='btn'>See this book</a>
    </div>
  )
}

export default Book
