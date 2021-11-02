import { render, screen, prettyDOM, getByText } from '@testing-library/react';

import { bookService } from '../services/Books.service';
import {BooksList} from '../components/BooksList';


const mockBooks = [
    {
        id: 1,
        title: 'TITLE1',
        author: 'AUTHOR1'
    },
    {
        id: 2,
        title: 'TITLE2',
        author: 'AUTHOR2'
    }
]

jest.mock('../services/Books.service', () => ({
    bookService: {
        getBooks: () => Promise.resolve(mockBooks)
    }
}));

// Mock to verify if component Book is in BookList
jest.mock('../components/Book', () => ({
    Book: (props) => <div data-testid='book' />
}));

test('test books list', async () => {
    const { findAllByTestId } = render(<BooksList />);

    const bookElements = await findAllByTestId('book');
    expect(bookElements.length).toBe(mockBooks.length);

});
