
const Book = (props) => {
  return (
    <div className='book split'>
        <img src={
            !props.imageLinks
                ? 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
                : props.imageLinks?.thumbnail
                } alt="A book cover" />
        <div className="flow-content">
            <h2 className='book__title'>{props?.title}</h2>
            <p className='book__author'>{props?.authors[0]}</p>
            <p className='book__publisher'>{props?.publisher}</p>
            <a href={props?.infoLink} className='btn'>See this book</a>
        </div>
    </div>
  )
}

export default Book
