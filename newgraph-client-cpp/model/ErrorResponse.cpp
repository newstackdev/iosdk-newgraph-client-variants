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



#include "ErrorResponse.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

ErrorResponse::ErrorResponse()
{
    m_ErrorMessage = utility::conversions::to_string_t("");
    m_ErrorMessageIsSet = false;
    m_ErrorCode = utility::conversions::to_string_t("");
    m_ErrorCodeIsSet = false;
    m_StatusCode = 0.0;
    m_StatusCodeIsSet = false;
}

ErrorResponse::~ErrorResponse()
{
}

void ErrorResponse::validate()
{
    // TODO: implement validation
}

web::json::value ErrorResponse::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_ErrorMessageIsSet)
    {
        val[utility::conversions::to_string_t("errorMessage")] = ModelBase::toJson(m_ErrorMessage);
    }
    if(m_ErrorCodeIsSet)
    {
        val[utility::conversions::to_string_t("errorCode")] = ModelBase::toJson(m_ErrorCode);
    }
    if(m_StatusCodeIsSet)
    {
        val[utility::conversions::to_string_t("statusCode")] = ModelBase::toJson(m_StatusCode);
    }

    return val;
}

void ErrorResponse::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("errorMessage")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("errorMessage")];
        if(!fieldValue.is_null())
        {
            setErrorMessage(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("errorCode")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("errorCode")];
        if(!fieldValue.is_null())
        {
            setErrorCode(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("statusCode")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("statusCode")];
        if(!fieldValue.is_null())
        {
            setStatusCode(ModelBase::doubleFromJson(fieldValue));
        }
    }
}

void ErrorResponse::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_ErrorMessageIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("errorMessage"), m_ErrorMessage));
        
    }
    if(m_ErrorCodeIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("errorCode"), m_ErrorCode));
        
    }
    if(m_StatusCodeIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("statusCode"), m_StatusCode));
    }
}

void ErrorResponse::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("errorMessage")))
    {
        setErrorMessage(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("errorMessage"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("errorCode")))
    {
        setErrorCode(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("errorCode"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("statusCode")))
    {
        setStatusCode(ModelBase::doubleFromHttpContent(multipart->getContent(utility::conversions::to_string_t("statusCode"))));
    }
}

utility::string_t ErrorResponse::getErrorMessage() const
{
    return m_ErrorMessage;
}


void ErrorResponse::setErrorMessage(utility::string_t value)
{
    m_ErrorMessage = value;
    m_ErrorMessageIsSet = true;
}
bool ErrorResponse::errorMessageIsSet() const
{
    return m_ErrorMessageIsSet;
}

void ErrorResponse::unsetErrorMessage()
{
    m_ErrorMessageIsSet = false;
}

utility::string_t ErrorResponse::getErrorCode() const
{
    return m_ErrorCode;
}


void ErrorResponse::setErrorCode(utility::string_t value)
{
    m_ErrorCode = value;
    m_ErrorCodeIsSet = true;
}
bool ErrorResponse::errorCodeIsSet() const
{
    return m_ErrorCodeIsSet;
}

void ErrorResponse::unsetErrorCode()
{
    m_ErrorCodeIsSet = false;
}

double ErrorResponse::getStatusCode() const
{
    return m_StatusCode;
}


void ErrorResponse::setStatusCode(double value)
{
    m_StatusCode = value;
    m_StatusCodeIsSet = true;
}
bool ErrorResponse::statusCodeIsSet() const
{
    return m_StatusCodeIsSet;
}

void ErrorResponse::unsetStatusCode()
{
    m_StatusCodeIsSet = false;
}

}
}
}
}

