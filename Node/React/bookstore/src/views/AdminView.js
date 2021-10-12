import { BrowserRouter as Router, Link, Route, Switch, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import { AuthorAdd } from "../components/AuthorAdd";
import { BookAdd } from "../components/BookAdd";

import '../styles/AdminView.scss';

export const AdminView = () => {
    const location = useLocation();

    return (<>
        <nav className="AdminView">
            <Link style={{ padding: '1rem' }} to="/admin/book/add">Ajouter un livre</Link>
            <Link style={{ padding: '1rem' }} to="/admin/author/add">Ajouter un auteur</Link>
        </nav>
        <Switch>
            <Route path='/admin/book/add' component={BookAdd} />
            <Route path='/admin/author/add' component={AuthorAdd} />
        </Switch> 
        <b className="success">{location.state?.message}</b>
    </>);
}