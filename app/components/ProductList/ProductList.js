const React = require("react");
const Image = require('nordic/image');

function ProductList({ i18n, products }) {
  return (
    <ol>
    {
      products.length
        ? products.map(p => {
          const { id, title, thumbnail, price, permalink } = p;

          return (
            <li key={id} className="card">
              <article>
                <a href={permalink}>
                  <figure className="img">
                    <Image src={thumbnail} alt={i18n.gettext(title)} lazyload="off" />
                  </figure>
                </a>
                <div className="info-products">
                  <h4 className='price'>${price}</h4>
                  <h3 className='title-product'>{i18n.gettext(title)} </h3>
                </div>
              </article>
            </li>
          )
        })
        : <h4>{i18n.gettext('No se encontraron productos.')}</h4>
    }
    </ol>    
  );
}

module.exports = ProductList;
