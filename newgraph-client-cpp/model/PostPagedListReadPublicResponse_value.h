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

/*
 * PostPagedListReadPublicResponse_value.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_PostPagedListReadPublicResponse_value_H_
#define IO_SWAGGER_CLIENT_MODEL_PostPagedListReadPublicResponse_value_H_


#include "../ModelBase.h"

#include "MoodPagedListReadPublicResponse_tags.h"
#include "PostCreateResponse_author.h"
#include <cpprest/details/basic_types.h>
#include <vector>
#include "PostCreateResponse_moods.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  PostPagedListReadPublicResponse_value
    : public ModelBase
{
public:
    PostPagedListReadPublicResponse_value();
    virtual ~PostPagedListReadPublicResponse_value();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// PostPagedListReadPublicResponse_value members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getCoverContentUrl() const;
    bool coverContentUrlIsSet() const;
    void unsetCoverContentUrl();
    void setCoverContentUrl(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getMoodId() const;
    bool moodIdIsSet() const;
    void unsetMoodId();
    void setMoodId(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getCreated() const;
    bool createdIsSet() const;
    void unsetCreated();
    void setCreated(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    std::shared_ptr<PostCreateResponse_author> getAuthor() const;
    bool authorIsSet() const;
    void unsetAuthor();
    void setAuthor(std::shared_ptr<PostCreateResponse_author> value);
    /// <summary>
    /// 
    /// </summary>
    double getLatitude() const;
    bool latitudeIsSet() const;
    void unsetLatitude();
    void setLatitude(double value);
    /// <summary>
    /// 
    /// </summary>
    std::vector<std::shared_ptr<PostCreateResponse_moods>>& getMoods();
    bool moodsIsSet() const;
    void unsetMoods();
    void setMoods(std::vector<std::shared_ptr<PostCreateResponse_moods>> value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getDescription() const;
    bool descriptionIsSet() const;
    void unsetDescription();
    void setDescription(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    double getAspectRatio() const;
    bool aspectRatioIsSet() const;
    void unsetAspectRatio();
    void setAspectRatio(double value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTitle() const;
    bool titleIsSet() const;
    void unsetTitle();
    void setTitle(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getContent() const;
    bool contentIsSet() const;
    void unsetContent();
    void setContent(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    std::vector<std::shared_ptr<MoodPagedListReadPublicResponse_tags>>& getTags();
    bool tagsIsSet() const;
    void unsetTags();
    void setTags(std::vector<std::shared_ptr<MoodPagedListReadPublicResponse_tags>> value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getLicense() const;
    bool licenseIsSet() const;
    void unsetLicense();
    void setLicense(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getContentUrl() const;
    bool contentUrlIsSet() const;
    void unsetContentUrl();
    void setContentUrl(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getBlurHash() const;
    bool blurHashIsSet() const;
    void unsetBlurHash();
    void setBlurHash(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getNewcoinMintTx() const;
    bool newcoinMintTxIsSet() const;
    void unsetNewcoinMintTx();
    void setNewcoinMintTx(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getId() const;
    bool idIsSet() const;
    void unsetId();
    void setId(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getEmbed() const;
    bool embedIsSet() const;
    void unsetEmbed();
    void setEmbed(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getUpdated() const;
    bool updatedIsSet() const;
    void unsetUpdated();
    void setUpdated(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getContentType() const;
    bool contentTypeIsSet() const;
    void unsetContentType();
    void setContentType(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    double getLongitude() const;
    bool longitudeIsSet() const;
    void unsetLongitude();
    void setLongitude(double value);

protected:
    utility::string_t m_CoverContentUrl;
    bool m_CoverContentUrlIsSet;
    utility::string_t m_MoodId;
    bool m_MoodIdIsSet;
    utility::string_t m_Created;
    bool m_CreatedIsSet;
    std::shared_ptr<PostCreateResponse_author> m_Author;
    bool m_AuthorIsSet;
    double m_Latitude;
    bool m_LatitudeIsSet;
    std::vector<std::shared_ptr<PostCreateResponse_moods>> m_Moods;
    bool m_MoodsIsSet;
    utility::string_t m_Description;
    bool m_DescriptionIsSet;
    double m_AspectRatio;
    bool m_AspectRatioIsSet;
    utility::string_t m_Title;
    bool m_TitleIsSet;
    utility::string_t m_Content;
    bool m_ContentIsSet;
    std::vector<std::shared_ptr<MoodPagedListReadPublicResponse_tags>> m_Tags;
    bool m_TagsIsSet;
    utility::string_t m_License;
    bool m_LicenseIsSet;
    utility::string_t m_ContentUrl;
    bool m_ContentUrlIsSet;
    utility::string_t m_BlurHash;
    bool m_BlurHashIsSet;
    utility::string_t m_NewcoinMintTx;
    bool m_NewcoinMintTxIsSet;
    utility::string_t m_Id;
    bool m_IdIsSet;
    utility::string_t m_Embed;
    bool m_EmbedIsSet;
    utility::string_t m_Updated;
    bool m_UpdatedIsSet;
    utility::string_t m_ContentType;
    bool m_ContentTypeIsSet;
    double m_Longitude;
    bool m_LongitudeIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_PostPagedListReadPublicResponse_value_H_ */
