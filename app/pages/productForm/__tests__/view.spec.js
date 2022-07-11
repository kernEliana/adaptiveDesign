const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
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
    })
})