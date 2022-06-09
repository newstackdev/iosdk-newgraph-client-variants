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



#include "PagedRatedResponsePost_value.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

PagedRatedResponsePost_value::PagedRatedResponsePost_value()
{
    m_CoverContentUrl = utility::conversions::to_string_t("");
    m_CoverContentUrlIsSet = false;
    m_MoodId = utility::conversions::to_string_t("");
    m_MoodIdIsSet = false;
    m_Created = utility::conversions::to_string_t("");
    m_CreatedIsSet = false;
    m_AuthorIsSet = false;
    m_Latitude = 0.0;
    m_LatitudeIsSet = false;
    m_MoodsIsSet = false;
    m_RatingIsSet = false;
    m_Description = utility::conversions::to_string_t("");
    m_DescriptionIsSet = false;
    m_AspectRatio = 0.0;
    m_AspectRatioIsSet = false;
    m_Title = utility::conversions::to_string_t("");
    m_TitleIsSet = false;
    m_Content = utility::conversions::to_string_t("");
    m_ContentIsSet = false;
    m_TagsIsSet = false;
    m_License = utility::conversions::to_string_t("");
    m_LicenseIsSet = false;
    m_ContentUrl = utility::conversions::to_string_t("");
    m_ContentUrlIsSet = false;
    m_BlurHash = utility::conversions::to_string_t("");
    m_BlurHashIsSet = false;
    m_NewcoinMintTx = utility::conversions::to_string_t("");
    m_NewcoinMintTxIsSet = false;
    m_Id = utility::conversions::to_string_t("");
    m_IdIsSet = false;
    m_ConsentEmail = utility::conversions::to_string_t("");
    m_ConsentEmailIsSet = false;
    m_Updated = utility::conversions::to_string_t("");
    m_UpdatedIsSet = false;
    m_ContentType = utility::conversions::to_string_t("");
    m_ContentTypeIsSet = false;
    m_Longitude = 0.0;
    m_LongitudeIsSet = false;
}

PagedRatedResponsePost_value::~PagedRatedResponsePost_value()
{
}

void PagedRatedResponsePost_value::validate()
{
    // TODO: implement validation
}

web::json::value PagedRatedResponsePost_value::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_CoverContentUrlIsSet)
    {
        val[utility::conversions::to_string_t("coverContentUrl")] = ModelBase::toJson(m_CoverContentUrl);
    }
    if(m_MoodIdIsSet)
    {
        val[utility::conversions::to_string_t("moodId")] = ModelBase::toJson(m_MoodId);
    }
    if(m_CreatedIsSet)
    {
        val[utility::conversions::to_string_t("created")] = ModelBase::toJson(m_Created);
    }
    if(m_AuthorIsSet)
    {
        val[utility::conversions::to_string_t("author")] = ModelBase::toJson(m_Author);
    }
    if(m_LatitudeIsSet)
    {
        val[utility::conversions::to_string_t("latitude")] = ModelBase::toJson(m_Latitude);
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Moods )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        if(jsonArray.size() > 0)
        {
            val[utility::conversions::to_string_t("moods")] = web::json::value::array(jsonArray);
        }
    }
    if(m_RatingIsSet)
    {
        val[utility::conversions::to_string_t("rating")] = ModelBase::toJson(m_Rating);
    }
    if(m_DescriptionIsSet)
    {
        val[utility::conversions::to_string_t("description")] = ModelBase::toJson(m_Description);
    }
    if(m_AspectRatioIsSet)
    {
        val[utility::conversions::to_string_t("aspectRatio")] = ModelBase::toJson(m_AspectRatio);
    }
    if(m_TitleIsSet)
    {
        val[utility::conversions::to_string_t("title")] = ModelBase::toJson(m_Title);
    }
    if(m_ContentIsSet)
    {
        val[utility::conversions::to_string_t("content")] = ModelBase::toJson(m_Content);
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Tags )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        if(jsonArray.size() > 0)
        {
            val[utility::conversions::to_string_t("tags")] = web::json::value::array(jsonArray);
        }
    }
    if(m_LicenseIsSet)
    {
        val[utility::conversions::to_string_t("license")] = ModelBase::toJson(m_License);
    }
    if(m_ContentUrlIsSet)
    {
        val[utility::conversions::to_string_t("contentUrl")] = ModelBase::toJson(m_ContentUrl);
    }
    if(m_BlurHashIsSet)
    {
        val[utility::conversions::to_string_t("blurHash")] = ModelBase::toJson(m_BlurHash);
    }
    if(m_NewcoinMintTxIsSet)
    {
        val[utility::conversions::to_string_t("newcoinMintTx")] = ModelBase::toJson(m_NewcoinMintTx);
    }
    if(m_IdIsSet)
    {
        val[utility::conversions::to_string_t("id")] = ModelBase::toJson(m_Id);
    }
    if(m_ConsentEmailIsSet)
    {
        val[utility::conversions::to_string_t("consentEmail")] = ModelBase::toJson(m_ConsentEmail);
    }
    if(m_UpdatedIsSet)
    {
        val[utility::conversions::to_string_t("updated")] = ModelBase::toJson(m_Updated);
    }
    if(m_ContentTypeIsSet)
    {
        val[utility::conversions::to_string_t("contentType")] = ModelBase::toJson(m_ContentType);
    }
    if(m_LongitudeIsSet)
    {
        val[utility::conversions::to_string_t("longitude")] = ModelBase::toJson(m_Longitude);
    }

    return val;
}

