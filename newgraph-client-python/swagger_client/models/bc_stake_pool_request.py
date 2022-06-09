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


class BcStakePoolRequest(object):
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
        'owner': 'str',
        'payer_prv_key': 'str',
        'amt': 'str',
        'payer': 'str'
    }

    attribute_map = {
        'owner': 'owner',
        'payer_prv_key': 'payer_prv_key',
        'amt': 'amt',
        'payer': 'payer'
    }

    def __init__(self, owner=None, payer_prv_key=None, amt=None, payer=None, _configuration=None):  # noqa: E501
        """BcStakePoolRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._owner = None
        self._payer_prv_key = None
        self._amt = None
        self._payer = None
        self.discriminator = None

        self.owner = owner
        self.payer_prv_key = payer_prv_key
        self.amt = amt
        self.payer = payer

    @property
    def owner(self):
        """Gets the owner of this BcStakePoolRequest.  # noqa: E501


        :return: The owner of this BcStakePoolRequest.  # noqa: E501
        :rtype: str
        """
        return self._owner

    @owner.setter
    def owner(self, owner):
        """Sets the owner of this BcStakePoolRequest.


        :param owner: The owner of this BcStakePoolRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and owner is None:
            raise ValueError("Invalid value for `owner`, must not be `None`")  # noqa: E501

        self._owner = owner

    @property
    def payer_prv_key(self):
        """Gets the payer_prv_key of this BcStakePoolRequest.  # noqa: E501


        :return: The payer_prv_key of this BcStakePoolRequest.  # noqa: E501
        :rtype: str
        """
        return self._payer_prv_key

    @payer_prv_key.setter
    def payer_prv_key(self, payer_prv_key):
        """Sets the payer_prv_key of this BcStakePoolRequest.


        :param payer_prv_key: The payer_prv_key of this BcStakePoolRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and payer_prv_key is None:
            raise ValueError("Invalid value for `payer_prv_key`, must not be `None`")  # noqa: E501

        self._payer_prv_key = payer_prv_key

    @property
    def amt(self):
        """Gets the amt of this BcStakePoolRequest.  # noqa: E501


        :return: The amt of this BcStakePoolRequest.  # noqa: E501
        :rtype: str
        """
        return self._amt

    @amt.setter
    def amt(self, amt):
        """Sets the amt of this BcStakePoolRequest.


        :param amt: The amt of this BcStakePoolRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and amt is None:
            raise ValueError("Invalid value for `amt`, must not be `None`")  # noqa: E501

        self._amt = amt

    @property
    def payer(self):
        """Gets the payer of this BcStakePoolRequest.  # noqa: E501


        :return: The payer of this BcStakePoolRequest.  # noqa: E501
        :rtype: str
        """
        return self._payer

    @payer.setter
    def payer(self, payer):
        """Sets the payer of this BcStakePoolRequest.


        :param payer: The payer of this BcStakePoolRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and payer is None:
            raise ValueError("Invalid value for `payer`, must not be `None`")  # noqa: E501

        self._payer = payer

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
        if issubclass(BcStakePoolRequest, dict):
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
        if not isinstance(other, BcStakePoolRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BcStakePoolRequest):
            return True

        return self.to_dict() != other.to_dict()
