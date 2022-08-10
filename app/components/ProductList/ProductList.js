const React = require("react");
const PropTypes = require("prop-types");
const ProductCard = require("../ProductCard");

const ProductList = (props) => {
  const { productList, i18n } = props;

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
