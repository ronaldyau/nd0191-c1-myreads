const BookShelfChanger = ( {shelf, onBookshelfChanged}) => {
    return (
        <div className="book-shelf-changer">
            <select value={shelf || 'none'} onChange={onBookshelfChanged}>
                <option value="move" disabled>
                Move to...
                </option>
                (<option value="currentlyReading" defaultValue={shelf === 'currentlyReading'}>Currently Reading</option>)
                (<option value="wantToRead" defaultValue={shelf === 'wantToRead'}>Want to Read</option>)
                (<option value="read" defaultValue={shelf === 'read'}>Read</option>)
                (<option value="none" defaultValue={shelf === 'none'}>None</option>)
            </select>
        </div>
    )
}

export default BookShelfChanger;