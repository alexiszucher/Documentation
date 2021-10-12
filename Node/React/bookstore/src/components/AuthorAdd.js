import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { authorService } from "../services/Authors.service";

export const AuthorAdd = () => {
    const lastname = useRef(null);
    const firstname = useRef(null);
    const history = useHistory();

    const handleSubmit = (e) => {
        authorService.addAuthor({lastname: lastname.current.value, firstname: firstname.current.value});
        e.preventDefault();
        history.push(
            '/admin', { message: 'Auteur créé'}
        )
    }

    return(<form onSubmit={handleSubmit}>
        Nom de l'auteur <input type="text" ref={lastname} data-testid="lastname" /><br /><br />
        Prénom de l'auteur <input type="text" ref={firstname} data-testid="firstname" /><br /><br />
        <button type="submit" data-testid="submitButton">Créer</button>
    </form>);
};