const React = require('react');
const { useState } = React;
const PropTypes = require('prop-types');

function ProductForm({ i18n, setProducts }) {
    const initialState = {
        id: '',
        title: '',
        price: '',
        description: ''
    };

    const [productForm, setProductForm] = useState(initialState);
    const [showError, setShowError] = useState(false);

    const handleChange = e => {
        setProductForm({
            ...productForm,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { id, title, price, description } = productForm;
        if(id && title && price && description) {
            setProducts(products => [...products, productForm]);
            setProductForm(initialState);
            setShowError(false);
        } else {
            setShowError(true);
        }
    }

    return (
        <>
        <form onSubmit={e => handleSubmit(e)}>
            <div>
                <label htmlFor="productId">
                    {i18n.gettext('ID')}
                    <input 
                        id="productId" 
                        type="text" 
                        name="id" 
                        value={productForm.id}
                        onChange={e => handleChange(e)}
                    /> 
                </label>
            </div>
            <div>
                <label htmlFor="productName">
                {i18n.gettext('Nombre')}
                    <input 
                        id="productName" 
                        type="text" 
                        name="title" 
                        value={productForm.title}
                        onChange={e => handleChange(e)}
                    /> 
                </label>
            </div>
            <div>
                <label htmlFor="price">
                {i18n.gettext('Precio')}
                    <input 
                        id="price" 
                        type="number" 
                        name="price" 
                        value={productForm.price}
                        onChange={e => handleChange(e)}
                    /> 
                </label>
            </div>
            <div>
                <label htmlFor="description">
                {i18n.gettext('Descripción')}
                    <textarea 
                        id="description" 
                        name="description" 
                        value={productForm.description}
                        onChange={e => handleChange(e)}
                    >
                    </textarea> 
                </label>
            </div>
            <button type="submit">Agregar producto</button>
            {
                showError 
                ? <p>{i18n.gettext('No pueden haber campos vacíos')}</p>
                : null 
            }
        </form>
        </>
    );  
}

ProductForm.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
 setProducts: PropTypes.func
};

module.exports = ProductForm;
