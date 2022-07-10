const React = require('react');
const ProductList = require('..');
const { render, screen } = require('@testing-library/react');
const product = require('./sample.json');

describe('El componente ProductCard', () => {
    let component;
    const i18n = { gettext: text => text };
    const { id, title, price, thumbnail } = product;

    beforeEach(() => {
        component = render(
            <ProductList 
                i18n={i18n} 
                id={id}
                title={title}
                price={price}
                thumbnail={thumbnail}
            />);
    });

    test('1) Renderiza', () => {
        const { asFragment } = component; 
        expect(asFragment()).toMatchSnapshot();
    });

    test('2) Renderiza un producto con su título, precio e imagen', () => {
        const title = screen.getByText(/samsung galaxy/i);
        const price = screen.getByText(/38999/i);
        const img = screen.getByRole('img');
        expect(title).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    })
});