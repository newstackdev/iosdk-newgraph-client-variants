# coding: utf-8

"""
    newgraph-api-eu-dev

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: 2022-10-04T15:34:01Z
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.configuration import Configuration


class BcCreateDaoRequest(object):
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
        'descr': 'str',
        'authpr_prv_key': 'str',
        'author': 'str',
        'token': 'str'
    }

    attribute_map = {
        'descr': 'descr',
        'authpr_prv_key': 'authpr_prv_key',
        'author': 'author',
        'token': 'token'
    }

    def __init__(self, descr=None, authpr_prv_key=None, author=None, token=None, _configuration=None):  # noqa: E501
        """BcCreateDaoRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._descr = None
        self._authpr_prv_key = None
        self._author = None
        self._token = None
        self.discriminator = None

        if descr is not None:
            self.descr = descr
        if authpr_prv_key is not None:
            self.authpr_prv_key = authpr_prv_key
        if author is not None:
            self.author = author
        if token is not None:
            self.token = token

    @property
    def descr(self):
        """Gets the descr of this BcCreateDaoRequest.  # noqa: E501


        :return: The descr of this BcCreateDaoRequest.  # noqa: E501
        :rtype: str
        """
        return self._descr

    @descr.setter
    def descr(self, descr):
        """Sets the descr of this BcCreateDaoRequest.


        :param descr: The descr of this BcCreateDaoRequest.  # noqa: E501
        :type: str
        """

        self._descr = descr

    @property
    def authpr_prv_key(self):
        """Gets the authpr_prv_key of this BcCreateDaoRequest.  # noqa: E501


        :return: The authpr_prv_key of this BcCreateDaoRequest.  # noqa: E501
        :rtype: str
        """
        return self._authpr_prv_key

    @authpr_prv_key.setter
    def authpr_prv_key(self, authpr_prv_key):
        """Sets the authpr_prv_key of this BcCreateDaoRequest.


        :param authpr_prv_key: The authpr_prv_key of this BcCreateDaoRequest.  # noqa: E501
        :type: str
        """

        self._authpr_prv_key = authpr_prv_key

    @property
    def author(self):
        """Gets the author of this BcCreateDaoRequest.  # noqa: E501


        :return: The author of this BcCreateDaoRequest.  # noqa: E501
        :rtype: str
        """
        return self._author

    @author.setter
    def author(self, author):
        """Sets the author of this BcCreateDaoRequest.


        :param author: The author of this BcCreateDaoRequest.  # noqa: E501
        :type: str
        """

        self._author = author

    @property
    def token(self):
        """Gets the token of this BcCreateDaoRequest.  # noqa: E501


        :return: The token of this BcCreateDaoRequest.  # noqa: E501
        :rtype: str
        """
        return self._token

    @token.setter
    def token(self, token):
        """Sets the token of this BcCreateDaoRequest.


        :param token: The token of this BcCreateDaoRequest.  # noqa: E501
        :type: str
        """

        self._token = token

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
        if issubclass(BcCreateDaoRequest, dict):
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
        if not isinstance(other, BcCreateDaoRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BcCreateDaoRequest):
            return True

        return self.to_dict() != other.to_dict()
