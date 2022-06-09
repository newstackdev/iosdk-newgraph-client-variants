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

/*
 * ReportUpdateRequest.h
 *
 * ReportUpdateRequest Model
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_ReportUpdateRequest_H_
#define IO_SWAGGER_CLIENT_MODEL_ReportUpdateRequest_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// ReportUpdateRequest Model
/// </summary>
class  ReportUpdateRequest
    : public ModelBase
{
public:
    ReportUpdateRequest();
    virtual ~ReportUpdateRequest();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// ReportUpdateRequest members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getReason() const;
        void setReason(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTargetId() const;
        void setTargetId(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getComment() const;
    bool commentIsSet() const;
    void unsetComment();
    void setComment(utility::string_t value);

protected:
    utility::string_t m_Reason;
        utility::string_t m_TargetId;
        utility::string_t m_Comment;
    bool m_CommentIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_ReportUpdateRequest_H_ */