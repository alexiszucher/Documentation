import { useEffect, useState } from "react";

import {bookService} from "../services/Books.service";
import Book from "./Book";

import styles from '../styles/BooksList.scss';

export const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getBooks().then((data) => setBooks(data)).catch((err) => console.log(err));
    }, []);

    return (<div className={styles.list}>
        {books.map((book) => (
            <Book key={book.id} book={book} />
        ))}

    </div>);
}