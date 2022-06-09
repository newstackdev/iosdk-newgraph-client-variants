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
 * JsonBody.h
 *
 * This is a JSON http body which can be submitted via http
 */

#ifndef IO_SWAGGER_CLIENT_MODEL_JsonBody_H_
#define IO_SWAGGER_CLIENT_MODEL_JsonBody_H_


#include "IHttpBody.h"

#include <cpprest/json.h>

namespace io {
namespace swagger {
namespace client {
namespace model {

class  JsonBody
    : public IHttpBody
{
public:
    JsonBody( const web::json::value& value );
    virtual ~JsonBody();

    void writeTo( std::ostream& target ) override;

protected:
    web::json::value m_Json;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_MODEL_JsonBody_H_ */
