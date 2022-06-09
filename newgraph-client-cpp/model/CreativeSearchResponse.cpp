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



#include "CreativeSearchResponse.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

CreativeSearchResponse::CreativeSearchResponse()
{
    m_HitsIsSet = false;
}

CreativeSearchResponse::~CreativeSearchResponse()
{
}

void CreativeSearchResponse::validate()
{
    // TODO: implement validation
}

web::json::value CreativeSearchResponse::toJson() const
{
    web::json::value val = web::json::value::object();

    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Hits )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        if(jsonArray.size() > 0)
        {
            val[utility::conversions::to_string_t("hits")] = web::json::value::array(jsonArray);
        }
    }

    return val;
}

void CreativeSearchResponse::fromJson(web::json::value& val)
{
    {
        m_Hits.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("hits")))
        {
        for( auto& item : val[utility::conversions::to_string_t("hits")].as_array() )
        {
            if(item.is_null())
            {
                m_Hits.push_back( std::shared_ptr<CreativeSearchResponse_hits>(nullptr) );
            }
            else
            {
                std::shared_ptr<CreativeSearchResponse_hits> newItem(new CreativeSearchResponse_hits());
                newItem->fromJson(item);
                m_Hits.push_back( newItem );
            }
        }
        }
    }
}

void CreativeSearchResponse::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Hits )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        
        if(jsonArray.size() > 0)
        {
            multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("hits"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
        }
    }
}

void CreativeSearchResponse::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    {
        m_Hits.clear();
        if(multipart->hasContent(utility::conversions::to_string_t("hits")))
        {

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("hits"))));
        for( auto& item : jsonArray.as_array() )
        {
            if(item.is_null())
            {
                m_Hits.push_back( std::shared_ptr<CreativeSearchResponse_hits>(nullptr) );
            }
            else
            {
                std::shared_ptr<CreativeSearchResponse_hits> newItem(new CreativeSearchResponse_hits());
                newItem->fromJson(item);
                m_Hits.push_back( newItem );
            }
        }
        }
    }
}

std::vector<std::shared_ptr<CreativeSearchResponse_hits>>& CreativeSearchResponse::getHits()
{
    return m_Hits;
}

void CreativeSearchResponse::setHits(std::vector<std::shared_ptr<CreativeSearchResponse_hits>> value)
{
    m_Hits = value;
    m_HitsIsSet = true;
}
bool CreativeSearchResponse::hitsIsSet() const
{
    return m_HitsIsSet;
}

void CreativeSearchResponse::unsetHits()
{
    m_HitsIsSet = false;
}

}
}
}
}
