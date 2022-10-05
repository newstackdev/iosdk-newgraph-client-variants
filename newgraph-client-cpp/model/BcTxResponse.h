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
 * BcTxResponse.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_BcTxResponse_H_
#define IO_SWAGGER_CLIENT_MODEL_BcTxResponse_H_


#include "../ModelBase.h"

#include <cpprest/details/basic_types.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

/// <summary>
/// 
/// </summary>
class  BcTxResponse
    : public ModelBase
{
public:
    BcTxResponse();
    virtual ~BcTxResponse();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    void fromJson(web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    void fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// BcTxResponse members

    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTxIDCreateTpl() const;
    bool txIDCreateTplIsSet() const;
    void unsetTxID_createTpl();
    void setTxIDCreateTpl(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTxIDCreatePool() const;
    bool txIDCreatePoolIsSet() const;
    void unsetTxID_createPool();
    void setTxIDCreatePool(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTxIDCreateAcc() const;
    bool txIDCreateAccIsSet() const;
    void unsetTxID_createAcc();
    void setTxIDCreateAcc(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTxIDCreateCol() const;
    bool txIDCreateColIsSet() const;
    void unsetTxID_createCol();
    void setTxIDCreateCol(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTxIDCreateSch() const;
    bool txIDCreateSchIsSet() const;
    void unsetTxID_createSch();
    void setTxIDCreateSch(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTxIDStakeToPool() const;
    bool txIDStakeToPoolIsSet() const;
    void unsetTxID_stakeToPool();
    void setTxIDStakeToPool(utility::string_t value);
    /// <summary>
    /// 
    /// </summary>
    utility::string_t getTxIDMintAsset() const;
    bool txIDMintAssetIsSet() const;
    void unsetTxID_mintAsset();
    void setTxIDMintAsset(utility::string_t value);

protected:
    utility::string_t m_TxID_createTpl;
    bool m_TxID_createTplIsSet;
    utility::string_t m_TxID_createPool;
    bool m_TxID_createPoolIsSet;
    utility::string_t m_TxID_createAcc;
    bool m_TxID_createAccIsSet;
    utility::string_t m_TxID_createCol;
    bool m_TxID_createColIsSet;
    utility::string_t m_TxID_createSch;
    bool m_TxID_createSchIsSet;
    utility::string_t m_TxID_stakeToPool;
    bool m_TxID_stakeToPoolIsSet;
    utility::string_t m_TxID_mintAsset;
    bool m_TxID_mintAssetIsSet;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_BcTxResponse_H_ */
