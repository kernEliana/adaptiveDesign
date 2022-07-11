const React = require('react');
const { useState } = React;
const PropTypes = require('prop-types');

function ProductForm({ i18n, setProducts }) {

    function handleSubmit(e) {
        e.preventDefault();
        const product = {
            
        };

        setProducts(products => [...products, product]);
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div>
                <label htmlFor="productId">
                    {i18n.gettext('ID')}
                    <input id="productId" type="text" /> 
                </label>
            </div>
            <div>
                <label htmlFor="productName">
                {i18n.gettext('Nombre')}
                    <input id="productName" type="text" /> 
                </label>
            </div>
            <div>
                <label htmlFor="price">
                {i18n.gettext('Precio')}
                    <input id="price" type="number" /> 
                </label>
            </div>
            <div>
                <label htmlFor="description">
                {i18n.gettext('Descripción')}
                    <textarea id="description"></textarea> 
                </label>
            </div>
            <button type="submit">Agregar producto</button>
        </form>
    );  
}

ProductForm.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
 setProducts: PropTypes.func
};

module.exports = ProductForm;
