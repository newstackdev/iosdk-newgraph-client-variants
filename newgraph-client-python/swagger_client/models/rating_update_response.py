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


class RatingUpdateResponse(object):
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
        'created': 'str',
        'tx_id_mint_asset': 'str',
        'value': 'float',
        'updated': 'str'
    }

    attribute_map = {
        'created': 'created',
        'tx_id_mint_asset': 'TxID_mintAsset',
        'value': 'value',
        'updated': 'updated'
    }

    def __init__(self, created=None, tx_id_mint_asset=None, value=None, updated=None, _configuration=None):  # noqa: E501
        """RatingUpdateResponse - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._created = None
        self._tx_id_mint_asset = None
        self._value = None
        self._updated = None
        self.discriminator = None

        if created is not None:
            self.created = created
        if tx_id_mint_asset is not None:
            self.tx_id_mint_asset = tx_id_mint_asset
        if value is not None:
            self.value = value
        if updated is not None:
            self.updated = updated

    @property
    def created(self):
        """Gets the created of this RatingUpdateResponse.  # noqa: E501


        :return: The created of this RatingUpdateResponse.  # noqa: E501
        :rtype: str
        """
        return self._created

    @created.setter
    def created(self, created):
        """Sets the created of this RatingUpdateResponse.


        :param created: The created of this RatingUpdateResponse.  # noqa: E501
        :type: str
        """

        self._created = created

    @property
    def tx_id_mint_asset(self):
        """Gets the tx_id_mint_asset of this RatingUpdateResponse.  # noqa: E501


        :return: The tx_id_mint_asset of this RatingUpdateResponse.  # noqa: E501
        :rtype: str
        """
        return self._tx_id_mint_asset

    @tx_id_mint_asset.setter
    def tx_id_mint_asset(self, tx_id_mint_asset):
        """Sets the tx_id_mint_asset of this RatingUpdateResponse.


        :param tx_id_mint_asset: The tx_id_mint_asset of this RatingUpdateResponse.  # noqa: E501
        :type: str
        """

        self._tx_id_mint_asset = tx_id_mint_asset

    @property
    def value(self):
        """Gets the value of this RatingUpdateResponse.  # noqa: E501


        :return: The value of this RatingUpdateResponse.  # noqa: E501
        :rtype: float
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this RatingUpdateResponse.


        :param value: The value of this RatingUpdateResponse.  # noqa: E501
        :type: float
        """
        if (self._configuration.client_side_validation and
                value is not None and value > 100):  # noqa: E501
            raise ValueError("Invalid value for `value`, must be a value less than or equal to `100`")  # noqa: E501
        if (self._configuration.client_side_validation and
                value is not None and value < 0):  # noqa: E501
            raise ValueError("Invalid value for `value`, must be a value greater than or equal to `0`")  # noqa: E501

        self._value = value

    @property
    def updated(self):
        """Gets the updated of this RatingUpdateResponse.  # noqa: E501


        :return: The updated of this RatingUpdateResponse.  # noqa: E501
        :rtype: str
        """
        return self._updated

    @updated.setter
    def updated(self, updated):
        """Sets the updated of this RatingUpdateResponse.


        :param updated: The updated of this RatingUpdateResponse.  # noqa: E501
        :type: str
        """

        self._updated = updated

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
        if issubclass(RatingUpdateResponse, dict):
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
        if not isinstance(other, RatingUpdateResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, RatingUpdateResponse):
            return True

        return self.to_dict() != other.to_dict()
