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



#include "PaymentStripePaymentIntentCreateRequest_items.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

PaymentStripePaymentIntentCreateRequest_items::PaymentStripePaymentIntentCreateRequest_items()
{
    m_ProductId = utility::conversions::to_string_t("");
    m_ProductIdIsSet = false;
    m_PriceId = utility::conversions::to_string_t("");
    m_PriceIdIsSet = false;
}

PaymentStripePaymentIntentCreateRequest_items::~PaymentStripePaymentIntentCreateRequest_items()
{
}

void PaymentStripePaymentIntentCreateRequest_items::validate()
{
    // TODO: implement validation
}

web::json::value PaymentStripePaymentIntentCreateRequest_items::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_ProductIdIsSet)
    {
        val[utility::conversions::to_string_t("productId")] = ModelBase::toJson(m_ProductId);
    }
    if(m_PriceIdIsSet)
    {
        val[utility::conversions::to_string_t("priceId")] = ModelBase::toJson(m_PriceId);
    }

    return val;
}

void PaymentStripePaymentIntentCreateRequest_items::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("productId")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("productId")];
        if(!fieldValue.is_null())
        {
            setProductId(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("priceId")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("priceId")];
        if(!fieldValue.is_null())
        {
            setPriceId(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void PaymentStripePaymentIntentCreateRequest_items::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_ProductIdIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("productId"), m_ProductId));
        
    }
    if(m_PriceIdIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("priceId"), m_PriceId));
        
    }
}

void PaymentStripePaymentIntentCreateRequest_items::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("productId")))
    {
        setProductId(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("productId"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("priceId")))
    {
        setPriceId(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("priceId"))));
    }
}

utility::string_t PaymentStripePaymentIntentCreateRequest_items::getProductId() const
{
    return m_ProductId;
}


void PaymentStripePaymentIntentCreateRequest_items::setProductId(utility::string_t value)
{
    m_ProductId = value;
    m_ProductIdIsSet = true;
}
bool PaymentStripePaymentIntentCreateRequest_items::productIdIsSet() const
{
    return m_ProductIdIsSet;
}

void PaymentStripePaymentIntentCreateRequest_items::unsetProductId()
{
    m_ProductIdIsSet = false;
}

utility::string_t PaymentStripePaymentIntentCreateRequest_items::getPriceId() const
{
    return m_PriceId;
}


void PaymentStripePaymentIntentCreateRequest_items::setPriceId(utility::string_t value)
{
    m_PriceId = value;
    m_PriceIdIsSet = true;
}
bool PaymentStripePaymentIntentCreateRequest_items::priceIdIsSet() const
{
    return m_PriceIdIsSet;
}

void PaymentStripePaymentIntentCreateRequest_items::unsetPriceId()
{
    m_PriceIdIsSet = false;
}

}
}
}
}

