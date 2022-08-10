const React = require("react");
const PropTypes = require("prop-types");
const Image = require('nordic/image');

const ProductCard = (props) => {
  const { title, id, thumbnail, price, i18n } = props;
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
