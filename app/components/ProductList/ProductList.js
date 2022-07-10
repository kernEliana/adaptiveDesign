const React = require("react");
const PropTypes = require('prop-types');
const ProductCard = require('../ProductCard');

function ProductList({ i18n, products }) {
  return (
    <ol>
    {
      products.length
        ? products.map(p => {
          const { id, title, thumbnail, price } = p;

          return (
            <ProductCard 
              i18n={i18n}
              id={id} 
              title={title}
              thumbnail={thumbnail}
              price={price}
            />
          )
        })
        : <h4>{i18n.gettext('No se encontraron productos.')}</h4>
    }
    </ol>    
  );
}

ProductList.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
  products: PropTypes.array
};

ProductList.defaultProps = {
  products: []
}

module.exports = ProductList;
