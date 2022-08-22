const React = require("react");
const View = require("./view");
const config = require("nordic/config");
const I18nProvider = require("nordic/i18n/I18nProvider");
const ImageProvider = require("nordic/image/provider");
const productService = require("../../../services//productsService");

exports.fetchProducts = function fetchProducts(req, res, next) {
  const { siteId } = req.platform;
  const { name, limit } = req.query;
  productService
    .getProducts(siteId, name, limit)
    .then((response) => {
      res.locals.products = response;
      next();
    })
    .catch((err) => next(err));
};

exports.render = function render(req, res) {
  const imagesPrefix = config.assets.prefix;
  const ProductList = (props) => (
    <I18nProvider i18n={req.i18n}>
      <ImageProvider prefix={imagesPrefix}>
        <View {...props} />
      </ImageProvider>
    </I18nProvider>
  );

  /**
   * Render View
   */
  res.render(ProductList, {
    products: res.locals.products,
    translations: req.translations,
    imagesPrefix,
    size: req.device,
  });
};
