import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BookStockUpdate } from './BookStockUpdate';

import {bookService} from '../services/Books.service';
import { Link } from 'react-router-dom';

function Book({book}) {

    function updateStock(value) {
        bookService.updateStock(book.id, value).then((book) => {
            console.log('Value change !');
        }).catch((err) => {
            console.error('Erreur : ', err);
        });
    }

    return (<div>
        <h2><span data-testid='title'>{book.title}</span> de <span data-testid='author'>{book.author}</span></h2>
        <p>{book.resume}</p>
        <BookStockUpdate stock={book.stock} updateHandler={updateStock} />
        <Link to={`/books/${book.id}`}>Détail du livre</Link>
    </div>);
}

Book.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string
    }).isRequired
};

export default Book;