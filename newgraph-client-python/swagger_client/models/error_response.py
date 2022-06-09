# coding: utf-8

"""
    newlife-creator-api-eu-dev

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 2022-06-09T06:13:03Z
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.configuration import Configuration


class ErrorResponse(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'error_message': 'str',
        'error_code': 'str',
        'status_code': 'float'
    }

    attribute_map = {
        'error_message': 'errorMessage',
        'error_code': 'errorCode',
        'status_code': 'statusCode'
    }

    def __init__(self, error_message=None, error_code=None, status_code=None, _configuration=None):  # noqa: E501
        """ErrorResponse - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._error_message = None
        self._error_code = None
        self._status_code = None
        self.discriminator = None

        if error_message is not None:
            self.error_message = error_message
        if error_code is not None:
            self.error_code = error_code
        if status_code is not None:
            self.status_code = status_code

    @property
    def error_message(self):
        """Gets the error_message of this ErrorResponse.  # noqa: E501


        :return: The error_message of this ErrorResponse.  # noqa: E501
        :rtype: str
        """
        return self._error_message

    @error_message.setter
    def error_message(self, error_message):
        """Sets the error_message of this ErrorResponse.


        :param error_message: The error_message of this ErrorResponse.  # noqa: E501
        :type: str
        """

        self._error_message = error_message

    @property
    def error_code(self):
        """Gets the error_code of this ErrorResponse.  # noqa: E501


        :return: The error_code of this ErrorResponse.  # noqa: E501
        :rtype: str
        """
        return self._error_code

    @error_code.setter
    def error_code(self, error_code):
        """Sets the error_code of this ErrorResponse.


        :param error_code: The error_code of this ErrorResponse.  # noqa: E501
        :type: str
        """

        self._error_code = error_code

    @property
    def status_code(self):
        """Gets the status_code of this ErrorResponse.  # noqa: E501


        :return: The status_code of this ErrorResponse.  # noqa: E501
        :rtype: float
        """
        return self._status_code

    @status_code.setter
    def status_code(self, status_code):
        """Sets the status_code of this ErrorResponse.


        :param status_code: The status_code of this ErrorResponse.  # noqa: E501
        :type: float
        """

        self._status_code = status_code

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(ErrorResponse, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ErrorResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ErrorResponse):
            return True

        return self.to_dict() != other.to_dict()
