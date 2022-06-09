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



#include "PostCreateRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

PostCreateRequest::PostCreateRequest()
{
    m_License = utility::conversions::to_string_t("");
    m_LicenseIsSet = false;
    m_DoMint = utility::conversions::to_string_t("");
    m_DoMintIsSet = false;
    m_Description = utility::conversions::to_string_t("");
    m_DescriptionIsSet = false;
    m_Embed = utility::conversions::to_string_t("");
    m_EmbedIsSet = false;
    m_Title = utility::conversions::to_string_t("");
    m_TitleIsSet = false;
    m_ContentType = utility::conversions::to_string_t("");
    m_ContentTypeIsSet = false;
    m_Content = utility::conversions::to_string_t("");
    m_ContentIsSet = false;
}

PostCreateRequest::~PostCreateRequest()
{
}

void PostCreateRequest::validate()
{
    // TODO: implement validation
}

web::json::value PostCreateRequest::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_LicenseIsSet)
    {
        val[utility::conversions::to_string_t("license")] = ModelBase::toJson(m_License);
    }
    if(m_DoMintIsSet)
    {
        val[utility::conversions::to_string_t("doMint")] = ModelBase::toJson(m_DoMint);
    }
    if(m_DescriptionIsSet)
    {
        val[utility::conversions::to_string_t("description")] = ModelBase::toJson(m_Description);
    }
    if(m_EmbedIsSet)
    {
        val[utility::conversions::to_string_t("embed")] = ModelBase::toJson(m_Embed);
    }
    if(m_TitleIsSet)
    {
        val[utility::conversions::to_string_t("title")] = ModelBase::toJson(m_Title);
    }
    if(m_ContentTypeIsSet)
    {
        val[utility::conversions::to_string_t("contentType")] = ModelBase::toJson(m_ContentType);
    }
    if(m_ContentIsSet)
    {
        val[utility::conversions::to_string_t("content")] = ModelBase::toJson(m_Content);
    }

    return val;
}

void PostCreateRequest::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("license")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("license")];
        if(!fieldValue.is_null())
        {
            setLicense(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("doMint")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("doMint")];
        if(!fieldValue.is_null())
        {
            setDoMint(ModelBase::stringFromJson(fieldValue));
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
    if(val.has_field(utility::conversions::to_string_t("embed")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("embed")];
        if(!fieldValue.is_null())
        {
            setEmbed(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("title")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("title")];
        if(!fieldValue.is_null())
        {
            setTitle(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("contentType")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("contentType")];
        if(!fieldValue.is_null())
        {
            setContentType(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("content")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("content")];
        if(!fieldValue.is_null())
        {
            setContent(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void PostCreateRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_LicenseIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("license"), m_License));
        
    }
    if(m_DoMintIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("doMint"), m_DoMint));
        
    }
    if(m_DescriptionIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("description"), m_Description));
        
    }
    if(m_EmbedIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("embed"), m_Embed));
        
    }
    if(m_TitleIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("title"), m_Title));
        
    }
    if(m_ContentTypeIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("contentType"), m_ContentType));
        
    }
    if(m_ContentIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("content"), m_Content));
        
    }
}

void PostCreateRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("license")))
    {
        setLicense(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("license"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("doMint")))
    {
        setDoMint(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("doMint"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("description")))
    {
        setDescription(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("description"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("embed")))
    {
        setEmbed(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("embed"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("title")))
    {
        setTitle(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("title"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("contentType")))
    {
        setContentType(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("contentType"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("content")))
    {
        setContent(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("content"))));
    }
}

utility::string_t PostCreateRequest::getLicense() const
{
    return m_License;
}


void PostCreateRequest::setLicense(utility::string_t value)
{
    m_License = value;
    m_LicenseIsSet = true;
}
bool PostCreateRequest::licenseIsSet() const
{
    return m_LicenseIsSet;
}

void PostCreateRequest::unsetLicense()
{
    m_LicenseIsSet = false;
}

utility::string_t PostCreateRequest::getDoMint() const
{
    return m_DoMint;
}


void PostCreateRequest::setDoMint(utility::string_t value)
{
    m_DoMint = value;
    m_DoMintIsSet = true;
}
bool PostCreateRequest::doMintIsSet() const
{
    return m_DoMintIsSet;
}

void PostCreateRequest::unsetDoMint()
{
    m_DoMintIsSet = false;
}

utility::string_t PostCreateRequest::getDescription() const
{
    return m_Description;
}


void PostCreateRequest::setDescription(utility::string_t value)
{
    m_Description = value;
    m_DescriptionIsSet = true;
}
bool PostCreateRequest::descriptionIsSet() const
{
    return m_DescriptionIsSet;
}

void PostCreateRequest::unsetDescription()
{
    m_DescriptionIsSet = false;
}

utility::string_t PostCreateRequest::getEmbed() const
{
    return m_Embed;
}


void PostCreateRequest::setEmbed(utility::string_t value)
{
    m_Embed = value;
    m_EmbedIsSet = true;
}
bool PostCreateRequest::embedIsSet() const
{
    return m_EmbedIsSet;
}

void PostCreateRequest::unsetEmbed()
{
    m_EmbedIsSet = false;
}

utility::string_t PostCreateRequest::getTitle() const
{
    return m_Title;
}


void PostCreateRequest::setTitle(utility::string_t value)
{
    m_Title = value;
    m_TitleIsSet = true;
}
bool PostCreateRequest::titleIsSet() const
{
    return m_TitleIsSet;
}

void PostCreateRequest::unsetTitle()
{
    m_TitleIsSet = false;
}

utility::string_t PostCreateRequest::getContentType() const
{
    return m_ContentType;
}


void PostCreateRequest::setContentType(utility::string_t value)
{
    m_ContentType = value;
    m_ContentTypeIsSet = true;
}
bool PostCreateRequest::contentTypeIsSet() const
{
    return m_ContentTypeIsSet;
}

void PostCreateRequest::unsetContentType()
{
    m_ContentTypeIsSet = false;
}

utility::string_t PostCreateRequest::getContent() const
{
    return m_Content;
}


void PostCreateRequest::setContent(utility::string_t value)
{
    m_Content = value;
    m_ContentIsSet = true;
}
bool PostCreateRequest::contentIsSet() const
{
    return m_ContentIsSet;
}

void PostCreateRequest::unsetContent()
{
    m_ContentIsSet = false;
}

}
}
}
}

