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



#include "SyncContactsRequest_phones.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

SyncContactsRequest_phones::SyncContactsRequest_phones()
{
    m_Label = utility::conversions::to_string_t("");
    m_LabelIsSet = false;
    m_Value = utility::conversions::to_string_t("");
    m_ValueIsSet = false;
}

SyncContactsRequest_phones::~SyncContactsRequest_phones()
{
}

void SyncContactsRequest_phones::validate()
{
    // TODO: implement validation
}

web::json::value SyncContactsRequest_phones::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_LabelIsSet)
    {
        val[utility::conversions::to_string_t("label")] = ModelBase::toJson(m_Label);
    }
    if(m_ValueIsSet)
    {
        val[utility::conversions::to_string_t("value")] = ModelBase::toJson(m_Value);
    }

    return val;
}

void SyncContactsRequest_phones::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("label")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("label")];
        if(!fieldValue.is_null())
        {
            setLabel(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("value")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("value")];
        if(!fieldValue.is_null())
        {
            setValue(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void SyncContactsRequest_phones::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_LabelIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("label"), m_Label));
        
    }
    if(m_ValueIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("value"), m_Value));
        
    }
}

void SyncContactsRequest_phones::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("label")))
    {
        setLabel(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("label"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("value")))
    {
        setValue(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("value"))));
    }
}

utility::string_t SyncContactsRequest_phones::getLabel() const
{
    return m_Label;
}


void SyncContactsRequest_phones::setLabel(utility::string_t value)
{
    m_Label = value;
    m_LabelIsSet = true;
}
bool SyncContactsRequest_phones::labelIsSet() const
{
    return m_LabelIsSet;
}

void SyncContactsRequest_phones::unsetLabel()
{
    m_LabelIsSet = false;
}

utility::string_t SyncContactsRequest_phones::getValue() const
{
    return m_Value;
}


void SyncContactsRequest_phones::setValue(utility::string_t value)
{
    m_Value = value;
    m_ValueIsSet = true;
}
bool SyncContactsRequest_phones::valueIsSet() const
{
    return m_ValueIsSet;
}

void SyncContactsRequest_phones::unsetValue()
{
    m_ValueIsSet = false;
}

}
}
}
}

