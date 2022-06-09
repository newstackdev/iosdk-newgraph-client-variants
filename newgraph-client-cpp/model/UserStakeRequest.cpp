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



#include "UserStakeRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

UserStakeRequest::UserStakeRequest()
{
    m_Amount = utility::conversions::to_string_t("");
    m_Key = utility::conversions::to_string_t("");
    m_KeyIsSet = false;
    m_Username = utility::conversions::to_string_t("");
}

UserStakeRequest::~UserStakeRequest()
{
}

void UserStakeRequest::validate()
{
    // TODO: implement validation
}

web::json::value UserStakeRequest::toJson() const
{
    web::json::value val = web::json::value::object();

    val[utility::conversions::to_string_t("amount")] = ModelBase::toJson(m_Amount);
    if(m_KeyIsSet)
    {
        val[utility::conversions::to_string_t("key")] = ModelBase::toJson(m_Key);
    }
    val[utility::conversions::to_string_t("username")] = ModelBase::toJson(m_Username);

    return val;
}

void UserStakeRequest::fromJson(web::json::value& val)
{
    setAmount(ModelBase::stringFromJson(val[utility::conversions::to_string_t("amount")]));
    if(val.has_field(utility::conversions::to_string_t("key")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("key")];
        if(!fieldValue.is_null())
        {
            setKey(ModelBase::stringFromJson(fieldValue));
        }
    }
    setUsername(ModelBase::stringFromJson(val[utility::conversions::to_string_t("username")]));
}

void UserStakeRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("amount"), m_Amount));
    if(m_KeyIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("key"), m_Key));
        
    }
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("username"), m_Username));
}

void UserStakeRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    setAmount(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("amount"))));
    if(multipart->hasContent(utility::conversions::to_string_t("key")))
    {
        setKey(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("key"))));
    }
    setUsername(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("username"))));
}

utility::string_t UserStakeRequest::getAmount() const
{
    return m_Amount;
}


void UserStakeRequest::setAmount(utility::string_t value)
{
    m_Amount = value;
    
}
utility::string_t UserStakeRequest::getKey() const
{
    return m_Key;
}


void UserStakeRequest::setKey(utility::string_t value)
{
    m_Key = value;
    m_KeyIsSet = true;
}
bool UserStakeRequest::keyIsSet() const
{
    return m_KeyIsSet;
}

void UserStakeRequest::unsetKey()
{
    m_KeyIsSet = false;
}

utility::string_t UserStakeRequest::getUsername() const
{
    return m_Username;
}


void UserStakeRequest::setUsername(utility::string_t value)
{
    m_Username = value;
    
}
}
}
}
}
