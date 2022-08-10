/**
 * Acá deberás implementar un servicio que haga un llamado a la API
 * interna y devuelva un array de productos.
 */
const restclient = require("nordic/restclient")({
  timeout: 5000,
  baseURL: "https://api.mercadolibre.com",
});

class ProductService {
  static getProducts(siteId, name, limit) {
    return restclient
      .get(`/sites/${siteId}/search?q=${name}&limit=${limit}`)
      .then((response) => response.data.results)
      .catch((err) => []);
  }
}

module.exports = ProductService;
