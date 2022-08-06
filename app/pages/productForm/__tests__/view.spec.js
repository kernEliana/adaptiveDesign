const React = require('react');
const { render, screen, fireEvent, act, waitFor } = require('@testing-library/react');
const ProductForm = require('../view');

describe('La View de ProductForm', () => {
    let component;
    const i18n = { gettext: text => text };

    beforeEach(() => {
        component = render(<ProductForm i18n={i18n}/>)
    });

    test('1) Renderiza', () => {
        const { asFragment } = component;
        expect(asFragment()).toMatchSnapshot();
    });

    test('2) Renderiza un formulario con los campos necesarios para agregar un producto', async () => {
        const id = screen.getByLabelText(/id/i);
        const name = screen.getByLabelText(/nombre/i);
        const price = screen.getByLabelText(/precio/i);
        const description = screen.getByLabelText(/descripción/i);

        expect(id).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    test('3) Renderiza un botón para agregar el producto a la lista', () => {
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    test('4) Permite agregar productos', async() => {
        const id = screen.getByLabelText(/id/i);
        const name = screen.getByLabelText(/nombre/i);
        const price = screen.getByLabelText(/precio/i);
        const description = screen.getByLabelText(/descripción/i);
        const button = screen.getByRole('button');

        fireEvent.change(id, { target: { value: 'MLA34235' }});
        fireEvent.change(name, { target: { value: 'Sony' }});
        fireEvent.change(price, { target: { value: '345476584' }});
        fireEvent.change(description, { target: { value: 'TV 353 pulgadas' }});
        fireEvent.click(button);

        const titleP = await screen.findByText(/sony/i);
        const priceP = await screen.findByText(/345476584/i);
        const descriptionP = await screen.findByText(/tv 353 pulgadas/i);
        
        expect(titleP).toBeInTheDocument();
        expect(priceP).toBeInTheDocument();
        expect(descriptionP).toBeInTheDocument();
    });

    test('5) Valida los campos del formulario', async() => {
        const button = screen.getByRole('button');
        
        const name = screen.getByLabelText(/nombre/i);
        const price = screen.getByLabelText(/precio/i);
        
        fireEvent.change(name, { target: { value: 'Sony' }});
        fireEvent.change(price, { target: { value: '345476584' }});
        fireEvent.click(button);

        const errorMsg = await screen.findByText(/no pueden haber campos vacíos/i);
        expect(errorMsg).toBeInTheDocument();
    });

    test('BONUS: Al agregar un producto, los campos del formulario deberán quedar vacíos', async() => {
        const id = screen.getByLabelText(/id/i);
        const name = screen.getByLabelText(/nombre/i);
        const price = screen.getByLabelText(/precio/i);
        const description = screen.getByLabelText(/descripción/i);
        const button = screen.getByRole('button');

        fireEvent.change(id, { target: { value: 'MLA34235' }});
        fireEvent.change(name, { target: { value: 'Sony' }});
        fireEvent.change(price, { target: { value: '345476584' }});
        fireEvent.change(description, { target: { value: 'TV 353 pulgadas' }});
        fireEvent.click(button);

        expect(id.value).toBe('');
        expect(name.value).toBe('');
        expect(price.value).toBe('');
        expect(description.value).toBe('');
    });
});