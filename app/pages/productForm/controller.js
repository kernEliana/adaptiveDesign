const React = require('react');
const View = require('./view');
const I18nProvider = require('nordic/i18n/I18nProvider');

exports.render = function render(req, res) {

    const ProductList = props => (
        <I18nProvider i18n={req.i18n}>
            <View {...props} />
        </I18nProvider>
    );

    res.render(ProductList, {
        translations: req.translations,
    });
};
