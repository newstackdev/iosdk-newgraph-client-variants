/**
 * newlife-creator-api-eu-dev
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-05-20T13:39:48Z
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator 2.4.27.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



#include "BcKeyPairCreateRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

BcKeyPairCreateRequest::BcKeyPairCreateRequest()
{
}

BcKeyPairCreateRequest::~BcKeyPairCreateRequest()
{
}

void BcKeyPairCreateRequest::validate()
{
    // TODO: implement validation
}

web::json::value BcKeyPairCreateRequest::toJson() const
{
    web::json::value val = web::json::value::object();


    return val;
}

void BcKeyPairCreateRequest::fromJson(web::json::value& val)
{
}

void BcKeyPairCreateRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

}

void BcKeyPairCreateRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

}

}
}
}
}
