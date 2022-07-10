const React = require('react');
const Head = require('nordic/head');
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const ProductList = require('../../components/ProductList')

function View(props) {
  const { i18n, translations, imagesPrefix, products } = props;
  const preloadedState = {
    i18n,
    translations,
    imagesPrefix,
    products
  };
  
  return (
    <section>

      <Head>
        <title>
          producList Page
        </title>
      </Head>

      <Style href="productList.css" />
      <Script>
        {`
           window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
           console.log('Home page is loaded!');
         `}
      </Script>
      <Script src="vendor.js" />
      <Script src="productList.js" />

      <h1>productList</h1>
      <ProductList i18n={i18n} products={products}/>
    </section>
  );
}


module.exports = injectI18n(View);
