const React = require('react');
const { useState } = React;
const PropTypes = require('prop-types');
const Head = require('nordic/head');
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const { injectI18n } = require('nordic/i18n');
const ProductForm = require('../../components/ProductForm');
const ProductItem = require('../../components/ProductItem');

function View(props) {
  const { i18n, translations } = props;
  const preloadedState = {
    i18n,
    translations
  };

  const [products, setProducts] = useState([]);
  
  return (
    <section>

      <Head>
        <title>
          productForm Page
        </title>
      </Head>

      <Style href="productForm.css" />
      <Script>
        {`
           window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
           console.log('Home page is loaded!');
         `}
      </Script>
      <Script src="vendor.js" />
      <Script src="productForm.js" />

      <h1>productForm</h1>

      <ProductForm i18n={i18n} setProducts={setProducts}/>

      <ol>
        {
          products.length 
          ? products.map(p => (
              <ProductItem 
                key={p.id}
                i18n={i18n}
                title={p.title}
                price={p.price}
                description={p.description}
              />
          ))
          : null
        }
      </ol>
    </section>
  );
} 

View.propTypes = {
  i18n: PropTypes.shape({
    gettext: PropTypes.func.isRequired,
  }).isRequired,
  translations: PropTypes.shape({}),
};

View.defaultProps = {
  translations: {}
};

module.exports = injectI18n(View);