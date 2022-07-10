const React = require('react');
const ProductList = require('..');
const { render, screen } = require('@testing-library/react');
const products = require('./sample.json');

describe('El componente ProductList', () => {
    let component;
    const i18n = { gettext: text => text };

    beforeEach(() => {
        component = render(<ProductList i18n={i18n} products={products}/>);
    });

    test('1) Renderiza', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();
    });

    test('2) Renderiza una lista de productos recibida por props', () => {
        const productList = screen.getAllByRole('listitem');
        const motorola = screen.getByText(/motorola/i);
        expect(productList).toHaveLength(6);
        expect(motorola).toBeInTheDocument();
    });
});