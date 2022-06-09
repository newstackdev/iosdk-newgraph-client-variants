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



#include "BcPoolCreateRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

BcPoolCreateRequest::BcPoolCreateRequest()
{
    m_Owner = utility::conversions::to_string_t("");
    m_Owner_prv_active_key = utility::conversions::to_string_t("");
    m_Owner_prv_active_keyIsSet = false;
    m_Payer = utility::conversions::to_string_t("");
    m_PayerIsSet = false;
}

BcPoolCreateRequest::~BcPoolCreateRequest()
{
}

void BcPoolCreateRequest::validate()
{
    // TODO: implement validation
}

web::json::value BcPoolCreateRequest::toJson() const
{
    web::json::value val = web::json::value::object();

    val[utility::conversions::to_string_t("owner")] = ModelBase::toJson(m_Owner);
    if(m_Owner_prv_active_keyIsSet)
    {
        val[utility::conversions::to_string_t("owner_prv_active_key")] = ModelBase::toJson(m_Owner_prv_active_key);
    }
    if(m_PayerIsSet)
    {
        val[utility::conversions::to_string_t("payer")] = ModelBase::toJson(m_Payer);
    }

    return val;
}

void BcPoolCreateRequest::fromJson(web::json::value& val)
{
    setOwner(ModelBase::stringFromJson(val[utility::conversions::to_string_t("owner")]));
    if(val.has_field(utility::conversions::to_string_t("owner_prv_active_key")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("owner_prv_active_key")];
        if(!fieldValue.is_null())
        {
            setOwnerPrvActiveKey(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("payer")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("payer")];
        if(!fieldValue.is_null())
        {
            setPayer(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void BcPoolCreateRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("owner"), m_Owner));
    if(m_Owner_prv_active_keyIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("owner_prv_active_key"), m_Owner_prv_active_key));
        
    }
    if(m_PayerIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("payer"), m_Payer));
        
    }
}

void BcPoolCreateRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    setOwner(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("owner"))));
    if(multipart->hasContent(utility::conversions::to_string_t("owner_prv_active_key")))
    {
        setOwnerPrvActiveKey(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("owner_prv_active_key"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("payer")))
    {
        setPayer(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("payer"))));
    }
}

utility::string_t BcPoolCreateRequest::getOwner() const
{
    return m_Owner;
}


void BcPoolCreateRequest::setOwner(utility::string_t value)
{
    m_Owner = value;
    
}
utility::string_t BcPoolCreateRequest::getOwnerPrvActiveKey() const
{
    return m_Owner_prv_active_key;
}


void BcPoolCreateRequest::setOwnerPrvActiveKey(utility::string_t value)
{
    m_Owner_prv_active_key = value;
    m_Owner_prv_active_keyIsSet = true;
}
bool BcPoolCreateRequest::ownerPrvActiveKeyIsSet() const
{
    return m_Owner_prv_active_keyIsSet;
}

void BcPoolCreateRequest::unsetOwner_prv_active_key()
{
    m_Owner_prv_active_keyIsSet = false;
}

utility::string_t BcPoolCreateRequest::getPayer() const
{
    return m_Payer;
}


void BcPoolCreateRequest::setPayer(utility::string_t value)
{
    m_Payer = value;
    m_PayerIsSet = true;
}
bool BcPoolCreateRequest::payerIsSet() const
{
    return m_PayerIsSet;
}

void BcPoolCreateRequest::unsetPayer()
{
    m_PayerIsSet = false;
}

}
}
}
}

