const React = require('react');
const ProductCard = require('..');
const { render, screen } = require('@testing-library/react');
const mockProduct = require('./sample.json');

describe('Ejercicio 1 - El componente ProductCard', () => {
    let component;
    const i18n = { gettext: text => text };
    const { id, title, price, thumbnail } = mockProduct;

    beforeEach(() => {
        component = render(
            <ProductCard 
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
    });
});
