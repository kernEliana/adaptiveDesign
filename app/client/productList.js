/**
 * Styles
 */

/**
 * Module dependencies
 */
const React = require("react");
const hydrate = require("nordic/hydrate");
const I18n = require("nordic/i18n");
const I18nProvider = require("nordic/i18n/I18nProvider");
const ImageProvider = require("nordic/image/provider");
const ProductListView = require("../pages/productList/view");

/**
 * Get server state
 */
const { products, translations, imagesPrefix } = window.__PRELOADED_STATE__;

/**
 * i18n
 */
const i18n = new I18n({ translations });

/**
 * Mount DemoView on client
 */
hydrate(
  <I18nProvider i18n={i18n}>
    <ImageProvider prefix={imagesPrefix}>
      <ProductListView products={products}/>
    </ImageProvider>
  </I18nProvider>,
  document.getElementById("root-app")
);