void PagedRatedResponsePost_value::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("coverContentUrl")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("coverContentUrl")];
        if(!fieldValue.is_null())
        {
            setCoverContentUrl(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("moodId")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("moodId")];
        if(!fieldValue.is_null())
        {
            setMoodId(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("created")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("created")];
        if(!fieldValue.is_null())
        {
            setCreated(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("author")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("author")];
        if(!fieldValue.is_null())
        {
            std::shared_ptr<PagedRatedResponsePost_author> newItem(new PagedRatedResponsePost_author());
            newItem->fromJson(fieldValue);
            setAuthor( newItem );
        }
    }
    if(val.has_field(utility::conversions::to_string_t("latitude")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("latitude")];
        if(!fieldValue.is_null())
        {
            setLatitude(ModelBase::doubleFromJson(fieldValue));
        }
    }
    {
        m_Moods.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("moods")))
        {
        for( auto& item : val[utility::conversions::to_string_t("moods")].as_array() )
        {
            if(item.is_null())
            {
                m_Moods.push_back( std::shared_ptr<PagedRatedResponsePost_moods>(nullptr) );
            }
            else
            {
                std::shared_ptr<PagedRatedResponsePost_moods> newItem(new PagedRatedResponsePost_moods());
                newItem->fromJson(item);
                m_Moods.push_back( newItem );
            }
        }
        }
    }
    if(val.has_field(utility::conversions::to_string_t("rating")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("rating")];
        if(!fieldValue.is_null())
        {
            std::shared_ptr<PagedRatedResponseUser_rating> newItem(new PagedRatedResponseUser_rating());
            newItem->fromJson(fieldValue);
            setRating( newItem );
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
    if(val.has_field(utility::conversions::to_string_t("aspectRatio")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("aspectRatio")];
        if(!fieldValue.is_null())
        {
            setAspectRatio(ModelBase::doubleFromJson(fieldValue));
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
    if(val.has_field(utility::conversions::to_string_t("content")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("content")];
        if(!fieldValue.is_null())
        {
            setContent(ModelBase::stringFromJson(fieldValue));
        }
    }
    {
        m_Tags.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("tags")))
        {
        for( auto& item : val[utility::conversions::to_string_t("tags")].as_array() )
        {
            if(item.is_null())
            {
                m_Tags.push_back( std::shared_ptr<PagedRatedResponsePost_tags>(nullptr) );
            }
            else
            {
                std::shared_ptr<PagedRatedResponsePost_tags> newItem(new PagedRatedResponsePost_tags());
                newItem->fromJson(item);
                m_Tags.push_back( newItem );
            }
        }
        }
    }
    if(val.has_field(utility::conversions::to_string_t("license")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("license")];
        if(!fieldValue.is_null())
        {
            setLicense(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("contentUrl")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("contentUrl")];
        if(!fieldValue.is_null())
        {
            setContentUrl(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("blurHash")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("blurHash")];
        if(!fieldValue.is_null())
        {
            setBlurHash(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("newcoinMintTx")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("newcoinMintTx")];
        if(!fieldValue.is_null())
        {
            setNewcoinMintTx(ModelBase::stringFromJson(fieldValue));
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
    if(val.has_field(utility::conversions::to_string_t("consentEmail")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("consentEmail")];
        if(!fieldValue.is_null())
        {
            setConsentEmail(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("updated")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("updated")];
        if(!fieldValue.is_null())
        {
            setUpdated(ModelBase::stringFromJson(fieldValue));
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
    if(val.has_field(utility::conversions::to_string_t("longitude")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("longitude")];
        if(!fieldValue.is_null())
        {
            setLongitude(ModelBase::doubleFromJson(fieldValue));
        }
    }
}

void PagedRatedResponsePost_value::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_CoverContentUrlIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("coverContentUrl"), m_CoverContentUrl));
        
    }
    if(m_MoodIdIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("moodId"), m_MoodId));
        
    }
    if(m_CreatedIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("created"), m_Created));
        
    }
    if(m_AuthorIsSet)
    {
        if (m_Author.get())
        {
            m_Author->toMultipart(multipart, utility::conversions::to_string_t("author."));
        }
        
    }
    if(m_LatitudeIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("latitude"), m_Latitude));
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Moods )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        
        if(jsonArray.size() > 0)
        {
            multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("moods"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
        }
    }
    if(m_RatingIsSet)
    {
        if (m_Rating.get())
        {
            m_Rating->toMultipart(multipart, utility::conversions::to_string_t("rating."));
        }
        
    }
    if(m_DescriptionIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("description"), m_Description));
        
    }
    if(m_AspectRatioIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("aspectRatio"), m_AspectRatio));
    }
    if(m_TitleIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("title"), m_Title));
        
    }
    if(m_ContentIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("content"), m_Content));
        
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Tags )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        
        if(jsonArray.size() > 0)
        {
            multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("tags"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
        }
    }
    if(m_LicenseIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("license"), m_License));
        
    }
    if(m_ContentUrlIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("contentUrl"), m_ContentUrl));
        
    }
    if(m_BlurHashIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("blurHash"), m_BlurHash));
        
    }
    if(m_NewcoinMintTxIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("newcoinMintTx"), m_NewcoinMintTx));
        
    }
    if(m_IdIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("id"), m_Id));
        
    }
    if(m_ConsentEmailIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("consentEmail"), m_ConsentEmail));
        
    }
    if(m_UpdatedIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("updated"), m_Updated));
        
    }
    if(m_ContentTypeIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("contentType"), m_ContentType));
        
    }
    if(m_LongitudeIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("longitude"), m_Longitude));
    }
}

