import { useState } from "react";
import { useForm } from "react-hook-form";

import { bookService } from "../services/Books.service";

import '../styles/BookAdd.scss';

export const BookAdd = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const submit = (book) => {
        bookService.addBook({title: book.title, author: book.author, resume: book.resume, stock: book.stock});
    }

    return(<div>
    <form onSubmit={handleSubmit(submit)}>
        Titre <input type="text" {...register('title', { required: true, minLength: 2 })} data-testid="title" />
        {errors.title && <div className="error">Ce champ est requis ! {errors.title?.message}</div>}<br /><br />
        Auteur <input type="text" {...register('author', { required: true, minLength: 2 })} data-testid="author" /><br /><br />
        Description <input type="text" {...register('resume', { minLength: 5 })} data-testid="resume" /><br /><br />
        Stock <input type="number" {...register('stock', { required: true, min: 0 })} data-testid="stock" /><br /><br />
        <button type="submit" data-testid="submitButton">Créer</button>
    </form></div>);
};