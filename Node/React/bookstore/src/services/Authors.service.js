import axios from 'axios';

// const baseUrl = `${process.env.REACT_APP_BASEURL}/books`;

export const authorService = {
    addAuthor: (author) => axios.post(`http://localhost:4000/authors`, author)
}
