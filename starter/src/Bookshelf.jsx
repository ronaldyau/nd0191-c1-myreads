import Book from './Book';

const Bookshelf = ({title, shelf, onBookMoved}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {shelf && shelf.map(book => {
                    return (
                        <li key={book.id}>
                            <Book book={book} onBookMoved={onBookMoved}></Book>
                        </li>
                    )
                })}
              </ol>
            </div>
      </div>
    )
}

export default Bookshelf;