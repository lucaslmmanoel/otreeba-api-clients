/**
 * Otreeba Open Cannabis API
 * This is an open, canonical database of cannabis seed companies, strains, brands, products, retailers, and studies from [Otreeba](https://otreeba.com). It is written on the OpenAPI Specification AKA Swagger. You can find out more about the Open API Initiative at [https://www.openapis.org/](https://www.openapis.org), or more info on Swagger at [http://swagger.io/](http://swagger.io/).
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@otreeba.com
 *
 * NOTE: This class is auto generated by the swagger code generator 2.2.3.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/*
 * BrandsApi.h
 *
 * 
 */

#ifndef BrandsApi_H_
#define BrandsApi_H_


#include "ApiClient.h"

#include "Brand.h"
#include "Inline_response_200_5.h"
#include "Inline_response_200_6.h"
#include "Inline_response_200_7.h"
#include "Inline_response_200_8.h"
#include "Inline_response_200_9.h"
#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace api {

using namespace io::swagger::client::model;

class  BrandsApi
{
public:
    BrandsApi( std::shared_ptr<ApiClient> apiClient );
    virtual ~BrandsApi();
    /// <summary>
    /// Find brand by Open Cannabis Product Code (OCPC).
    /// </summary>
    /// <remarks>
    /// Returns a single brand.
    /// </remarks>
    /// <param name="ocpc">OCPC of the brand to return.</param>
    pplx::task<std::shared_ptr<Brand>> getBrandByOcpc(utility::string_t ocpc);
    /// <summary>
    /// Get a list of all current edibles for the given brand.
    /// </summary>
    /// <remarks>
    /// Returns a paginated list of edibles.
    /// </remarks>
    /// <param name="ocpc">OCPC of the brand to list edibles for.</param>/// <param name="page">Page to be returned. (optional)</param>/// <param name="count">The number of items to return. Default 10. Max 50. (optional, default to 10)</param>/// <param name="sort">How to sort the items. (optional, default to -createdAt)</param>
    pplx::task<std::shared_ptr<Inline_response_200_8>> getBrandEdibles(utility::string_t ocpc, int32_t page, int32_t count, utility::string_t sort);
    /// <summary>
    /// Get a list of all current extracts for the given brand.
    /// </summary>
    /// <remarks>
    /// Returns a paginated list of extracts.
    /// </remarks>
    /// <param name="ocpc">OCPC of the brand to list extracts for.</param>/// <param name="page">Page to be returned. (optional)</param>/// <param name="count">The number of items to return. Default 10. Max 50. (optional, default to 10)</param>/// <param name="sort">How to sort the items. (optional, default to -createdAt)</param>
    pplx::task<std::shared_ptr<Inline_response_200_7>> getBrandExtracts(utility::string_t ocpc, int32_t page, int32_t count, utility::string_t sort);
    /// <summary>
    /// Get a list of all current flowers for the given brand.
    /// </summary>
    /// <remarks>
    /// Returns a paginated list of flowers.
    /// </remarks>
    /// <param name="ocpc">OCPC of the brand to list flowers for.</param>/// <param name="page">Page to be returned. (optional)</param>/// <param name="count">The number of items to return. Default 10. Max 50. (optional, default to 10)</param>/// <param name="sort">How to sort the items. (optional, default to -createdAt)</param>
    pplx::task<std::shared_ptr<Inline_response_200_6>> getBrandFlowers(utility::string_t ocpc, int32_t page, int32_t count, utility::string_t sort);
    /// <summary>
    /// Get a list of all current products for the given brand.
    /// </summary>
    /// <remarks>
    /// Returns a paginated list of products.
    /// </remarks>
    /// <param name="ocpc">OCPC of the brand to list products for.</param>/// <param name="page">Page to be returned. (optional)</param>/// <param name="count">The number of items to return. Default 10. Max 50. (optional, default to 10)</param>/// <param name="sort">How to sort the items. (optional, default to -createdAt)</param>
    pplx::task<std::shared_ptr<Inline_response_200_9>> getBrandProducts(utility::string_t ocpc, int32_t page, int32_t count, utility::string_t sort);
    /// <summary>
    /// Get a list of all current brands.
    /// </summary>
    /// <remarks>
    /// Returns a paginated list of brands.
    /// </remarks>
    /// <param name="page">Page to be returned. (optional)</param>/// <param name="count">The number of items to return. Default 10. Max 50. (optional, default to 10)</param>/// <param name="sort">How to sort the items. (optional, default to -createdAt)</param>
    pplx::task<std::shared_ptr<Inline_response_200_5>> getBrands(int32_t page, int32_t count, utility::string_t sort);

protected:
    std::shared_ptr<ApiClient> m_ApiClient;
};

}
}
}
}

#endif /* BrandsApi_H_ */

