/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');
const getProducts = require('./get-products');

/**
 * Demo router
 */
router.use('/demo', demo);
router.use('/get-products', getProducts);

/**
 * Expose API router
 */
module.exports = router;
