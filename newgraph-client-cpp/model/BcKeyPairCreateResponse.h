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
 * BcKeyPairCreateResponse.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_BcKeyPairCreateResponse_H_
#define IO_SWAGGER_CLIENT_MODEL_BcKeyPairCreateResponse_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  BcKeyPairCreateResponse
    : public ModelBase
{
public:
    BcKeyPairCreateResponse();
    virtual ~BcKeyPairCreateResponse();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// BcKeyPairCreateResponse members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getPrvKey() const;
        void setPrvKey(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getPubKey() const;
        void setPubKey(utility::string_t value);

protected:
    utility::string_t m_Prv_key;
        utility::string_t m_Pub_key;
    };

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_BcKeyPairCreateResponse_H_ */
