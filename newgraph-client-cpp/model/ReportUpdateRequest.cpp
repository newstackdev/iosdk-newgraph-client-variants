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



#include "ReportUpdateRequest.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

ReportUpdateRequest::ReportUpdateRequest()
{
    m_Reason = utility::conversions::to_string_t("");
    m_TargetId = utility::conversions::to_string_t("");
    m_Comment = utility::conversions::to_string_t("");
    m_CommentIsSet = false;
}

ReportUpdateRequest::~ReportUpdateRequest()
{
}

void ReportUpdateRequest::validate()
{
    // TODO: implement validation
}

web::json::value ReportUpdateRequest::toJson() const
{
    web::json::value val = web::json::value::object();

    val[utility::conversions::to_string_t("reason")] = ModelBase::toJson(m_Reason);
    val[utility::conversions::to_string_t("targetId")] = ModelBase::toJson(m_TargetId);
    if(m_CommentIsSet)
    {
        val[utility::conversions::to_string_t("comment")] = ModelBase::toJson(m_Comment);
    }

    return val;
}

void ReportUpdateRequest::fromJson(web::json::value& val)
{
    setReason(ModelBase::stringFromJson(val[utility::conversions::to_string_t("reason")]));
    setTargetId(ModelBase::stringFromJson(val[utility::conversions::to_string_t("targetId")]));
    if(val.has_field(utility::conversions::to_string_t("comment")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("comment")];
        if(!fieldValue.is_null())
        {
            setComment(ModelBase::stringFromJson(fieldValue));
        }
    }
}

void ReportUpdateRequest::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("reason"), m_Reason));
    multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("targetId"), m_TargetId));
    if(m_CommentIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("comment"), m_Comment));
        
    }
}

void ReportUpdateRequest::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    setReason(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("reason"))));
    setTargetId(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("targetId"))));
    if(multipart->hasContent(utility::conversions::to_string_t("comment")))
    {
        setComment(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("comment"))));
    }
}

utility::string_t ReportUpdateRequest::getReason() const
{
    return m_Reason;
}


void ReportUpdateRequest::setReason(utility::string_t value)
{
    m_Reason = value;
    
}
utility::string_t ReportUpdateRequest::getTargetId() const
{
    return m_TargetId;
}


void ReportUpdateRequest::setTargetId(utility::string_t value)
{
    m_TargetId = value;
    
}
utility::string_t ReportUpdateRequest::getComment() const
{
    return m_Comment;
}


void ReportUpdateRequest::setComment(utility::string_t value)
{
    m_Comment = value;
    m_CommentIsSet = true;
}
bool ReportUpdateRequest::commentIsSet() const
{
    return m_CommentIsSet;
}

void ReportUpdateRequest::unsetComment()
{
    m_CommentIsSet = false;
}

}
}
}
}

