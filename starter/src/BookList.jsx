import { Link } from 'react-router-dom';
import Bookshelf from "./Bookshelf";

const BookList = ({ shelves, onBookMoved }) => {  
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf title={'Currently Reading'} shelf={shelves.currentlyReading} onBookMoved={onBookMoved}/>
                    <Bookshelf title={'Want to Read'} shelf={shelves.wantToRead} onBookMoved={onBookMoved}/>
                    <Bookshelf title={'Read'} shelf={shelves.read} onBookMoved={onBookMoved}/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
       </div>
    )
}

export default BookList;