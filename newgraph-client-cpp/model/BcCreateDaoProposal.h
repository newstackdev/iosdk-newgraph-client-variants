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
 * BcCreateDaoProposal.h
 *
 * BcCreateDaoProposal Model
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_BcCreateDaoProposal_H_
#define IO_SWAGGER_CLIENT_MODEL_BcCreateDaoProposal_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// BcCreateDaoProposal Model
/// </summary>
class  BcCreateDaoProposal
    : public ModelBase
{
public:
    BcCreateDaoProposal();
    virtual ~BcCreateDaoProposal();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// BcCreateDaoProposal members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getSummary() const;
    bool summaryIsSet() const;
    void unsetSummary();
    void setSummary(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getVoteStart() const;
    bool voteStartIsSet() const;
    void unsetVote_start();
    void setVoteStart(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getDaoId() const;
    bool daoIdIsSet() const;
    void unsetDao_id();
    void setDaoId(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getDaoOwner() const;
    bool daoOwnerIsSet() const;
    void unsetDao_owner();
    void setDaoOwner(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getVoteEnd() const;
    bool voteEndIsSet() const;
    void unsetVote_end();
    void setVoteEnd(utility::string_t value);
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
    utility::string_t getUrl() const;
    bool urlIsSet() const;
    void unsetUrl();
    void setUrl(utility::string_t value);

protected:
    utility::string_t m_Summary;
    bool m_SummaryIsSet;
    utility::string_t m_Vote_start;
    bool m_Vote_startIsSet;
    utility::string_t m_Dao_id;
    bool m_Dao_idIsSet;
    utility::string_t m_Dao_owner;
    bool m_Dao_ownerIsSet;
    utility::string_t m_Vote_end;
    bool m_Vote_endIsSet;
    utility::string_t m_Title;
    bool m_TitleIsSet;
    utility::string_t m_Url;
    bool m_UrlIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_BcCreateDaoProposal_H_ */
