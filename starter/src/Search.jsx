import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Book from "./Book";

const Search = ({onBookMoved}) => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    const [searchBooksResults, setSearchBooksResults] = useState([]);

    useEffect(() => {
        if (!query) {
          setSearchBooksResults([]);
          return;
        }
        const searchBooks = setTimeout(() => {
          BooksAPI.search(query, 5)
          .then((results) => {
            if (!results.error) {
                setSearchBooksResults(results);
            } else {
                setError(results.error);
                setSearchBooksResults([]);
            }
          })
        }, 500)
    
        return () => clearTimeout(searchBooks)
      }, [query]);

    const onSearchUpdated = (e) => {
        setQuery(e.target.value);
        if (error) {
            setError('');
        }
    }

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to="/"
              className="close-search"
              >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input onChange={onSearchUpdated}
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            {error ? 
            (<h1>Error: {error}. Try searching something else.</h1>) 
            :
            (<ol className="books-grid">
                {searchBooksResults && searchBooksResults.map(book => (
                    <Book key={book.id} book={book} onBookMoved={onBookMoved}/>
                ))}
            </ol>)  
            }
          </div>
        </div>

    )
}

export default Search