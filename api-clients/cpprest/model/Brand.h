/**
 * Otreeba Open Cannabis API
 * This is an open, canonical database of cannabis seed companies, strains, brands, products, retailers, and studies from [Otreeba](https://otreeba.com). It is written on the OpenAPI Specification AKA Swagger. You can find out more about the Open API Initiative at [https://www.openapis.org/](https://www.openapis.org), or more info on Swagger at [http://swagger.io/](http://swagger.io/).
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@otreeba.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/*
 * Brand.h
 *
 * 
 */

#ifndef Brand_H_
#define Brand_H_


#include "ModelBase.h"

#include <cpprest/details/basic_types.h>
#include <vector>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  Brand
    : public ModelBase
{
public:
    Brand();
    virtual ~Brand();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// Brand members

    /// <summary>
    /// Name of the brand.
    /// </summary>
    utility::string_t getName() const;
    void setName(utility::string_t value);
        /// <summary>
    /// Open Cannabis Product Code for the brand.
    /// </summary>
    utility::string_t getOcpc() const;
    void setOcpc(utility::string_t value);
    bool ocpcIsSet() const;
    void unsetOcpc();
    /// <summary>
    /// URL for brand on Otreeba.
    /// </summary>
    utility::string_t getLink() const;
    void setLink(utility::string_t value);
    bool linkIsSet() const;
    void unsetLink();
    /// <summary>
    /// URL for QR that leads to page on Cannabis Reports.
    /// </summary>
    utility::string_t getQr() const;
    void setQr(utility::string_t value);
    bool qrIsSet() const;
    void unsetQr();
    /// <summary>
    /// URL for brand on Cannabis Reports.
    /// </summary>
    utility::string_t getUrl() const;
    void setUrl(utility::string_t value);
    bool urlIsSet() const;
    void unsetUrl();
    /// <summary>
    /// URL for logo for brand.
    /// </summary>
    utility::string_t getImage() const;
    void setImage(utility::string_t value);
    bool imageIsSet() const;
    void unsetImage();
    /// <summary>
    /// OCPCs of the flowers from this brand.
    /// </summary>
    std::vector<utility::string_t>& getFlowers();
    bool flowersIsSet() const;
    void unsetFlowers();
    /// <summary>
    /// OCPCs of the extracts from this brand.
    /// </summary>
    std::vector<utility::string_t>& getExtracts();
    bool extractsIsSet() const;
    void unsetExtracts();
    /// <summary>
    /// OCPCs of the edibles from this brand.
    /// </summary>
    std::vector<utility::string_t>& getEdibles();
    bool ediblesIsSet() const;
    void unsetEdibles();
    /// <summary>
    /// OCPCs of the products from this brand.
    /// </summary>
    std::vector<utility::string_t>& getProducts();
    bool productsIsSet() const;
    void unsetProducts();
    /// <summary>
    /// Date and time record was created, UTC.
    /// </summary>
    utility::datetime getCreatedAt() const;
    void setCreatedAt(utility::datetime value);
    bool createdAtIsSet() const;
    void unsetCreatedAt();
    /// <summary>
    /// Date and time record was updated, UTC.
    /// </summary>
    utility::datetime getUpdatedAt() const;
    void setUpdatedAt(utility::datetime value);
    bool updatedAtIsSet() const;
    void unsetUpdatedAt();

protected:
    utility::string_t m_Name;
    utility::string_t m_Ocpc;
    bool m_OcpcIsSet;
utility::string_t m_Link;
    bool m_LinkIsSet;
utility::string_t m_Qr;
    bool m_QrIsSet;
utility::string_t m_Url;
    bool m_UrlIsSet;
utility::string_t m_Image;
    bool m_ImageIsSet;
std::vector<utility::string_t> m_Flowers;
    bool m_FlowersIsSet;
std::vector<utility::string_t> m_Extracts;
    bool m_ExtractsIsSet;
std::vector<utility::string_t> m_Edibles;
    bool m_EdiblesIsSet;
std::vector<utility::string_t> m_Products;
    bool m_ProductsIsSet;
utility::datetime m_CreatedAt;
    bool m_CreatedAtIsSet;
utility::datetime m_UpdatedAt;
    bool m_UpdatedAtIsSet;
};

}
}
}
}

#endif /* Brand_H_ */