void PagedRatedResponsePost_value::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("coverContentUrl")))
    {
        setCoverContentUrl(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("coverContentUrl"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("moodId")))
    {
        setMoodId(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("moodId"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("created")))
    {
        setCreated(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("created"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("author")))
    {
        if(multipart->hasContent(utility::conversions::to_string_t("author")))
        {
            std::shared_ptr<PagedRatedResponsePost_author> newItem(new PagedRatedResponsePost_author());
            newItem->fromMultiPart(multipart, utility::conversions::to_string_t("author."));
            setAuthor( newItem );
        }
    }
    if(multipart->hasContent(utility::conversions::to_string_t("latitude")))
    {
        setLatitude(ModelBase::doubleFromHttpContent(multipart->getContent(utility::conversions::to_string_t("latitude"))));
    }
    {
        m_Moods.clear();
        if(multipart->hasContent(utility::conversions::to_string_t("moods")))
        {

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("moods"))));
        for( auto& item : jsonArray.as_array() )
        {
            if(item.is_null())
            {
                m_Moods.push_back( std::shared_ptr<PagedRatedResponsePost_moods>(nullptr) );
            }
            else
            {
                std::shared_ptr<PagedRatedResponsePost_moods> newItem(new PagedRatedResponsePost_moods());
                newItem->fromJson(item);
                m_Moods.push_back( newItem );
            }
        }
        }
    }
    if(multipart->hasContent(utility::conversions::to_string_t("rating")))
    {
        if(multipart->hasContent(utility::conversions::to_string_t("rating")))
        {
            std::shared_ptr<PagedRatedResponseUser_rating> newItem(new PagedRatedResponseUser_rating());
            newItem->fromMultiPart(multipart, utility::conversions::to_string_t("rating."));
            setRating( newItem );
        }
    }
    if(multipart->hasContent(utility::conversions::to_string_t("description")))
    {
        setDescription(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("description"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("aspectRatio")))
    {
        setAspectRatio(ModelBase::doubleFromHttpContent(multipart->getContent(utility::conversions::to_string_t("aspectRatio"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("title")))
    {
        setTitle(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("title"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("content")))
    {
        setContent(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("content"))));
    }
    {
        m_Tags.clear();
        if(multipart->hasContent(utility::conversions::to_string_t("tags")))
        {

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("tags"))));
        for( auto& item : jsonArray.as_array() )
        {
            if(item.is_null())
            {
                m_Tags.push_back( std::shared_ptr<PagedRatedResponsePost_tags>(nullptr) );
            }
            else
            {
                std::shared_ptr<PagedRatedResponsePost_tags> newItem(new PagedRatedResponsePost_tags());
                newItem->fromJson(item);
                m_Tags.push_back( newItem );
            }
        }
        }
    }
    if(multipart->hasContent(utility::conversions::to_string_t("license")))
    {
        setLicense(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("license"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("contentUrl")))
    {
        setContentUrl(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("contentUrl"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("blurHash")))
    {
        setBlurHash(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("blurHash"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("newcoinMintTx")))
    {
        setNewcoinMintTx(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("newcoinMintTx"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("id")))
    {
        setId(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("id"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("consentEmail")))
    {
        setConsentEmail(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("consentEmail"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("updated")))
    {
        setUpdated(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("updated"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("contentType")))
    {
        setContentType(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("contentType"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("longitude")))
    {
        setLongitude(ModelBase::doubleFromHttpContent(multipart->getContent(utility::conversions::to_string_t("longitude"))));
    }
}

utility::string_t PagedRatedResponsePost_value::getCoverContentUrl() const
{
    return m_CoverContentUrl;
}


void PagedRatedResponsePost_value::setCoverContentUrl(utility::string_t value)
{
    m_CoverContentUrl = value;
    m_CoverContentUrlIsSet = true;
}
bool PagedRatedResponsePost_value::coverContentUrlIsSet() const
{
    return m_CoverContentUrlIsSet;
}

void PagedRatedResponsePost_value::unsetCoverContentUrl()
{
    m_CoverContentUrlIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getMoodId() const
{
    return m_MoodId;
}


void PagedRatedResponsePost_value::setMoodId(utility::string_t value)
{
    m_MoodId = value;
    m_MoodIdIsSet = true;
}
bool PagedRatedResponsePost_value::moodIdIsSet() const
{
    return m_MoodIdIsSet;
}

void PagedRatedResponsePost_value::unsetMoodId()
{
    m_MoodIdIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getCreated() const
{
    return m_Created;
}


void PagedRatedResponsePost_value::setCreated(utility::string_t value)
{
    m_Created = value;
    m_CreatedIsSet = true;
}
bool PagedRatedResponsePost_value::createdIsSet() const
{
    return m_CreatedIsSet;
}

void PagedRatedResponsePost_value::unsetCreated()
{
    m_CreatedIsSet = false;
}

std::shared_ptr<PagedRatedResponsePost_author> PagedRatedResponsePost_value::getAuthor() const
{
    return m_Author;
}


void PagedRatedResponsePost_value::setAuthor(std::shared_ptr<PagedRatedResponsePost_author> value)
{
    m_Author = value;
    m_AuthorIsSet = true;
}
bool PagedRatedResponsePost_value::authorIsSet() const
{
    return m_AuthorIsSet;
}

void PagedRatedResponsePost_value::unsetAuthor()
{
    m_AuthorIsSet = false;
}

double PagedRatedResponsePost_value::getLatitude() const
{
    return m_Latitude;
}


void PagedRatedResponsePost_value::setLatitude(double value)
{
    m_Latitude = value;
    m_LatitudeIsSet = true;
}
bool PagedRatedResponsePost_value::latitudeIsSet() const
{
    return m_LatitudeIsSet;
}

void PagedRatedResponsePost_value::unsetLatitude()
{
    m_LatitudeIsSet = false;
}

std::vector<std::shared_ptr<PagedRatedResponsePost_moods>>& PagedRatedResponsePost_value::getMoods()
{
    return m_Moods;
}

void PagedRatedResponsePost_value::setMoods(std::vector<std::shared_ptr<PagedRatedResponsePost_moods>> value)
{
    m_Moods = value;
    m_MoodsIsSet = true;
}
bool PagedRatedResponsePost_value::moodsIsSet() const
{
    return m_MoodsIsSet;
}

void PagedRatedResponsePost_value::unsetMoods()
{
    m_MoodsIsSet = false;
}

std::shared_ptr<PagedRatedResponseUser_rating> PagedRatedResponsePost_value::getRating() const
{
    return m_Rating;
}


void PagedRatedResponsePost_value::setRating(std::shared_ptr<PagedRatedResponseUser_rating> value)
{
    m_Rating = value;
    m_RatingIsSet = true;
}
bool PagedRatedResponsePost_value::ratingIsSet() const
{
    return m_RatingIsSet;
}

void PagedRatedResponsePost_value::unsetRating()
{
    m_RatingIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getDescription() const
{
    return m_Description;
}


void PagedRatedResponsePost_value::setDescription(utility::string_t value)
{
    m_Description = value;
    m_DescriptionIsSet = true;
}
bool PagedRatedResponsePost_value::descriptionIsSet() const
{
    return m_DescriptionIsSet;
}

void PagedRatedResponsePost_value::unsetDescription()
{
    m_DescriptionIsSet = false;
}

double PagedRatedResponsePost_value::getAspectRatio() const
{
    return m_AspectRatio;
}


void PagedRatedResponsePost_value::setAspectRatio(double value)
{
    m_AspectRatio = value;
    m_AspectRatioIsSet = true;
}
bool PagedRatedResponsePost_value::aspectRatioIsSet() const
{
    return m_AspectRatioIsSet;
}

void PagedRatedResponsePost_value::unsetAspectRatio()
{
    m_AspectRatioIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getTitle() const
{
    return m_Title;
}


void PagedRatedResponsePost_value::setTitle(utility::string_t value)
{
    m_Title = value;
    m_TitleIsSet = true;
}
bool PagedRatedResponsePost_value::titleIsSet() const
{
    return m_TitleIsSet;
}

void PagedRatedResponsePost_value::unsetTitle()
{
    m_TitleIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getContent() const
{
    return m_Content;
}


void PagedRatedResponsePost_value::setContent(utility::string_t value)
{
    m_Content = value;
    m_ContentIsSet = true;
}
bool PagedRatedResponsePost_value::contentIsSet() const
{
    return m_ContentIsSet;
}

void PagedRatedResponsePost_value::unsetContent()
{
    m_ContentIsSet = false;
}

std::vector<std::shared_ptr<PagedRatedResponsePost_tags>>& PagedRatedResponsePost_value::getTags()
{
    return m_Tags;
}

void PagedRatedResponsePost_value::setTags(std::vector<std::shared_ptr<PagedRatedResponsePost_tags>> value)
{
    m_Tags = value;
    m_TagsIsSet = true;
}
bool PagedRatedResponsePost_value::tagsIsSet() const
{
    return m_TagsIsSet;
}

void PagedRatedResponsePost_value::unsetTags()
{
    m_TagsIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getLicense() const
{
    return m_License;
}


void PagedRatedResponsePost_value::setLicense(utility::string_t value)
{
    m_License = value;
    m_LicenseIsSet = true;
}
bool PagedRatedResponsePost_value::licenseIsSet() const
{
    return m_LicenseIsSet;
}

void PagedRatedResponsePost_value::unsetLicense()
{
    m_LicenseIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getContentUrl() const
{
    return m_ContentUrl;
}


void PagedRatedResponsePost_value::setContentUrl(utility::string_t value)
{
    m_ContentUrl = value;
    m_ContentUrlIsSet = true;
}
bool PagedRatedResponsePost_value::contentUrlIsSet() const
{
    return m_ContentUrlIsSet;
}

void PagedRatedResponsePost_value::unsetContentUrl()
{
    m_ContentUrlIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getBlurHash() const
{
    return m_BlurHash;
}


void PagedRatedResponsePost_value::setBlurHash(utility::string_t value)
{
    m_BlurHash = value;
    m_BlurHashIsSet = true;
}
bool PagedRatedResponsePost_value::blurHashIsSet() const
{
    return m_BlurHashIsSet;
}

void PagedRatedResponsePost_value::unsetBlurHash()
{
    m_BlurHashIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getNewcoinMintTx() const
{
    return m_NewcoinMintTx;
}


void PagedRatedResponsePost_value::setNewcoinMintTx(utility::string_t value)
{
    m_NewcoinMintTx = value;
    m_NewcoinMintTxIsSet = true;
}
bool PagedRatedResponsePost_value::newcoinMintTxIsSet() const
{
    return m_NewcoinMintTxIsSet;
}

void PagedRatedResponsePost_value::unsetNewcoinMintTx()
{
    m_NewcoinMintTxIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getId() const
{
    return m_Id;
}


void PagedRatedResponsePost_value::setId(utility::string_t value)
{
    m_Id = value;
    m_IdIsSet = true;
}
bool PagedRatedResponsePost_value::idIsSet() const
{
    return m_IdIsSet;
}

void PagedRatedResponsePost_value::unsetId()
{
    m_IdIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getConsentEmail() const
{
    return m_ConsentEmail;
}


void PagedRatedResponsePost_value::setConsentEmail(utility::string_t value)
{
    m_ConsentEmail = value;
    m_ConsentEmailIsSet = true;
}
bool PagedRatedResponsePost_value::consentEmailIsSet() const
{
    return m_ConsentEmailIsSet;
}

void PagedRatedResponsePost_value::unsetConsentEmail()
{
    m_ConsentEmailIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getUpdated() const
{
    return m_Updated;
}


void PagedRatedResponsePost_value::setUpdated(utility::string_t value)
{
    m_Updated = value;
    m_UpdatedIsSet = true;
}
bool PagedRatedResponsePost_value::updatedIsSet() const
{
    return m_UpdatedIsSet;
}

void PagedRatedResponsePost_value::unsetUpdated()
{
    m_UpdatedIsSet = false;
}

utility::string_t PagedRatedResponsePost_value::getContentType() const
{
    return m_ContentType;
}


void PagedRatedResponsePost_value::setContentType(utility::string_t value)
{
    m_ContentType = value;
    m_ContentTypeIsSet = true;
}
bool PagedRatedResponsePost_value::contentTypeIsSet() const
{
    return m_ContentTypeIsSet;
}

void PagedRatedResponsePost_value::unsetContentType()
{
    m_ContentTypeIsSet = false;
}

double PagedRatedResponsePost_value::getLongitude() const
{
    return m_Longitude;
}


void PagedRatedResponsePost_value::setLongitude(double value)
{
    m_Longitude = value;
    m_LongitudeIsSet = true;
}
bool PagedRatedResponsePost_value::longitudeIsSet() const
{
    return m_LongitudeIsSet;
}

void PagedRatedResponsePost_value::unsetLongitude()
{
    m_LongitudeIsSet = false;
}

}
}
}
}
