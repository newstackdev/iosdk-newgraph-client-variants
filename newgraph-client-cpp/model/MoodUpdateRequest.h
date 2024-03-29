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

/*
 * MoodUpdateRequest.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_MoodUpdateRequest_H_
#define IO_SWAGGER_CLIENT_MODEL_MoodUpdateRequest_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  MoodUpdateRequest
    : public ModelBase
{
public:
    MoodUpdateRequest();
    virtual ~MoodUpdateRequest();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// MoodUpdateRequest members

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
    utility::string_t getDescription() const;
    bool descriptionIsSet() const;
    void unsetDescription();
    void setDescription(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getId() const;
        void setId(utility::string_t value);
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
    double getLongitude() const;
    bool longitudeIsSet() const;
    void unsetLongitude();
    void setLongitude(double value);

protected:
    double m_Latitude;
    bool m_LatitudeIsSet;
    utility::string_t m_Description;
    bool m_DescriptionIsSet;
    utility::string_t m_Id;
        utility::string_t m_Title;
    bool m_TitleIsSet;
    double m_Longitude;
    bool m_LongitudeIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_MoodUpdateRequest_H_ */
