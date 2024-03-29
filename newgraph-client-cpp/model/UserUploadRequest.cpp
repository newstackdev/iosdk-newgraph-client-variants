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



#include "UserUploadRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

UserUploadRequest::UserUploadRequest()
{
    m_Filename = utility::conversions::to_string_t("");
    m_ContentType = utility::conversions::to_string_t("");
}

UserUploadRequest::~UserUploadRequest()
{
}

void UserUploadRequest::validate()
{
    // TODO: implement validation
}

web::json::value UserUploadRequest::toJson() const
{
    web::json::value val = web::json::value::object();

    val[utility::conversions::to_string_t("filename")] = ModelBase::toJson(m_Filename);
    val[utility::conversions::to_string_t("contentType")] = ModelBase::toJson(m_ContentType);

    return val;
}

void UserUploadRequest::fromJson(web::json::value& val)
{
    setFilename(ModelBase::stringFromJson(val[utility::conversions::to_string_t("filename")]));
    setContentType(ModelBase::stringFromJson(val[utility::conversions::to_string_t("contentType")]));
}

void UserUploadRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("filename"), m_Filename));
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("contentType"), m_ContentType));
}

void UserUploadRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    setFilename(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("filename"))));
    setContentType(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("contentType"))));
}

utility::string_t UserUploadRequest::getFilename() const
{
    return m_Filename;
}


void UserUploadRequest::setFilename(utility::string_t value)
{
    m_Filename = value;
    
}
utility::string_t UserUploadRequest::getContentType() const
{
    return m_ContentType;
}


void UserUploadRequest::setContentType(utility::string_t value)
{
    m_ContentType = value;
    
}
}
}
}
}

