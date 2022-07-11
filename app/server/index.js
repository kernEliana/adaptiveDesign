/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const config = require('nordic/config');
const { layoutMiddleware } = require('nordic/layout');
const i18nMiddleware = require('nordic/i18n/middleware');
const polyfillsMiddleware = require('nordic/script/polyfills-middleware');
/**
 * Set up mocks
 */
require('../../mocks');

/**
 * Routers
 */
const demoRoute = require('../pages/demo');
const productListRoute = require('../pages/productList');
const productFormRoute = require('../pages/productForm');

/**
 * Use global middlewares
 */
router.use(layoutMiddleware());
router.use(i18nMiddleware(config.i18n));
router.use(polyfillsMiddleware(config.polyfillLimits));

/**
 * Redirect
 */
router.get('/', (req, res) => res.redirect(`${config.ragnar.basePath}demo`));

/**
 * Mount routers
 */
router.use('/demo', demoRoute);
router.use('/productList', productListRoute);
router.use('/productForm', productFormRoute);

/**
 * Expose router
 */
module.exports = router;
