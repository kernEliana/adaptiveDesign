const React = require("react");
const Image = require('nordic/image');

function ProductList({products}) {
  return (
    <ol>
      {products.length ? (
        products.map((prod) => {
          const { id, title, thumbnail, price } = prod;

          return (
            <li key={id} className="card">
              <div className="img">
                <Image src={thumbnail} alt={title} lazyload="off" />
              </div>
              <div className="info-products">
                <h4 className="price">${price}</h4>
                <h3 className="title-product">{title} </h3>
              </div>
            </li>
          );
        })
      ) : (
        <h4>No se encontraron productos</h4>
      )}
    </ol>
  );
}

module.exports = ProductList;
