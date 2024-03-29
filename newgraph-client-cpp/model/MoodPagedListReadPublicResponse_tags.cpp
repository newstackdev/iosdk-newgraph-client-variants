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



#include "MoodPagedListReadPublicResponse_tags.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

MoodPagedListReadPublicResponse_tags::MoodPagedListReadPublicResponse_tags()
{
    m__relIsSet = false;
    m_Id = utility::conversions::to_string_t("");
    m_IdIsSet = false;
    m_Value = utility::conversions::to_string_t("");
    m_ValueIsSet = false;
}

MoodPagedListReadPublicResponse_tags::~MoodPagedListReadPublicResponse_tags()
{
}

void MoodPagedListReadPublicResponse_tags::validate()
{
    // TODO: implement validation
}

web::json::value MoodPagedListReadPublicResponse_tags::toJson() const
{
    web::json::value val = web::json::value::object();

    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m__rel )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        if(jsonArray.size() > 0)
        {
            val[utility::conversions::to_string_t("_rel")] = web::json::value::array(jsonArray);
        }
    }
    if(m_IdIsSet)
    {
        val[utility::conversions::to_string_t("id")] = ModelBase::toJson(m_Id);
    }
    if(m_ValueIsSet)
    {
        val[utility::conversions::to_string_t("value")] = ModelBase::toJson(m_Value);
    }

    return val;
}

void MoodPagedListReadPublicResponse_tags::fromJson(web::json::value& val)
{
    {
        m__rel.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("_rel")))
        {
        for( auto& item : val[utility::conversions::to_string_t("_rel")].as_array() )
        {
            if(item.is_null())
            {
                m__rel.push_back( std::shared_ptr<MoodPagedListReadPublicResponse__rel>(nullptr) );
            }
            else
            {
                std::shared_ptr<MoodPagedListReadPublicResponse__rel> newItem(new MoodPagedListReadPublicResponse__rel());
                newItem->fromJson(item);
                m__rel.push_back( newItem );
            }
        }
        }
    }
    if(val.has_field(utility::conversions::to_string_t("id")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("id")];
        if(!fieldValue.is_null())
        {
            setId(ModelBase::stringFromJson(fieldValue));
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

void MoodPagedListReadPublicResponse_tags::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m__rel )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        
        if(jsonArray.size() > 0)
        {
            multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("_rel"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
        }
    }
    if(m_IdIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("id"), m_Id));
        
    }
    if(m_ValueIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("value"), m_Value));
        
    }
}

void MoodPagedListReadPublicResponse_tags::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    {
        m__rel.clear();
        if(multipart->hasContent(utility::conversions::to_string_t("_rel")))
        {

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("_rel"))));
        for( auto& item : jsonArray.as_array() )
        {
            if(item.is_null())
            {
                m__rel.push_back( std::shared_ptr<MoodPagedListReadPublicResponse__rel>(nullptr) );
            }
            else
            {
                std::shared_ptr<MoodPagedListReadPublicResponse__rel> newItem(new MoodPagedListReadPublicResponse__rel());
                newItem->fromJson(item);
                m__rel.push_back( newItem );
            }
        }
        }
    }
    if(multipart->hasContent(utility::conversions::to_string_t("id")))
    {
        setId(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("id"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("value")))
    {
        setValue(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("value"))));
    }
}

std::vector<std::shared_ptr<MoodPagedListReadPublicResponse__rel>>& MoodPagedListReadPublicResponse_tags::getRel()
{
    return m__rel;
}

void MoodPagedListReadPublicResponse_tags::setRel(std::vector<std::shared_ptr<MoodPagedListReadPublicResponse__rel>> value)
{
    m__rel = value;
    m__relIsSet = true;
}
bool MoodPagedListReadPublicResponse_tags::relIsSet() const
{
    return m__relIsSet;
}

void MoodPagedListReadPublicResponse_tags::unset_rel()
{
    m__relIsSet = false;
}

utility::string_t MoodPagedListReadPublicResponse_tags::getId() const
{
    return m_Id;
}


void MoodPagedListReadPublicResponse_tags::setId(utility::string_t value)
{
    m_Id = value;
    m_IdIsSet = true;
}
bool MoodPagedListReadPublicResponse_tags::idIsSet() const
{
    return m_IdIsSet;
}

void MoodPagedListReadPublicResponse_tags::unsetId()
{
    m_IdIsSet = false;
}

utility::string_t MoodPagedListReadPublicResponse_tags::getValue() const
{
    return m_Value;
}


void MoodPagedListReadPublicResponse_tags::setValue(utility::string_t value)
{
    m_Value = value;
    m_ValueIsSet = true;
}
bool MoodPagedListReadPublicResponse_tags::valueIsSet() const
{
    return m_ValueIsSet;
}

void MoodPagedListReadPublicResponse_tags::unsetValue()
{
    m_ValueIsSet = false;
}

}
}
}
}

