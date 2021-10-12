import { render, screen, prettyDOM, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Book from '../components/Book';
import { BookStockUpdate } from '../components/BookStockUpdate';

const mockUpdate = jest.fn();

// Verify title and author in the component Book transmit by props
test('Should render book value', () => {

  // Get values of every test id of the component
  const {getByTestId} = render(<BookStockUpdate stock={20} updateHandler={mockUpdate} />);

  // Test if title is in the document and the title is the title value of my book mock
  const lessElement = screen.getByTestId('less');
  expect(lessElement).toBeInTheDocument();

  // Test if author is in the document and the author is the author value of my book mock
  const moreElement = screen.getByTestId('more');
  expect(moreElement).toBeInTheDocument();

  const stockElement = screen.getByTestId('stock');
  expect(stockElement).toBeInTheDocument();
  expect(stockElement).toHaveTextContent(20);
});



// Verify title and author in the component Book transmit by props
test('Should call the update handler with right argument', () => {
    jest.useFakeTimers();

    // Get values of every test id of the component
    const {getByTestId} = render(<BookStockUpdate stock={20} updateHandler={mockUpdate} />);
  
    // Test if title is in the document and the title is the title value of my book mock
    const lessElement = screen.getByTestId('less');
    userEvent.click(lessElement);
    jest.advanceTimersByTime(1000);
    
    expect(mockUpdate).toHaveBeenCalledWith(19);
  
    // Test if author is in the document and the author is the author value of my book mock
    const moreElement = screen.getByTestId('more');
    userEvent.click(moreElement);
    est.advanceTimersByTime(1000);

    expect(mockUpdate).toHaveBeenCalledWith(20);
});


  // Verify title and author in the component Book transmit by props
test('Should have red color stock if less than 3', () => {

    // Get values of every test id of the component
    const {getByTestId} = render(<BookStockUpdate stock={2} updateHandler={mockUpdate} />);
  
    // Test if title is in the document and the title is the title value of my book mock
    const stockElement = screen.getByTestId('stock');
    expect(stockElement).toHaveStyle({color: 'red'});
});

    // Verify title and author in the component Book transmit by props
test('Should have black color stock if more than 3', () => {

    // Get values of every test id of the component
    const {getByTestId} = render(<BookStockUpdate stock={8} updateHandler={mockUpdate} />);
  
    // Test if title is in the document and the title is the title value of my book mock
    const stockElement = screen.getByTestId('stock');
    expect(stockElement).toHaveStyle({color: 'black'});
});