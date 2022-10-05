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
 * SyncContactsRequest.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_SyncContactsRequest_H_
#define IO_SWAGGER_CLIENT_MODEL_SyncContactsRequest_H_


#include "../ModelBase.h"

#include <vector>
#include "SyncContactsRequest_contacts.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  SyncContactsRequest
    : public ModelBase
{
public:
    SyncContactsRequest();
    virtual ~SyncContactsRequest();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// SyncContactsRequest members

    /// <summary>
    /// 
    /// </summary>
    std::vector<std::shared_ptr<SyncContactsRequest_contacts>>& getContacts();
    bool contactsIsSet() const;
    void unsetContacts();
    void setContacts(std::vector<std::shared_ptr<SyncContactsRequest_contacts>> value);

protected:
    std::vector<std::shared_ptr<SyncContactsRequest_contacts>> m_Contacts;
    bool m_ContactsIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_SyncContactsRequest_H_ */
