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



#include "UserAvailabilityResponse.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

UserAvailabilityResponse::UserAvailabilityResponse()
{
    m_Offer = utility::conversions::to_string_t("");
    m_OfferIsSet = false;
    m_Available = false;
    m_AvailableIsSet = false;
}

UserAvailabilityResponse::~UserAvailabilityResponse()
{
}

void UserAvailabilityResponse::validate()
{
    // TODO: implement validation
}

web::json::value UserAvailabilityResponse::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_OfferIsSet)
    {
        val[utility::conversions::to_string_t("offer")] = ModelBase::toJson(m_Offer);
    }
    if(m_AvailableIsSet)
    {
        val[utility::conversions::to_string_t("available")] = ModelBase::toJson(m_Available);
    }

    return val;
}

void UserAvailabilityResponse::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("offer")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("offer")];
        if(!fieldValue.is_null())
        {
            setOffer(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("available")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("available")];
        if(!fieldValue.is_null())
        {
            setAvailable(ModelBase::boolFromJson(fieldValue));
        }
    }
}

void UserAvailabilityResponse::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_OfferIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("offer"), m_Offer));
        
    }
    if(m_AvailableIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("available"), m_Available));
    }
}

void UserAvailabilityResponse::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("offer")))
    {
        setOffer(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("offer"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("available")))
    {
        setAvailable(ModelBase::boolFromHttpContent(multipart->getContent(utility::conversions::to_string_t("available"))));
    }
}

utility::string_t UserAvailabilityResponse::getOffer() const
{
    return m_Offer;
}


void UserAvailabilityResponse::setOffer(utility::string_t value)
{
    m_Offer = value;
    m_OfferIsSet = true;
}
bool UserAvailabilityResponse::offerIsSet() const
{
    return m_OfferIsSet;
}

void UserAvailabilityResponse::unsetOffer()
{
    m_OfferIsSet = false;
}

bool UserAvailabilityResponse::isAvailable() const
{
    return m_Available;
}


void UserAvailabilityResponse::setAvailable(bool value)
{
    m_Available = value;
    m_AvailableIsSet = true;
}
bool UserAvailabilityResponse::availableIsSet() const
{
    return m_AvailableIsSet;
}

void UserAvailabilityResponse::unsetAvailable()
{
    m_AvailableIsSet = false;
}

}
}
}
}

