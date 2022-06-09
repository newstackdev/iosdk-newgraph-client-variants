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
 * UserPreRegisterRequest.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_UserPreRegisterRequest_H_
#define IO_SWAGGER_CLIENT_MODEL_UserPreRegisterRequest_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  UserPreRegisterRequest
    : public ModelBase
{
public:
    UserPreRegisterRequest();
    virtual ~UserPreRegisterRequest();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// UserPreRegisterRequest members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getConsentTestgroup() const;
    bool consentTestgroupIsSet() const;
    void unsetConsentTestgroup();
    void setConsentTestgroup(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getConsentPrivacyPolicy() const;
    bool consentPrivacyPolicyIsSet() const;
    void unsetConsentPrivacyPolicy();
    void setConsentPrivacyPolicy(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getPhone() const;
        void setPhone(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getFullName() const;
    bool fullNameIsSet() const;
    void unsetFullName();
    void setFullName(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getConsentEmail() const;
    bool consentEmailIsSet() const;
    void unsetConsentEmail();
    void setConsentEmail(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getEmail() const;
    bool emailIsSet() const;
    void unsetEmail();
    void setEmail(utility::string_t value);

protected:
    utility::string_t m_ConsentTestgroup;
    bool m_ConsentTestgroupIsSet;
    utility::string_t m_ConsentPrivacyPolicy;
    bool m_ConsentPrivacyPolicyIsSet;
    utility::string_t m_Phone;
        utility::string_t m_FullName;
    bool m_FullNameIsSet;
    utility::string_t m_ConsentEmail;
    bool m_ConsentEmailIsSet;
    utility::string_t m_Email;
    bool m_EmailIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_UserPreRegisterRequest_H_ */