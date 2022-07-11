const React = require("react");
const PropTypes = require('prop-types');
const Image = require('nordic/image');

function ProductCard({ i18n, id, title, price, thumbnail, handleAdd, handleDelete, isFavorite }) {

    return (
        <li className="card">
            <article>
                <figure className="img">
                    <Image src={thumbnail} alt={i18n.gettext(title)} lazyload="off" />
                </figure>
                <div className="info-products">
                    <h4 className='title-product'>{i18n.gettext(title)} </h4>
                    <h3 className='price'>${price}</h3>
                </div>
                {
                    !isFavorite
                    ? <button onClick={() => handleAdd(id)}>{i18n.gettext('Agregar a favoritos')}</button>
                    : <button onClick={() => handleDelete(id)}>{i18n.gettext('Quitar de favoritos')}</button>
                }
            </article>
        </li>
    );  
}

ProductCard.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

module.exports = ProductCard;
