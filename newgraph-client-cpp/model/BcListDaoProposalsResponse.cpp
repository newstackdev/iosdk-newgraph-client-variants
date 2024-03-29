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



#include "BcListDaoProposalsResponse.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

BcListDaoProposalsResponse::BcListDaoProposalsResponse()
{
    m_More = false;
    m_MoreIsSet = false;
    m_Dao_id = utility::conversions::to_string_t("");
    m_Dao_idIsSet = false;
    m_Next_key = utility::conversions::to_string_t("");
    m_Next_keyIsSet = false;
    m_RowsIsSet = false;
}

BcListDaoProposalsResponse::~BcListDaoProposalsResponse()
{
}

void BcListDaoProposalsResponse::validate()
{
    // TODO: implement validation
}

web::json::value BcListDaoProposalsResponse::toJson() const
{
    web::json::value val = web::json::value::object();

    if(m_MoreIsSet)
    {
        val[utility::conversions::to_string_t("more")] = ModelBase::toJson(m_More);
    }
    if(m_Dao_idIsSet)
    {
        val[utility::conversions::to_string_t("dao_id")] = ModelBase::toJson(m_Dao_id);
    }
    if(m_Next_keyIsSet)
    {
        val[utility::conversions::to_string_t("next_key")] = ModelBase::toJson(m_Next_key);
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Rows )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        if(jsonArray.size() > 0)
        {
            val[utility::conversions::to_string_t("rows")] = web::json::value::array(jsonArray);
        }
    }

    return val;
}

void BcListDaoProposalsResponse::fromJson(web::json::value& val)
{
    if(val.has_field(utility::conversions::to_string_t("more")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("more")];
        if(!fieldValue.is_null())
        {
            setMore(ModelBase::boolFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("dao_id")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("dao_id")];
        if(!fieldValue.is_null())
        {
            setDaoId(ModelBase::stringFromJson(fieldValue));
        }
    }
    if(val.has_field(utility::conversions::to_string_t("next_key")))
    {
        web::json::value& fieldValue = val[utility::conversions::to_string_t("next_key")];
        if(!fieldValue.is_null())
        {
            setNextKey(ModelBase::stringFromJson(fieldValue));
        }
    }
    {
        m_Rows.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(utility::conversions::to_string_t("rows")))
        {
        for( auto& item : val[utility::conversions::to_string_t("rows")].as_array() )
        {
            if(item.is_null())
            {
                m_Rows.push_back( std::shared_ptr<BcListDaoProposalsResponse_rows>(nullptr) );
            }
            else
            {
                std::shared_ptr<BcListDaoProposalsResponse_rows> newItem(new BcListDaoProposalsResponse_rows());
                newItem->fromJson(item);
                m_Rows.push_back( newItem );
            }
        }
        }
    }
}

void BcListDaoProposalsResponse::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(m_MoreIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("more"), m_More));
    }
    if(m_Dao_idIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("dao_id"), m_Dao_id));
        
    }
    if(m_Next_keyIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("next_key"), m_Next_key));
        
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Rows )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        
        if(jsonArray.size() > 0)
        {
            multipart->add(ModelBase::toHttpContent(namePrefix + utility::conversions::to_string_t("rows"), web::json::value::array(jsonArray), utility::conversions::to_string_t("application/json")));
        }
    }
}

void BcListDaoProposalsResponse::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
    if(namePrefix.size() > 0 && namePrefix.substr(namePrefix.size() - 1) != utility::conversions::to_string_t("."))
    {
        namePrefix += utility::conversions::to_string_t(".");
    }

    if(multipart->hasContent(utility::conversions::to_string_t("more")))
    {
        setMore(ModelBase::boolFromHttpContent(multipart->getContent(utility::conversions::to_string_t("more"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("dao_id")))
    {
        setDaoId(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("dao_id"))));
    }
    if(multipart->hasContent(utility::conversions::to_string_t("next_key")))
    {
        setNextKey(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("next_key"))));
    }
    {
        m_Rows.clear();
        if(multipart->hasContent(utility::conversions::to_string_t("rows")))
        {

        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(utility::conversions::to_string_t("rows"))));
        for( auto& item : jsonArray.as_array() )
        {
            if(item.is_null())
            {
                m_Rows.push_back( std::shared_ptr<BcListDaoProposalsResponse_rows>(nullptr) );
            }
            else
            {
                std::shared_ptr<BcListDaoProposalsResponse_rows> newItem(new BcListDaoProposalsResponse_rows());
                newItem->fromJson(item);
                m_Rows.push_back( newItem );
            }
        }
        }
    }
}

bool BcListDaoProposalsResponse::isMore() const
{
    return m_More;
}


void BcListDaoProposalsResponse::setMore(bool value)
{
    m_More = value;
    m_MoreIsSet = true;
}
bool BcListDaoProposalsResponse::moreIsSet() const
{
    return m_MoreIsSet;
}

void BcListDaoProposalsResponse::unsetMore()
{
    m_MoreIsSet = false;
}

utility::string_t BcListDaoProposalsResponse::getDaoId() const
{
    return m_Dao_id;
}


void BcListDaoProposalsResponse::setDaoId(utility::string_t value)
{
    m_Dao_id = value;
    m_Dao_idIsSet = true;
}
bool BcListDaoProposalsResponse::daoIdIsSet() const
{
    return m_Dao_idIsSet;
}

void BcListDaoProposalsResponse::unsetDao_id()
{
    m_Dao_idIsSet = false;
}

utility::string_t BcListDaoProposalsResponse::getNextKey() const
{
    return m_Next_key;
}


void BcListDaoProposalsResponse::setNextKey(utility::string_t value)
{
    m_Next_key = value;
    m_Next_keyIsSet = true;
}
bool BcListDaoProposalsResponse::nextKeyIsSet() const
{
    return m_Next_keyIsSet;
}

void BcListDaoProposalsResponse::unsetNext_key()
{
    m_Next_keyIsSet = false;
}

std::vector<std::shared_ptr<BcListDaoProposalsResponse_rows>>& BcListDaoProposalsResponse::getRows()
{
    return m_Rows;
}

void BcListDaoProposalsResponse::setRows(std::vector<std::shared_ptr<BcListDaoProposalsResponse_rows>> value)
{
    m_Rows = value;
    m_RowsIsSet = true;
}
bool BcListDaoProposalsResponse::rowsIsSet() const
{
    return m_RowsIsSet;
}

void BcListDaoProposalsResponse::unsetRows()
{
    m_RowsIsSet = false;
}

}
}
}
}

