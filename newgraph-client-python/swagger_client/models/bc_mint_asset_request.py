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


class BcMintAssetRequest(object):
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
        'immutable_data': 'list[BcMintAssetRequestImmutableData]',
        'tpl_name': 'str',
        'payer_prv_key': 'str',
        'creator': 'str',
        'sch_name': 'str',
        'mutable_data': 'list[BcMintAssetRequestImmutableData]',
        'col_name': 'str',
        'payer': 'str',
        'payer_public_key': 'str'
    }

    attribute_map = {
        'immutable_data': 'immutable_data',
        'tpl_name': 'tpl_name',
        'payer_prv_key': 'payer_prv_key',
        'creator': 'creator',
        'sch_name': 'sch_name',
        'mutable_data': 'mutable_data',
        'col_name': 'col_name',
        'payer': 'payer',
        'payer_public_key': 'payer_public_key'
    }

    def __init__(self, immutable_data=None, tpl_name=None, payer_prv_key=None, creator=None, sch_name=None, mutable_data=None, col_name=None, payer=None, payer_public_key=None, _configuration=None):  # noqa: E501
        """BcMintAssetRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._immutable_data = None
        self._tpl_name = None
        self._payer_prv_key = None
        self._creator = None
        self._sch_name = None
        self._mutable_data = None
        self._col_name = None
        self._payer = None
        self._payer_public_key = None
        self.discriminator = None

        if immutable_data is not None:
            self.immutable_data = immutable_data
        if tpl_name is not None:
            self.tpl_name = tpl_name
        self.payer_prv_key = payer_prv_key
        self.creator = creator
        if sch_name is not None:
            self.sch_name = sch_name
        if mutable_data is not None:
            self.mutable_data = mutable_data
        if col_name is not None:
            self.col_name = col_name
        self.payer = payer
        self.payer_public_key = payer_public_key

    @property
    def immutable_data(self):
        """Gets the immutable_data of this BcMintAssetRequest.  # noqa: E501


        :return: The immutable_data of this BcMintAssetRequest.  # noqa: E501
        :rtype: list[BcMintAssetRequestImmutableData]
        """
        return self._immutable_data

    @immutable_data.setter
    def immutable_data(self, immutable_data):
        """Sets the immutable_data of this BcMintAssetRequest.


        :param immutable_data: The immutable_data of this BcMintAssetRequest.  # noqa: E501
        :type: list[BcMintAssetRequestImmutableData]
        """

        self._immutable_data = immutable_data

    @property
    def tpl_name(self):
        """Gets the tpl_name of this BcMintAssetRequest.  # noqa: E501


        :return: The tpl_name of this BcMintAssetRequest.  # noqa: E501
        :rtype: str
        """
        return self._tpl_name

    @tpl_name.setter
    def tpl_name(self, tpl_name):
        """Sets the tpl_name of this BcMintAssetRequest.


        :param tpl_name: The tpl_name of this BcMintAssetRequest.  # noqa: E501
        :type: str
        """

        self._tpl_name = tpl_name

    @property
    def payer_prv_key(self):
        """Gets the payer_prv_key of this BcMintAssetRequest.  # noqa: E501


        :return: The payer_prv_key of this BcMintAssetRequest.  # noqa: E501
        :rtype: str
        """
        return self._payer_prv_key

    @payer_prv_key.setter
    def payer_prv_key(self, payer_prv_key):
        """Sets the payer_prv_key of this BcMintAssetRequest.


        :param payer_prv_key: The payer_prv_key of this BcMintAssetRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and payer_prv_key is None:
            raise ValueError("Invalid value for `payer_prv_key`, must not be `None`")  # noqa: E501

        self._payer_prv_key = payer_prv_key

    @property
    def creator(self):
        """Gets the creator of this BcMintAssetRequest.  # noqa: E501


        :return: The creator of this BcMintAssetRequest.  # noqa: E501
        :rtype: str
        """
        return self._creator

    @creator.setter
    def creator(self, creator):
        """Sets the creator of this BcMintAssetRequest.


        :param creator: The creator of this BcMintAssetRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and creator is None:
            raise ValueError("Invalid value for `creator`, must not be `None`")  # noqa: E501

        self._creator = creator

    @property
    def sch_name(self):
        """Gets the sch_name of this BcMintAssetRequest.  # noqa: E501


        :return: The sch_name of this BcMintAssetRequest.  # noqa: E501
        :rtype: str
        """
        return self._sch_name

    @sch_name.setter
    def sch_name(self, sch_name):
        """Sets the sch_name of this BcMintAssetRequest.


        :param sch_name: The sch_name of this BcMintAssetRequest.  # noqa: E501
        :type: str
        """

        self._sch_name = sch_name

    @property
    def mutable_data(self):
        """Gets the mutable_data of this BcMintAssetRequest.  # noqa: E501


        :return: The mutable_data of this BcMintAssetRequest.  # noqa: E501
        :rtype: list[BcMintAssetRequestImmutableData]
        """
        return self._mutable_data

    @mutable_data.setter
    def mutable_data(self, mutable_data):
        """Sets the mutable_data of this BcMintAssetRequest.


        :param mutable_data: The mutable_data of this BcMintAssetRequest.  # noqa: E501
        :type: list[BcMintAssetRequestImmutableData]
        """

        self._mutable_data = mutable_data

    @property
    def col_name(self):
        """Gets the col_name of this BcMintAssetRequest.  # noqa: E501


        :return: The col_name of this BcMintAssetRequest.  # noqa: E501
        :rtype: str
        """
        return self._col_name

    @col_name.setter
    def col_name(self, col_name):
        """Sets the col_name of this BcMintAssetRequest.


        :param col_name: The col_name of this BcMintAssetRequest.  # noqa: E501
        :type: str
        """

        self._col_name = col_name

    @property
    def payer(self):
        """Gets the payer of this BcMintAssetRequest.  # noqa: E501


        :return: The payer of this BcMintAssetRequest.  # noqa: E501
        :rtype: str
        """
        return self._payer

    @payer.setter
    def payer(self, payer):
        """Sets the payer of this BcMintAssetRequest.


        :param payer: The payer of this BcMintAssetRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and payer is None:
            raise ValueError("Invalid value for `payer`, must not be `None`")  # noqa: E501

        self._payer = payer

    @property
    def payer_public_key(self):
        """Gets the payer_public_key of this BcMintAssetRequest.  # noqa: E501


        :return: The payer_public_key of this BcMintAssetRequest.  # noqa: E501
        :rtype: str
        """
        return self._payer_public_key

    @payer_public_key.setter
    def payer_public_key(self, payer_public_key):
        """Sets the payer_public_key of this BcMintAssetRequest.


        :param payer_public_key: The payer_public_key of this BcMintAssetRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and payer_public_key is None:
            raise ValueError("Invalid value for `payer_public_key`, must not be `None`")  # noqa: E501

        self._payer_public_key = payer_public_key

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
        if issubclass(BcMintAssetRequest, dict):
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
        if not isinstance(other, BcMintAssetRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BcMintAssetRequest):
            return True

        return self.to_dict() != other.to_dict()
