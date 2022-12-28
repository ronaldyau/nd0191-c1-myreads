import BookShelfChanger from "./BookShelfChanger";
import * as BooksAPI from "./BooksAPI";

const Book = ({ book, onBookMoved }) => {

    const onBookshelfChanged = (e) => {
    book.shelf = e.target.value;
    BooksAPI.update(book, book.shelf).then((response) => {
      onBookMoved(response);
    });
  };

  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks && (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
        )}
        <BookShelfChanger
          shelf={book.shelf}
          onBookshelfChanged={onBookshelfChanged}
        ></BookShelfChanger>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
