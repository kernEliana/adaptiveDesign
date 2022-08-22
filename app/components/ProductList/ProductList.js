const React = require("react");
const PropTypes = require("prop-types");
const ProductCard = require("../ProductCard");
const { useState, useEffect, useRef } = React;

const ProductList = (props) => {
  const { productList, i18n, size} = props;
  const { type } = size

  const [favList, setFavList] = useState([]);

  let deviceSize ='ul-large'
  if(type === 'tablet') deviceSize ='ul-medium'
  if(type === 'mobile') deviceSize ='ul-small'
  

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
  console.log('size',size)

  return (
    <>
      {/* <ul style={{ listStyleType: "none" }}> */}
      <ul className={deviceSize}>
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
  ).isRequired
};

module.exports = ProductList;
