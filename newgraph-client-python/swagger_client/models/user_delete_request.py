# coding: utf-8

"""
    newlife-creator-api-eu-dev

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 2022-05-20T13:39:48Z
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.configuration import Configuration


class UserDeleteRequest(object):
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
        'phone': 'str',
        'email': 'str'
    }

    attribute_map = {
        'phone': 'phone',
        'email': 'email'
    }

    def __init__(self, phone=None, email=None, _configuration=None):  # noqa: E501
        """UserDeleteRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._phone = None
        self._email = None
        self.discriminator = None

        if phone is not None:
            self.phone = phone
        if email is not None:
            self.email = email

    @property
    def phone(self):
        """Gets the phone of this UserDeleteRequest.  # noqa: E501


        :return: The phone of this UserDeleteRequest.  # noqa: E501
        :rtype: str
        """
        return self._phone

    @phone.setter
    def phone(self, phone):
        """Sets the phone of this UserDeleteRequest.


        :param phone: The phone of this UserDeleteRequest.  # noqa: E501
        :type: str
        """

        self._phone = phone

    @property
    def email(self):
        """Gets the email of this UserDeleteRequest.  # noqa: E501


        :return: The email of this UserDeleteRequest.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this UserDeleteRequest.


        :param email: The email of this UserDeleteRequest.  # noqa: E501
        :type: str
        """

        self._email = email

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
        if issubclass(UserDeleteRequest, dict):
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
        if not isinstance(other, UserDeleteRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, UserDeleteRequest):
            return True

        return self.to_dict() != other.to_dict()