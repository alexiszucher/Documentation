import { render, screen, getByText } from '@testing-library/react';
import App from './App';

jest.mock('./components/BooksList', () => ({
  BooksList: (props) => <div data-testid="books-list" />
}));

// Verify if BookList is in the component App
test('test bookslist in App', () => {
  const { getByTestId } = render(<App />);

  const bookElement = getByTestId('books-list');
  expect(bookElement).toBeInTheDocument();
});
