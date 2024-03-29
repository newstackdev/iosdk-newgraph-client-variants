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



#include "BcApproveDaoProposalRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

BcApproveDaoProposalRequest::BcApproveDaoProposalRequest()
{
    m_Approver = utility::conversions::to_string_t("");
    m_ApproverIsSet = false;
    m_Proposal_author = utility::conversions::to_string_t("");
    m_Proposal_authorIsSet = false;
    m_Proposal_id = utility::conversions::to_string_t("");
    m_Proposal_idIsSet = false;
    m_Dao_id = 0.0;
    m_Dao_idIsSet = false;
    m_Dao_owner = utility::conversions::to_string_t("");
    m_Dao_ownerIsSet = false;
    m_Approver_prv_key = utility::conversions::to_string_t("");
    m_Approver_prv_keyIsSet = false;
}

BcApproveDaoProposalRequest::~BcApproveDaoProposalRequest()
{
}

void BcApproveDaoProposalRequest::validate()
{
    // TODO: implement validation
}

web::json::value BcApproveDaoProposalRequest::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_ApproverIsSet)
    {
        val[utility::conversions::to_string_t("approver")] = ModelBase::toJson(m_Approver);
    }
    if(m_Proposal_authorIsSet)
    {
        val[utility::conversions::to_string_t("proposal_author")] = ModelBase::toJson(m_Proposal_author);
    }
    if(m_Proposal_idIsSet)
    {
        val[utility::conversions::to_string_t("proposal_id")] = ModelBase::toJson(m_Proposal_id);
    }
    if(m_Dao_idIsSet)
    {
        val[utility::conversions::to_string_t("dao_id")] = ModelBase::toJson(m_Dao_id);
    }
    if(m_Dao_ownerIsSet)
    {
        val[utility::conversions::to_string_t("dao_owner")] = ModelBase::toJson(m_Dao_owner);
    }
    if(m_Approver_prv_keyIsSet)
    {
        val[utility::conversions::to_string_t("approver_prv_key")] = ModelBase::toJson(m_Approver_prv_key);
    }

    return val;
}

void BcApproveDaoProposalRequest::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("approver")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("approver")];
        if(!fieldValue.is_null())
        {
            setApprover(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("proposal_author")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("proposal_author")];
        if(!fieldValue.is_null())
        {
            setProposalAuthor(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("proposal_id")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("proposal_id")];
        if(!fieldValue.is_null())
        {
            setProposalId(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("dao_id")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("dao_id")];
        if(!fieldValue.is_null())
        {
            setDaoId(ModelBase::doubleFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("dao_owner")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("dao_owner")];
        if(!fieldValue.is_null())
        {
            setDaoOwner(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("approver_prv_key")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("approver_prv_key")];
        if(!fieldValue.is_null())
        {
            setApproverPrvKey(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void BcApproveDaoProposalRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_ApproverIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("approver"), m_Approver));
        
    }
    if(m_Proposal_authorIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("proposal_author"), m_Proposal_author));
        
    }
    if(m_Proposal_idIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("proposal_id"), m_Proposal_id));
        
    }
    if(m_Dao_idIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("dao_id"), m_Dao_id));
    }
    if(m_Dao_ownerIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("dao_owner"), m_Dao_owner));
        
    }
    if(m_Approver_prv_keyIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("approver_prv_key"), m_Approver_prv_key));
        
    }
}

void BcApproveDaoProposalRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("approver")))
    {
        setApprover(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("approver"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("proposal_author")))
    {
        setProposalAuthor(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("proposal_author"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("proposal_id")))
    {
        setProposalId(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("proposal_id"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("dao_id")))
    {
        setDaoId(ModelBase::doubleFromHttpContent(multipart->getContent(utility::conversions::to_string_t("dao_id"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("dao_owner")))
    {
        setDaoOwner(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("dao_owner"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("approver_prv_key")))
    {
        setApproverPrvKey(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("approver_prv_key"))));
    }
}

utility::string_t BcApproveDaoProposalRequest::getApprover() const
{
    return m_Approver;
}


void BcApproveDaoProposalRequest::setApprover(utility::string_t value)
{
    m_Approver = value;
    m_ApproverIsSet = true;
}
bool BcApproveDaoProposalRequest::approverIsSet() const
{
    return m_ApproverIsSet;
}

void BcApproveDaoProposalRequest::unsetApprover()
{
    m_ApproverIsSet = false;
}

utility::string_t BcApproveDaoProposalRequest::getProposalAuthor() const
{
    return m_Proposal_author;
}


void BcApproveDaoProposalRequest::setProposalAuthor(utility::string_t value)
{
    m_Proposal_author = value;
    m_Proposal_authorIsSet = true;
}
bool BcApproveDaoProposalRequest::proposalAuthorIsSet() const
{
    return m_Proposal_authorIsSet;
}

void BcApproveDaoProposalRequest::unsetProposal_author()
{
    m_Proposal_authorIsSet = false;
}

utility::string_t BcApproveDaoProposalRequest::getProposalId() const
{
    return m_Proposal_id;
}


void BcApproveDaoProposalRequest::setProposalId(utility::string_t value)
{
    m_Proposal_id = value;
    m_Proposal_idIsSet = true;
}
bool BcApproveDaoProposalRequest::proposalIdIsSet() const
{
    return m_Proposal_idIsSet;
}

void BcApproveDaoProposalRequest::unsetProposal_id()
{
    m_Proposal_idIsSet = false;
}

double BcApproveDaoProposalRequest::getDaoId() const
{
    return m_Dao_id;
}


void BcApproveDaoProposalRequest::setDaoId(double value)
{
    m_Dao_id = value;
    m_Dao_idIsSet = true;
}
bool BcApproveDaoProposalRequest::daoIdIsSet() const
{
    return m_Dao_idIsSet;
}

void BcApproveDaoProposalRequest::unsetDao_id()
{
    m_Dao_idIsSet = false;
}

utility::string_t BcApproveDaoProposalRequest::getDaoOwner() const
{
    return m_Dao_owner;
}


void BcApproveDaoProposalRequest::setDaoOwner(utility::string_t value)
{
    m_Dao_owner = value;
    m_Dao_ownerIsSet = true;
}
bool BcApproveDaoProposalRequest::daoOwnerIsSet() const
{
    return m_Dao_ownerIsSet;
}

void BcApproveDaoProposalRequest::unsetDao_owner()
{
    m_Dao_ownerIsSet = false;
}

utility::string_t BcApproveDaoProposalRequest::getApproverPrvKey() const
{
    return m_Approver_prv_key;
}


void BcApproveDaoProposalRequest::setApproverPrvKey(utility::string_t value)
{
    m_Approver_prv_key = value;
    m_Approver_prv_keyIsSet = true;
}
bool BcApproveDaoProposalRequest::approverPrvKeyIsSet() const
{
    return m_Approver_prv_keyIsSet;
}

void BcApproveDaoProposalRequest::unsetApprover_prv_key()
{
    m_Approver_prv_keyIsSet = false;
}

}
}
}
}

