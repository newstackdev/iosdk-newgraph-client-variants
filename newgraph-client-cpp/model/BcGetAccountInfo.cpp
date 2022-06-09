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



#include "BcGetAccountInfo.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

BcGetAccountInfo::BcGetAccountInfo()
{
    m_Owner = utility::conversions::to_string_t("");
    m_Contract = utility::conversions::to_string_t("");
    m_ContractIsSet = false;
}

BcGetAccountInfo::~BcGetAccountInfo()
{
}

void BcGetAccountInfo::validate()
{
    // TODO: implement validation
}

web::json::value BcGetAccountInfo::toJson() const
{
    web::json::value val = web::json::value::object();

    val[utility::conversions::to_string_t("owner")] = ModelBase::toJson(m_Owner);
    if(m_ContractIsSet)
    {
        val[utility::conversions::to_string_t("contract")] = ModelBase::toJson(m_Contract);
    }

    return val;
}

void BcGetAccountInfo::fromJson(web::json::value& val)
{
    setOwner(ModelBase::stringFromJson(val[utility::conversions::to_string_t("owner")]));
    if(val.has_field(utility::conversions::to_string_t("contract")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("contract")];
        if(!fieldValue.is_null())
        {
            setContract(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void BcGetAccountInfo::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("owner"), m_Owner));
    if(m_ContractIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("contract"), m_Contract));
        
    }
}

void BcGetAccountInfo::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    setOwner(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("owner"))));
    if(multipart->hasContent(utility::conversions::to_string_t("contract")))
    {
        setContract(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("contract"))));
    }
}

utility::string_t BcGetAccountInfo::getOwner() const
{
    return m_Owner;
}


void BcGetAccountInfo::setOwner(utility::string_t value)
{
    m_Owner = value;
    
}
utility::string_t BcGetAccountInfo::getContract() const
{
    return m_Contract;
}


void BcGetAccountInfo::setContract(utility::string_t value)
{
    m_Contract = value;
    m_ContractIsSet = true;
}
bool BcGetAccountInfo::contractIsSet() const
{
    return m_ContractIsSet;
}

void BcGetAccountInfo::unsetContract()
{
    m_ContractIsSet = false;
}

}
}
}
}

