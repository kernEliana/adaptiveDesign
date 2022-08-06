const React = require('react');
const ProductList = require('..');
const { render, screen, act, fireEvent } = require('@testing-library/react');
const mockProducts = require('./sample.json');

/**
 * NOTA: A medida que avancemos con las ejercitaciones, es importante que actualices
 * la snapshot para que el primer test siga pasando. Esto lo podés hacer borrando la
 * carpeta /__tests__/snapshots de este componente o, si estás corriendo los tests con el 
 * comando `npm run test:unit:watch <nombreComponente>`, simplemente apretar la tecla
 * `u` cuando terminen de correr los tests para "updatear" la snapshot.
 */

describe('Ejercicio 1 - El componente ProductList', () => {
    let component;
    const i18n = { gettext: text => text };

    beforeEach(() => {
        component = render(<ProductList i18n={i18n} products={mockProducts}/>);
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

xdescribe('Ejercicio 2 - El componente ProductList', () => {
    let component;
    const i18n = { gettext: text => text };

    beforeEach(() => {
        component = render(<ProductList i18n={i18n} products={[]}/>);
    });

    test('3) Renderiza el string `No se encontraron productos.` si la API no devuelve productos', () => {
        const msg = screen.getByText(/no se encontraron productos/i);
        expect(msg).toBeInTheDocument();
    });
});

xdescribe('Ejercicio 3 - El componente ProductList', () => {
    let component;
    const i18n = { gettext: text => text };
    const mockConsole = jest.spyOn(console, "log");

    beforeEach(() => {
        component = render(<ProductList i18n={i18n} products={mockProducts}/>);
    });

    test('4) Renderiza una lista de productos, cada uno con un botón para agregar a favoritos', () => {
        const buttons = screen.getAllByText(/agregar a favoritos/i, { selector: 'button' });

        expect(buttons.length).toBe(6);
    });

    test('5) Permite agregar un producto de la lista al array de favoritos', () => {
        act(() => {
            const button = screen.getAllByText(/agregar a favoritos/i, { selector: 'button' })[0];
            fireEvent.click(button);
        });
        
        expect(mockConsole).toHaveBeenLastCalledWith(["MLA1131686227"]);
    });

    test('6) Luego de haber sido agregado, renderiza un botón que permite quitar el producto del array de favoritos', () => {
        act(() => {
            const addButton = screen.getAllByText(/agregar a favoritos/i, { selector: 'button' })[0];
            fireEvent.click(addButton);
        });

        const deleteButton = screen.getAllByText(/quitar de favoritos/i, { selector: 'button' })[0];
        expect(deleteButton).toBeInTheDocument();
    }); 

    test('7) El botón efectivamente elimina el elemento del array de favoritos', () => {
        act(() => {
            const addButton = screen.getAllByText(/agregar a favoritos/i, { selector: 'button' })[0];
            fireEvent.click(addButton);
        });

        act(() => {
            const deleteButton = screen.getAllByText(/quitar de favoritos/i, { selector: 'button' })[0];
            fireEvent.click(deleteButton);
        });
        
        expect(mockConsole).toHaveBeenLastCalledWith([]);
    });
});