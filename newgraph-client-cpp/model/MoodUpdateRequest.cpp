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



#include "MoodUpdateRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

MoodUpdateRequest::MoodUpdateRequest()
{
    m_Latitude = 0.0;
    m_LatitudeIsSet = false;
    m_Description = utility::conversions::to_string_t("");
    m_DescriptionIsSet = false;
    m_Id = utility::conversions::to_string_t("");
    m_Title = utility::conversions::to_string_t("");
    m_TitleIsSet = false;
    m_Longitude = 0.0;
    m_LongitudeIsSet = false;
}

MoodUpdateRequest::~MoodUpdateRequest()
{
}

void MoodUpdateRequest::validate()
{
    // TODO: implement validation
}

web::json::value MoodUpdateRequest::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_LatitudeIsSet)
    {
        val[utility::conversions::to_string_t("latitude")] = ModelBase::toJson(m_Latitude);
    }
    if(m_DescriptionIsSet)
    {
        val[utility::conversions::to_string_t("description")] = ModelBase::toJson(m_Description);
    }
    val[utility::conversions::to_string_t("id")] = ModelBase::toJson(m_Id);
    if(m_TitleIsSet)
    {
        val[utility::conversions::to_string_t("title")] = ModelBase::toJson(m_Title);
    }
    if(m_LongitudeIsSet)
    {
        val[utility::conversions::to_string_t("longitude")] = ModelBase::toJson(m_Longitude);
    }

    return val;
}

void MoodUpdateRequest::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("latitude")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("latitude")];
        if(!fieldValue.is_null())
        {
            setLatitude(ModelBase::doubleFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("description")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("description")];
        if(!fieldValue.is_null())
        {
            setDescription(ModelBase::stringFromJson(fieldValue));
        }
    }
    setId(ModelBase::stringFromJson(val[utility::conversions::to_string_t("id")]));
    if(val.has_field(utility::conversions::to_string_t("title")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("title")];
        if(!fieldValue.is_null())
        {
            setTitle(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("longitude")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("longitude")];
        if(!fieldValue.is_null())
        {
            setLongitude(ModelBase::doubleFromJson(fieldValue));
        }
    }
}

void MoodUpdateRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_LatitudeIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("latitude"), m_Latitude));
    }
    if(m_DescriptionIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("description"), m_Description));
        
    }
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("id"), m_Id));
    if(m_TitleIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("title"), m_Title));
        
    }
    if(m_LongitudeIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("longitude"), m_Longitude));
    }
}

void MoodUpdateRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("latitude")))
    {
        setLatitude(ModelBase::doubleFromHttpContent(multipart->getContent(utility::conversions::to_string_t("latitude"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("description")))
    {
        setDescription(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("description"))));
    }
    setId(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("id"))));
    if(multipart->hasContent(utility::conversions::to_string_t("title")))
    {
        setTitle(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("title"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("longitude")))
    {
        setLongitude(ModelBase::doubleFromHttpContent(multipart->getContent(utility::conversions::to_string_t("longitude"))));
    }
}

double MoodUpdateRequest::getLatitude() const
{
    return m_Latitude;
}


void MoodUpdateRequest::setLatitude(double value)
{
    m_Latitude = value;
    m_LatitudeIsSet = true;
}
bool MoodUpdateRequest::latitudeIsSet() const
{
    return m_LatitudeIsSet;
}

void MoodUpdateRequest::unsetLatitude()
{
    m_LatitudeIsSet = false;
}

utility::string_t MoodUpdateRequest::getDescription() const
{
    return m_Description;
}


void MoodUpdateRequest::setDescription(utility::string_t value)
{
    m_Description = value;
    m_DescriptionIsSet = true;
}
bool MoodUpdateRequest::descriptionIsSet() const
{
    return m_DescriptionIsSet;
}

void MoodUpdateRequest::unsetDescription()
{
    m_DescriptionIsSet = false;
}

utility::string_t MoodUpdateRequest::getId() const
{
    return m_Id;
}


void MoodUpdateRequest::setId(utility::string_t value)
{
    m_Id = value;
    
}
utility::string_t MoodUpdateRequest::getTitle() const
{
    return m_Title;
}


void MoodUpdateRequest::setTitle(utility::string_t value)
{
    m_Title = value;
    m_TitleIsSet = true;
}
bool MoodUpdateRequest::titleIsSet() const
{
    return m_TitleIsSet;
}

void MoodUpdateRequest::unsetTitle()
{
    m_TitleIsSet = false;
}

double MoodUpdateRequest::getLongitude() const
{
    return m_Longitude;
}


void MoodUpdateRequest::setLongitude(double value)
{
    m_Longitude = value;
    m_LongitudeIsSet = true;
}
bool MoodUpdateRequest::longitudeIsSet() const
{
    return m_LongitudeIsSet;
}

void MoodUpdateRequest::unsetLongitude()
{
    m_LongitudeIsSet = false;
}

}
}
}
}

