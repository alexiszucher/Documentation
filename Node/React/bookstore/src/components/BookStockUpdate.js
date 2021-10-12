import { useEffect, useRef, useState } from 'react';

import { bookService } from '../services/Books.service';

export const BookStockUpdate = ({stock: initialStock, updateHandler}) => {
    const [color, setColor] = useState();
    const [stock, setStock] = useState(initialStock);
    const timerId = useRef();

    const update = (value) => {
        const normalized = Math.max(stock + value, 0);
        setStock(normalized);

        clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
            updateHandler(normalized);
        }, 500);
    }

    useEffect(() => {
        setColor(stock < 3 ? 'red' : 'black');
    }, [stock]);

    return (
        <i>En stock : <button data-testid="less" onClick={() => update(-1)}>-</button> <span data-testid="stock" style={{color: color}}>{stock}</span><button data-testid="more" onClick={() => update(+1)}>+</button></i>
    )
};