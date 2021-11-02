import axios from 'axios';

// const baseUrl = `${process.env.REACT_APP_BASEURL}/books`

export const bookService = {
    addBook: (book) => axios.post(`http://localhost:4000/books`, book),
    getBooks: () => axios.get(`http://localhost:4000/books`).then((response) => response.data).catch((err) => console.log(err)),
    getBook: (id) => axios.get(`http://localhost:4000/books/${id}`).then((response) => response.data),
    updateStock: (id, data) => axios.patch(`http://localhost:4000/books/${id}`, { stock: data })
}
