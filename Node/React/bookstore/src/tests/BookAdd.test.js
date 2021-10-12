import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookAdd } from "../components/BookAdd";
import { bookService } from "../services/Books.service";

describe('Mode TDD', () =>{
    it('Should render component add book', () => {
        render(<BookAdd />);
    });

    it('Should render form field', () => {
        const {getByTestId} = render(<BookAdd />);
        
        const titleElement = getByTestId('title');
        expect(titleElement).toBeInTheDocument();

        const authorElement = getByTestId('author');
        expect(authorElement).toBeInTheDocument();

        const resumeElement = getByTestId('resume');
        expect(resumeElement).toBeInTheDocument();

        const stockElement = getByTestId('stock');
        expect(stockElement).toBeInTheDocument();
    });

    it('Should render submit button of the form', () => {
        const { getByTestId } = render(<BookAdd />);

        const submitButtonElement = getByTestId('submitButton');
        expect(submitButtonElement).toBeInTheDocument();
    });

    it('Should call function add book on book service object', () => {

        const mockBook = {
            title: 'TITLE',
            author: 'AUTHOR',
            resume: 'RESUME',
            stock: 'STOCK'
        }

        jest.mock('../services/Books.service', () => ({
            bookService: {
                addBook: () => Promise.resolve()
            }
        }));

        const { getByTestId } = render(<BookAdd />);

        const submitButtonElement = getByTestId('submitButton');
        userEvent.click(submitButtonElement);
        expect(bookService.addBook).toHaveBeenCalled();
    });
});