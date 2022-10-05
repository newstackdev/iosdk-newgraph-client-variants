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



#include "ConfigureUserRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

ConfigureUserRequest::ConfigureUserRequest()
{
    m_Phone = utility::conversions::to_string_t("");
    m_PhoneIsSet = false;
    m_Email = utility::conversions::to_string_t("");
    m_EmailIsSet = false;
    m_Username = utility::conversions::to_string_t("");
    m_UsernameIsSet = false;
}

ConfigureUserRequest::~ConfigureUserRequest()
{
}

void ConfigureUserRequest::validate()
{
    // TODO: implement validation
}

web::json::value ConfigureUserRequest::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_PhoneIsSet)
    {
        val[utility::conversions::to_string_t("phone")] = ModelBase::toJson(m_Phone);
    }
    if(m_EmailIsSet)
    {
        val[utility::conversions::to_string_t("email")] = ModelBase::toJson(m_Email);
    }
    if(m_UsernameIsSet)
    {
        val[utility::conversions::to_string_t("username")] = ModelBase::toJson(m_Username);
    }

    return val;
}

void ConfigureUserRequest::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("phone")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("phone")];
        if(!fieldValue.is_null())
        {
            setPhone(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("email")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("email")];
        if(!fieldValue.is_null())
        {
            setEmail(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("username")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("username")];
        if(!fieldValue.is_null())
        {
            setUsername(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void ConfigureUserRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_PhoneIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("phone"), m_Phone));
        
    }
    if(m_EmailIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("email"), m_Email));
        
    }
    if(m_UsernameIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("username"), m_Username));
        
    }
}

void ConfigureUserRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("phone")))
    {
        setPhone(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("phone"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("email")))
    {
        setEmail(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("email"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("username")))
    {
        setUsername(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("username"))));
    }
}

utility::string_t ConfigureUserRequest::getPhone() const
{
    return m_Phone;
}


void ConfigureUserRequest::setPhone(utility::string_t value)
{
    m_Phone = value;
    m_PhoneIsSet = true;
}
bool ConfigureUserRequest::phoneIsSet() const
{
    return m_PhoneIsSet;
}

void ConfigureUserRequest::unsetPhone()
{
    m_PhoneIsSet = false;
}

utility::string_t ConfigureUserRequest::getEmail() const
{
    return m_Email;
}


void ConfigureUserRequest::setEmail(utility::string_t value)
{
    m_Email = value;
    m_EmailIsSet = true;
}
bool ConfigureUserRequest::emailIsSet() const
{
    return m_EmailIsSet;
}

void ConfigureUserRequest::unsetEmail()
{
    m_EmailIsSet = false;
}

utility::string_t ConfigureUserRequest::getUsername() const
{
    return m_Username;
}


void ConfigureUserRequest::setUsername(utility::string_t value)
{
    m_Username = value;
    m_UsernameIsSet = true;
}
bool ConfigureUserRequest::usernameIsSet() const
{
    return m_UsernameIsSet;
}

void ConfigureUserRequest::unsetUsername()
{
    m_UsernameIsSet = false;
}

}
}
}
}
