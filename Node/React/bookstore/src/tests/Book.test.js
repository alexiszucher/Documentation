import { render, screen, prettyDOM, getByText } from '@testing-library/react';
import Book from '../components/Book';

const mockBook = {
  title: 'TITLE',
  author: 'AUTHOR',
  resume: 'RESUME'
}

// Verify title and author in the component Book transmit by props
test('test book title', () => {

  // Get values of every test id of the component
  const {getByTestId} = render(<Book book={mockBook} />);

  // Test if title is in the document and the title is the title value of my book mock
  const titleElement = screen.getByTestId('title');
  expect(titleElement).toBeInTheDocument();
  expect(getByText(titleElement, mockBook.title));

  // Test if author is in the document and the author is the author value of my book mock
  const authorElement = screen.getByTestId('author');
  expect(authorElement).toBeInTheDocument();
  expect(getByText(authorElement, mockBook.author));
});
