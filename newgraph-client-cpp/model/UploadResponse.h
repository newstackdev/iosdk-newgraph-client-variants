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
 * UploadResponse.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_UploadResponse_H_
#define IO_SWAGGER_CLIENT_MODEL_UploadResponse_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  UploadResponse
    : public ModelBase
{
public:
    UploadResponse();
    virtual ~UploadResponse();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// UploadResponse members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getFilename() const;
    bool filenameIsSet() const;
    void unsetFilename();
    void setFilename(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getKey() const;
    bool keyIsSet() const;
    void unsetKey();
    void setKey(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getUrl() const;
    bool urlIsSet() const;
    void unsetUrl();
    void setUrl(utility::string_t value);

protected:
    utility::string_t m_Filename;
    bool m_FilenameIsSet;
    utility::string_t m_Key;
    bool m_KeyIsSet;
    utility::string_t m_Url;
    bool m_UrlIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_UploadResponse_H_ */
