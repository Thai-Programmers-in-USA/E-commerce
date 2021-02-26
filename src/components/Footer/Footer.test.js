import React from 'react';
// render -> create virtual DOM 
import {render, fireEvent, getAllByAltText} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

// descibe which test that we will test
describe('Footer', () => {
    test('Render Footer', () => {
        const {getByTestId, getAllByTestId} = render(<Footer />);
        // const navigateTitle = getByTestId("navigate-title");
        // expect(navigateTitle).toBeInTheDocument();


        // expect(getByTestId("navigate-title")).toBeInTheDocument();
        // expect(getByTestId("category-title")).toBeInTheDocument();
        // expect(getByTestId("followUs-title")).toBeInTheDocument();
        // expect(getByTestId("subscribe-title")).toBeInTheDocument(); 
        const footerTitle = getAllByTestId('footer-title');
        
        expect(footerTitle.length).toBe(5); 
    })
})