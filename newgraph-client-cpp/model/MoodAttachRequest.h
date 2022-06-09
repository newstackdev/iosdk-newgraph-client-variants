/**
 * newlife-creator-api-eu-dev
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-06-09T06:13:03Z
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator 2.4.27.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/*
 * MoodAttachRequest.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_MoodAttachRequest_H_
#define IO_SWAGGER_CLIENT_MODEL_MoodAttachRequest_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  MoodAttachRequest
    : public ModelBase
{
public:
    MoodAttachRequest();
    virtual ~MoodAttachRequest();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// MoodAttachRequest members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTargetId() const;
        void setTargetId(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getId() const;
        void setId(utility::string_t value);

protected:
    utility::string_t m_TargetId;
        utility::string_t m_Id;
    };

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_MoodAttachRequest_H_ */
