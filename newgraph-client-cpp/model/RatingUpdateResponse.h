/**
 * newgraph-api-eu-dev
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-10-04T15:34:01Z
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator 2.4.27.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/*
 * RatingUpdateResponse.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_RatingUpdateResponse_H_
#define IO_SWAGGER_CLIENT_MODEL_RatingUpdateResponse_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  RatingUpdateResponse
    : public ModelBase
{
public:
    RatingUpdateResponse();
    virtual ~RatingUpdateResponse();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// RatingUpdateResponse members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getCreated() const;
    bool createdIsSet() const;
    void unsetCreated();
    void setCreated(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTxIDMintAsset() const;
    bool txIDMintAssetIsSet() const;
    void unsetTxID_mintAsset();
    void setTxIDMintAsset(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    double getValue() const;
    bool valueIsSet() const;
    void unsetValue();
    void setValue(double value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getUpdated() const;
    bool updatedIsSet() const;
    void unsetUpdated();
    void setUpdated(utility::string_t value);

protected:
    utility::string_t m_Created;
    bool m_CreatedIsSet;
    utility::string_t m_TxID_mintAsset;
    bool m_TxID_mintAssetIsSet;
    double m_Value;
    bool m_ValueIsSet;
    utility::string_t m_Updated;
    bool m_UpdatedIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_RatingUpdateResponse_H_ */
