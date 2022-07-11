const React = require("react");
const PropTypes = require('prop-types');
const ProductCard = require('../ProductCard');
const { useState } = React;

function ProductList({ i18n, products }) {
  const [favorites, setFavorites] = useState([]);

  console.log(favorites);

  return (
    <ol>
    {
      products.length
        ? products.map(p => {
          const { id, title, thumbnail, price } = p;

          return (
            <ProductCard 
              i18n={i18n}
              key={id}
              id={id} 
              title={title}
              thumbnail={thumbnail}
              price={price}
              isFavorite={favorites.some(f => f === id)}
              setFavorites={setFavorites}
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
