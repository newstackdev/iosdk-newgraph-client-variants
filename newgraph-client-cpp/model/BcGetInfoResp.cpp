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



#include "BcGetInfoResp.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

BcGetInfoResp::BcGetInfoResp()
{
}

BcGetInfoResp::~BcGetInfoResp()
{
}

void BcGetInfoResp::validate()
{
    // TODO: implement validation
}

web::json::value BcGetInfoResp::toJson() const
{
    web::json::value val = web::json::value::object();


    return val;
}

void BcGetInfoResp::fromJson(web::json::value& val)
{
}

void BcGetInfoResp::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

}

void BcGetInfoResp::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
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

