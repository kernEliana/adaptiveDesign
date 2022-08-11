const React = require("react");
const PropTypes = require("prop-types");
const Image = require('nordic/image');
const { useState, useEffect, useRef } = React;


const ProductCard = (props) => {
  const { title, id, thumbnail, price, i18n, addFav, removeFav } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFav= (id) => {
    !isFav ? addFav(id) : removeFav(id);
    setIsFav(isFav => !isFav);
  }


  return (
    <>
              <li key={id}>
                <h3>{i18n.gettext(title)}</h3>
                  <Image
                    src={thumbnail}
                    alt={i18n.gettext(title)}
                    lazyload="off"
                  />
                <p
                  style={{
                    backgroundColor: "#ff8d3b",
                    borderRadius: "5px",
                    textAlign: "center",
                    width: "75px",
                  }}
                >
                  ${price}
                </p>
                <button aria-label="Agregar producto a favoritos" onClick={(e) => handleFav(id)}>{!isFav ? 'Agregar a favoritos' : 'Eliminar de favoritos'}</button>
              </li>
    </>
  );
};
ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
module.exports = ProductCard;
