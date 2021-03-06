/**
 * Otreeba Open Cannabis API
 * This is an open, canonical database of cannabis seed companies, strains, brands, products, retailers, and studies from [Otreeba](https://otreeba.com). It is written on the OpenAPI Specification AKA Swagger. You can find out more about the Open API Initiative at [https://www.openapis.org/](https://www.openapis.org), or more info on Swagger at [http://swagger.io/](http://swagger.io/).
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@otreeba.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Brand', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/InlineResponse2009'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Brand'), require('../model/InlineResponse2005'), require('../model/InlineResponse2006'), require('../model/InlineResponse2007'), require('../model/InlineResponse2008'), require('../model/InlineResponse2009'));
  } else {
    // Browser globals (root is window)
    if (!root.OtreebaOpenCannabisApi) {
      root.OtreebaOpenCannabisApi = {};
    }
    root.OtreebaOpenCannabisApi.BrandsApi = factory(root.OtreebaOpenCannabisApi.ApiClient, root.OtreebaOpenCannabisApi.Brand, root.OtreebaOpenCannabisApi.InlineResponse2005, root.OtreebaOpenCannabisApi.InlineResponse2006, root.OtreebaOpenCannabisApi.InlineResponse2007, root.OtreebaOpenCannabisApi.InlineResponse2008, root.OtreebaOpenCannabisApi.InlineResponse2009);
  }
}(this, function(ApiClient, Brand, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2008, InlineResponse2009) {
  'use strict';

  /**
   * Brands service.
   * @module api/BrandsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new BrandsApi. 
   * @alias module:api/BrandsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBrandByOcpc operation.
     * @callback module:api/BrandsApi~getBrandByOcpcCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Brand} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find brand by Open Cannabis Product Code (OCPC).
     * Returns a single brand.
     * @param {String} ocpc OCPC of the brand to return.
     * @param {module:api/BrandsApi~getBrandByOcpcCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Brand}
     */
    this.getBrandByOcpc = function(ocpc, callback) {
      var postBody = null;

      // verify the required parameter 'ocpc' is set
      if (ocpc === undefined || ocpc === null) {
        throw new Error("Missing the required parameter 'ocpc' when calling getBrandByOcpc");
      }


      var pathParams = {
        'ocpc': ocpc
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Brand;

      return this.apiClient.callApi(
        '/brands/{ocpc}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBrandEdibles operation.
     * @callback module:api/BrandsApi~getBrandEdiblesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all current edibles for the given brand.
     * Returns a paginated list of edibles.
     * @param {String} ocpc OCPC of the brand to list edibles for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page to be returned.
     * @param {Number} opts.count The number of items to return. Default 10. Max 50. (default to 10)
     * @param {module:model/String} opts.sort How to sort the items. (default to -createdAt)
     * @param {module:api/BrandsApi~getBrandEdiblesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */
    this.getBrandEdibles = function(ocpc, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ocpc' is set
      if (ocpc === undefined || ocpc === null) {
        throw new Error("Missing the required parameter 'ocpc' when calling getBrandEdibles");
      }


      var pathParams = {
        'ocpc': ocpc
      };
      var queryParams = {
        'page': opts['page'],
        'count': opts['count'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/brands/{ocpc}/edibles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBrandExtracts operation.
     * @callback module:api/BrandsApi~getBrandExtractsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all current extracts for the given brand.
     * Returns a paginated list of extracts.
     * @param {String} ocpc OCPC of the brand to list extracts for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page to be returned.
     * @param {Number} opts.count The number of items to return. Default 10. Max 50. (default to 10)
     * @param {module:model/String} opts.sort How to sort the items. (default to -createdAt)
     * @param {module:api/BrandsApi~getBrandExtractsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    this.getBrandExtracts = function(ocpc, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ocpc' is set
      if (ocpc === undefined || ocpc === null) {
        throw new Error("Missing the required parameter 'ocpc' when calling getBrandExtracts");
      }


      var pathParams = {
        'ocpc': ocpc
      };
      var queryParams = {
        'page': opts['page'],
        'count': opts['count'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/brands/{ocpc}/extracts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBrandFlowers operation.
     * @callback module:api/BrandsApi~getBrandFlowersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all current flowers for the given brand.
     * Returns a paginated list of flowers.
     * @param {String} ocpc OCPC of the brand to list flowers for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page to be returned.
     * @param {Number} opts.count The number of items to return. Default 10. Max 50. (default to 10)
     * @param {module:model/String} opts.sort How to sort the items. (default to -createdAt)
     * @param {module:api/BrandsApi~getBrandFlowersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.getBrandFlowers = function(ocpc, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ocpc' is set
      if (ocpc === undefined || ocpc === null) {
        throw new Error("Missing the required parameter 'ocpc' when calling getBrandFlowers");
      }


      var pathParams = {
        'ocpc': ocpc
      };
      var queryParams = {
        'page': opts['page'],
        'count': opts['count'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/brands/{ocpc}/flowers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBrandProducts operation.
     * @callback module:api/BrandsApi~getBrandProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all current products for the given brand.
     * Returns a paginated list of products.
     * @param {String} ocpc OCPC of the brand to list products for.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page to be returned.
     * @param {Number} opts.count The number of items to return. Default 10. Max 50. (default to 10)
     * @param {module:model/String} opts.sort How to sort the items. (default to -createdAt)
     * @param {module:api/BrandsApi~getBrandProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */
    this.getBrandProducts = function(ocpc, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ocpc' is set
      if (ocpc === undefined || ocpc === null) {
        throw new Error("Missing the required parameter 'ocpc' when calling getBrandProducts");
      }


      var pathParams = {
        'ocpc': ocpc
      };
      var queryParams = {
        'page': opts['page'],
        'count': opts['count'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2009;

      return this.apiClient.callApi(
        '/brands/{ocpc}/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBrands operation.
     * @callback module:api/BrandsApi~getBrandsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all current brands.
     * Returns a paginated list of brands.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page to be returned.
     * @param {Number} opts.count The number of items to return. Default 10. Max 50. (default to 10)
     * @param {module:model/String} opts.sort How to sort the items. (default to -createdAt)
     * @param {module:api/BrandsApi~getBrandsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.getBrands = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'count': opts['count'],
        'sort': opts['sort']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/brands', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
