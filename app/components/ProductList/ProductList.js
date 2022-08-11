const React = require("react");
const PropTypes = require("prop-types");
const ProductCard = require("../ProductCard");
const { useState, useEffect, useRef } = React;

const ProductList = (props) => {
  const { productList, i18n } = props;

  const [favList, setFavList] = useState([]);

  const addFav = (id) => {
    const product =  productList.find(product => product.id === id)

    setFavList(favList => (
      [...favList , product]
    ));
  }

  const removeFav = (id) => {
    const products =  favList.filter(product => product.id !== id)

    setFavList(products);
  }

  console.log(favList);

  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {productList?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              id={product.id}
              thumbnail={product.thumbnail}
              price={product.price}
              i18n={i18n}
              addFav={addFav}
              removeFav={removeFav}
            />
          );
        })}
      </ul>
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

module.exports = ProductList;
