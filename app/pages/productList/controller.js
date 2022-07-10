const React = require('react');
const View = require('./view');
const config = require('nordic/config');
const ImageProvider = require('nordic/image/provider');
const ProductsService = require('../../../services/productsService');
const I18nProvider = require('nordic/i18n/I18nProvider');

const imagesPrefix = config.assets.prefix;

exports.fetchProducts = function fetchProductsList(req, res, next){

    const siteId = req.platform.siteId

    ProductsService.getProducts(siteId, 'celular', 0, 10)
        .then(response =>{
            res.locals.products = response;
            next();
        } )
        .catch(err =>  next(err));
}

exports.render = function render(req, res) {

    const ProductList = props => (
        <I18nProvider i18n={req.i18n}>
            <ImageProvider prefix={imagesPrefix}>
                <View {...props} />
            </ImageProvider> 
        </I18nProvider>
    )

    res.render(ProductList, {
        imagesPrefix,
        translations: req.translations,
        products : res.locals.products
    });
};
