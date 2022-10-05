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
 * BcListDaoProposalsResponse_rows.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_BcListDaoProposalsResponse_rows_H_
#define IO_SWAGGER_CLIENT_MODEL_BcListDaoProposalsResponse_rows_H_


#include "../ModelBase.h"

#include "BcListDaoProposalsResponse_vote_no.h"
#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  BcListDaoProposalsResponse_rows
    : public ModelBase
{
public:
    BcListDaoProposalsResponse_rows();
    virtual ~BcListDaoProposalsResponse_rows();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// BcListDaoProposalsResponse_rows members

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
    utility::string_t getProposer() const;
    bool proposerIsSet() const;
    void unsetProposer();
    void setProposer(utility::string_t value);
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
    bool isMore() const;
    bool moreIsSet() const;
    void unsetMore();
    void setMore(bool value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getNextKey() const;
    bool nextKeyIsSet() const;
    void unsetNext_key();
    void setNextKey(utility::string_t value);
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
    double getId() const;
    bool idIsSet() const;
    void unsetId();
    void setId(double value);
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
    std::shared_ptr<BcListDaoProposalsResponse_vote_no> getVoteNo() const;
    bool voteNoIsSet() const;
    void unsetVote_no();
    void setVoteNo(std::shared_ptr<BcListDaoProposalsResponse_vote_no> value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getUrl() const;
    bool urlIsSet() const;
    void unsetUrl();
    void setUrl(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    std::shared_ptr<BcListDaoProposalsResponse_vote_no> getVoteYes() const;
    bool voteYesIsSet() const;
    void unsetVote_yes();
    void setVoteYes(std::shared_ptr<BcListDaoProposalsResponse_vote_no> value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getStatus() const;
    bool statusIsSet() const;
    void unsetStatus();
    void setStatus(utility::string_t value);

protected:
    utility::string_t m_Summary;
    bool m_SummaryIsSet;
    utility::string_t m_Proposer;
    bool m_ProposerIsSet;
    utility::string_t m_Vote_start;
    bool m_Vote_startIsSet;
    bool m_More;
    bool m_MoreIsSet;
    utility::string_t m_Next_key;
    bool m_Next_keyIsSet;
    utility::string_t m_Vote_end;
    bool m_Vote_endIsSet;
    double m_Id;
    bool m_IdIsSet;
    utility::string_t m_Title;
    bool m_TitleIsSet;
    std::shared_ptr<BcListDaoProposalsResponse_vote_no> m_Vote_no;
    bool m_Vote_noIsSet;
    utility::string_t m_Url;
    bool m_UrlIsSet;
    std::shared_ptr<BcListDaoProposalsResponse_vote_no> m_Vote_yes;
    bool m_Vote_yesIsSet;
    utility::string_t m_Status;
    bool m_StatusIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_BcListDaoProposalsResponse_rows_H_ */
