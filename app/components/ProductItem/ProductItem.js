const React = require("react");
const PropTypes = require('prop-types');

function ProductItem({ i18n, title, price, description }) {

    return (
        <li className="card">
            <article>
                <div className="info-products">
                    <h4 className='title-product'>{i18n.gettext(title)}</h4>
                    <h3 className='price'>${price}</h3>
                    <p>{i18n.gettext(description)}</p>
                </div>
            </article>
        </li>
    );  
}

ProductItem.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

module.exports = ProductItem;
