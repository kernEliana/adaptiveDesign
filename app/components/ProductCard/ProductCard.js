const React = require("react");
const PropTypes = require('prop-types');
const Image = require('nordic/image');

function ProductList({ i18n, id, title, price, thumbnail }) {

    return (
        <li key={id} className="card">
            <article>
                <figure className="img">
                    <Image src={thumbnail} alt={i18n.gettext(title)} lazyload="off" />
                </figure>
                <div className="info-products">
                    <h4 className='price'>${price}</h4>
                    <h3 className='title-product'>{i18n.gettext(title)} </h3>
                </div>
            </article>
        </li>
    );  
}

ProductList.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired
};

module.exports = ProductList;
