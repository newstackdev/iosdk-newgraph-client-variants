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
 * RatingUpdateRequest.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_RatingUpdateRequest_H_
#define IO_SWAGGER_CLIENT_MODEL_RatingUpdateRequest_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  RatingUpdateRequest
    : public ModelBase
{
public:
    RatingUpdateRequest();
    virtual ~RatingUpdateRequest();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// RatingUpdateRequest members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTargetId() const;
    bool targetIdIsSet() const;
    void unsetTargetId();
    void setTargetId(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getContextType() const;
    bool contextTypeIsSet() const;
    void unsetContextType();
    void setContextType(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getContextValue() const;
    bool contextValueIsSet() const;
    void unsetContextValue();
    void setContextValue(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    double getValue() const;
        void setValue(double value);

protected:
    utility::string_t m_TargetId;
    bool m_TargetIdIsSet;
    utility::string_t m_ContextType;
    bool m_ContextTypeIsSet;
    utility::string_t m_ContextValue;
    bool m_ContextValueIsSet;
    double m_Value;
    };

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_RatingUpdateRequest_H_ */
