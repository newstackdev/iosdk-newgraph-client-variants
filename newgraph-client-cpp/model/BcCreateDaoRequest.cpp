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



#include "BcCreateDaoRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

BcCreateDaoRequest::BcCreateDaoRequest()
{
    m_Descr = utility::conversions::to_string_t("");
    m_DescrIsSet = false;
    m_Authpr_prv_key = utility::conversions::to_string_t("");
    m_Authpr_prv_keyIsSet = false;
    m_Author = utility::conversions::to_string_t("");
    m_AuthorIsSet = false;
    m_Token = utility::conversions::to_string_t("");
    m_TokenIsSet = false;
}

BcCreateDaoRequest::~BcCreateDaoRequest()
{
}

void BcCreateDaoRequest::validate()
{
    // TODO: implement validation
}

web::json::value BcCreateDaoRequest::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_DescrIsSet)
    {
        val[utility::conversions::to_string_t("descr")] = ModelBase::toJson(m_Descr);
    }
    if(m_Authpr_prv_keyIsSet)
    {
        val[utility::conversions::to_string_t("authpr_prv_key")] = ModelBase::toJson(m_Authpr_prv_key);
    }
    if(m_AuthorIsSet)
    {
        val[utility::conversions::to_string_t("author")] = ModelBase::toJson(m_Author);
    }
    if(m_TokenIsSet)
    {
        val[utility::conversions::to_string_t("token")] = ModelBase::toJson(m_Token);
    }

    return val;
}

void BcCreateDaoRequest::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("descr")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("descr")];
        if(!fieldValue.is_null())
        {
            setDescr(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("authpr_prv_key")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("authpr_prv_key")];
        if(!fieldValue.is_null())
        {
            setAuthprPrvKey(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("author")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("author")];
        if(!fieldValue.is_null())
        {
            setAuthor(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("token")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("token")];
        if(!fieldValue.is_null())
        {
            setToken(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void BcCreateDaoRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_DescrIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("descr"), m_Descr));
        
    }
    if(m_Authpr_prv_keyIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("authpr_prv_key"), m_Authpr_prv_key));
        
    }
    if(m_AuthorIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("author"), m_Author));
        
    }
    if(m_TokenIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("token"), m_Token));
        
    }
}

void BcCreateDaoRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("descr")))
    {
        setDescr(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("descr"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("authpr_prv_key")))
    {
        setAuthprPrvKey(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("authpr_prv_key"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("author")))
    {
        setAuthor(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("author"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("token")))
    {
        setToken(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("token"))));
    }
}

utility::string_t BcCreateDaoRequest::getDescr() const
{
    return m_Descr;
}


void BcCreateDaoRequest::setDescr(utility::string_t value)
{
    m_Descr = value;
    m_DescrIsSet = true;
}
bool BcCreateDaoRequest::descrIsSet() const
{
    return m_DescrIsSet;
}

void BcCreateDaoRequest::unsetDescr()
{
    m_DescrIsSet = false;
}

utility::string_t BcCreateDaoRequest::getAuthprPrvKey() const
{
    return m_Authpr_prv_key;
}


void BcCreateDaoRequest::setAuthprPrvKey(utility::string_t value)
{
    m_Authpr_prv_key = value;
    m_Authpr_prv_keyIsSet = true;
}
bool BcCreateDaoRequest::authprPrvKeyIsSet() const
{
    return m_Authpr_prv_keyIsSet;
}

void BcCreateDaoRequest::unsetAuthpr_prv_key()
{
    m_Authpr_prv_keyIsSet = false;
}

utility::string_t BcCreateDaoRequest::getAuthor() const
{
    return m_Author;
}


void BcCreateDaoRequest::setAuthor(utility::string_t value)
{
    m_Author = value;
    m_AuthorIsSet = true;
}
bool BcCreateDaoRequest::authorIsSet() const
{
    return m_AuthorIsSet;
}

void BcCreateDaoRequest::unsetAuthor()
{
    m_AuthorIsSet = false;
}

utility::string_t BcCreateDaoRequest::getToken() const
{
    return m_Token;
}


void BcCreateDaoRequest::setToken(utility::string_t value)
{
    m_Token = value;
    m_TokenIsSet = true;
}
bool BcCreateDaoRequest::tokenIsSet() const
{
    return m_TokenIsSet;
}

void BcCreateDaoRequest::unsetToken()
{
    m_TokenIsSet = false;
}

}
}
}
}

