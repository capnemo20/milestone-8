import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first =11;
    const second = 12;
    const result = multiply(first, second)
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>total multiply: {result}</p>
        </div>
    );
};

export default Shoes;