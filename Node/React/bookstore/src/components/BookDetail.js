import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { bookService } from '../services/Books.service';

export const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState([]);

    useEffect(() => {
        bookService.getBook(id).then((data) => setBook(data)).catch((err) => console.log(err));
    }, []);

    return (<div>Detail du livre {book.title} <Link to="/">Revenir à l'accueil</Link></div>);
};