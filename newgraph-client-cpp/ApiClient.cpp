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

#include "ApiClient.h"
#include "MultipartFormData.h"
#include "ModelBase.h"

namespace io {
namespace swagger {
namespace client {
namespace api {

using namespace io::swagger::client::model;

ApiClient::ApiClient(std::shared_ptr<ApiConfiguration> configuration )
    : m_Configuration(configuration)
{
}
ApiClient::~ApiClient()
{
}

std::shared_ptr<ApiConfiguration> ApiClient::getConfiguration() const
{
    return m_Configuration;
}
void ApiClient::setConfiguration(std::shared_ptr<ApiConfiguration> configuration)
{
    m_Configuration = configuration;
}


utility::string_t ApiClient::parameterToString(utility::string_t value)
{
    return value;
}

utility::string_t ApiClient::parameterToString(bool value)
{
    std::stringstream valueAsStringStream;
    valueAsStringStream << (value ? "true" : "false");
    return utility::conversions::to_string_t(valueAsStringStream.str());
}

utility::string_t ApiClient::parameterToString(int64_t value)
{
	std::stringstream valueAsStringStream;
	valueAsStringStream << value;
    return utility::conversions::to_string_t(valueAsStringStream.str());
}
utility::string_t ApiClient::parameterToString(int32_t value)
{
	std::stringstream valueAsStringStream;
	valueAsStringStream << value;
    return utility::conversions::to_string_t(valueAsStringStream.str());
}

utility::string_t ApiClient::parameterToString(float value)
{
    return utility::conversions::to_string_t(std::to_string(value));
}

utility::string_t ApiClient::parameterToString(double value)
{
    return utility::conversions::to_string_t(std::to_string(value));
}

utility::string_t ApiClient::parameterToString(const utility::datetime &value)
{
    return utility::conversions::to_string_t(value.to_string(utility::datetime::ISO_8601));
}

pplx::task<web::http::http_response> ApiClient::callApi(
    const utility::string_t& path,
    const utility::string_t& method,
    const std::map<utility::string_t, utility::string_t>& queryParams,
    const std::shared_ptr<IHttpBody> postBody,
    const std::map<utility::string_t, utility::string_t>& headerParams,
    const std::map<utility::string_t, utility::string_t>& formParams,
    const std::map<utility::string_t, std::shared_ptr<HttpContent>>& fileParams,
    const utility::string_t& contentType
) const
{
    if (postBody != nullptr && formParams.size() != 0)
    {
        throw ApiException(400, utility::conversions::to_string_t("Cannot have body and form params"));
    }

    if (postBody != nullptr && fileParams.size() != 0)
    {
        throw ApiException(400, utility::conversions::to_string_t("Cannot have body and file params"));
    }

    if (fileParams.size() > 0 && contentType != utility::conversions::to_string_t("multipart/form-data"))
    {
        throw ApiException(400, utility::conversions::to_string_t("Operations with file parameters must be called with multipart/form-data"));
    }

    web::http::client::http_client client(m_Configuration->getBaseUrl(), m_Configuration->getHttpConfig());

    web::http::http_request request;
    for ( auto& kvp : headerParams )
    {
        request.headers().add(kvp.first, kvp.second);
    }

    if (fileParams.size() > 0)
    {
        MultipartFormData uploadData;
        for (auto& kvp : formParams)
        {
            uploadData.add(ModelBase::toHttpContent(kvp.first, kvp.second));
        }
        for (auto& kvp : fileParams)
        {
            uploadData.add(ModelBase::toHttpContent(kvp.first, kvp.second));
        }
        std::stringstream data;
        uploadData.writeTo(data);
        auto bodyString = data.str();
        auto length = bodyString.size();
        request.set_body(concurrency::streams::bytestream::open_istream(std::move(bodyString)), length, utility::conversions::to_string_t("multipart/form-data; boundary=") + uploadData.getBoundary());
    }
    else
    {
        if (postBody != nullptr)
        {
            std::stringstream data;
            postBody->writeTo(data);
            auto bodyString = data.str();
            auto length = bodyString.size();
            request.set_body(concurrency::streams::bytestream::open_istream(std::move(bodyString)), length, contentType);
        }
        else
        {
            if (contentType == utility::conversions::to_string_t("application/json"))
            {
                web::json::value body_data = web::json::value::object();
                for (auto& kvp : formParams)
                {
                    body_data[kvp.first] = ModelBase::toJson(kvp.second);
                }
                if (!formParams.empty())
                {
                    request.set_body(body_data);
                }
            }
            else if (contentType == utility::conversions::to_string_t("multipart/form-data"))
            {
                MultipartFormData uploadData;
                for (auto& kvp : formParams)
                {
                    uploadData.add(ModelBase::toHttpContent(kvp.first, kvp.second));
                }
                std::stringstream data;
                uploadData.writeTo(data);
                auto bodyString = data.str();
                auto length = bodyString.size();
                request.set_body(concurrency::streams::bytestream::open_istream(std::move(bodyString)), length, utility::conversions::to_string_t("multipart/form-data; boundary=") + uploadData.getBoundary());
            }
            else
            {
                web::http::uri_builder formData;
                for (auto& kvp : formParams)
                {
                    formData.append_query(kvp.first, kvp.second);
                }
                if (!formParams.empty())
                {
                    request.set_body(formData.query(), utility::conversions::to_string_t("application/x-www-form-urlencoded"));
                }
            }
        }
    }

    web::http::uri_builder builder(path);
    for (auto& kvp : queryParams)
    {
        builder.append_query(kvp.first, kvp.second);
    }
    request.set_request_uri(builder.to_uri());
    request.set_method(method);
    if ( !request.headers().has( web::http::header_names::user_agent ) )
    {
        request.headers().add( web::http::header_names::user_agent, m_Configuration->getUserAgent() );
    }

    return client.request(request);
}

}
}
}
}
