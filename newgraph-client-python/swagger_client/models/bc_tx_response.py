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


class BcTxResponse(object):
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
        'tx_id_create_tpl': 'str',
        'tx_id_create_pool': 'str',
        'tx_id_create_acc': 'str',
        'tx_id_create_col': 'str',
        'tx_id_create_sch': 'str',
        'tx_id_stake_to_pool': 'str',
        'tx_id_mint_asset': 'str'
    }

    attribute_map = {
        'tx_id_create_tpl': 'TxID_createTpl',
        'tx_id_create_pool': 'TxID_createPool',
        'tx_id_create_acc': 'TxID_createAcc',
        'tx_id_create_col': 'TxID_createCol',
        'tx_id_create_sch': 'TxID_createSch',
        'tx_id_stake_to_pool': 'TxID_stakeToPool',
        'tx_id_mint_asset': 'TxID_mintAsset'
    }

    def __init__(self, tx_id_create_tpl=None, tx_id_create_pool=None, tx_id_create_acc=None, tx_id_create_col=None, tx_id_create_sch=None, tx_id_stake_to_pool=None, tx_id_mint_asset=None, _configuration=None):  # noqa: E501
        """BcTxResponse - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._tx_id_create_tpl = None
        self._tx_id_create_pool = None
        self._tx_id_create_acc = None
        self._tx_id_create_col = None
        self._tx_id_create_sch = None
        self._tx_id_stake_to_pool = None
        self._tx_id_mint_asset = None
        self.discriminator = None

        if tx_id_create_tpl is not None:
            self.tx_id_create_tpl = tx_id_create_tpl
        if tx_id_create_pool is not None:
            self.tx_id_create_pool = tx_id_create_pool
        if tx_id_create_acc is not None:
            self.tx_id_create_acc = tx_id_create_acc
        if tx_id_create_col is not None:
            self.tx_id_create_col = tx_id_create_col
        if tx_id_create_sch is not None:
            self.tx_id_create_sch = tx_id_create_sch
        if tx_id_stake_to_pool is not None:
            self.tx_id_stake_to_pool = tx_id_stake_to_pool
        if tx_id_mint_asset is not None:
            self.tx_id_mint_asset = tx_id_mint_asset

    @property
    def tx_id_create_tpl(self):
        """Gets the tx_id_create_tpl of this BcTxResponse.  # noqa: E501


        :return: The tx_id_create_tpl of this BcTxResponse.  # noqa: E501
        :rtype: str
        """
        return self._tx_id_create_tpl

    @tx_id_create_tpl.setter
    def tx_id_create_tpl(self, tx_id_create_tpl):
        """Sets the tx_id_create_tpl of this BcTxResponse.


        :param tx_id_create_tpl: The tx_id_create_tpl of this BcTxResponse.  # noqa: E501
        :type: str
        """

        self._tx_id_create_tpl = tx_id_create_tpl

    @property
    def tx_id_create_pool(self):
        """Gets the tx_id_create_pool of this BcTxResponse.  # noqa: E501


        :return: The tx_id_create_pool of this BcTxResponse.  # noqa: E501
        :rtype: str
        """
        return self._tx_id_create_pool

    @tx_id_create_pool.setter
    def tx_id_create_pool(self, tx_id_create_pool):
        """Sets the tx_id_create_pool of this BcTxResponse.


        :param tx_id_create_pool: The tx_id_create_pool of this BcTxResponse.  # noqa: E501
        :type: str
        """

        self._tx_id_create_pool = tx_id_create_pool

    @property
    def tx_id_create_acc(self):
        """Gets the tx_id_create_acc of this BcTxResponse.  # noqa: E501


        :return: The tx_id_create_acc of this BcTxResponse.  # noqa: E501
        :rtype: str
        """
        return self._tx_id_create_acc

    @tx_id_create_acc.setter
    def tx_id_create_acc(self, tx_id_create_acc):
        """Sets the tx_id_create_acc of this BcTxResponse.


        :param tx_id_create_acc: The tx_id_create_acc of this BcTxResponse.  # noqa: E501
        :type: str
        """

        self._tx_id_create_acc = tx_id_create_acc

    @property
    def tx_id_create_col(self):
        """Gets the tx_id_create_col of this BcTxResponse.  # noqa: E501


        :return: The tx_id_create_col of this BcTxResponse.  # noqa: E501
        :rtype: str
        """
        return self._tx_id_create_col

    @tx_id_create_col.setter
    def tx_id_create_col(self, tx_id_create_col):
        """Sets the tx_id_create_col of this BcTxResponse.


        :param tx_id_create_col: The tx_id_create_col of this BcTxResponse.  # noqa: E501
        :type: str
        """

        self._tx_id_create_col = tx_id_create_col

    @property
    def tx_id_create_sch(self):
        """Gets the tx_id_create_sch of this BcTxResponse.  # noqa: E501


        :return: The tx_id_create_sch of this BcTxResponse.  # noqa: E501
        :rtype: str
        """
        return self._tx_id_create_sch

    @tx_id_create_sch.setter
    def tx_id_create_sch(self, tx_id_create_sch):
        """Sets the tx_id_create_sch of this BcTxResponse.


        :param tx_id_create_sch: The tx_id_create_sch of this BcTxResponse.  # noqa: E501
        :type: str
        """

        self._tx_id_create_sch = tx_id_create_sch

    @property
    def tx_id_stake_to_pool(self):
        """Gets the tx_id_stake_to_pool of this BcTxResponse.  # noqa: E501


        :return: The tx_id_stake_to_pool of this BcTxResponse.  # noqa: E501
        :rtype: str
        """
        return self._tx_id_stake_to_pool

    @tx_id_stake_to_pool.setter
    def tx_id_stake_to_pool(self, tx_id_stake_to_pool):
        """Sets the tx_id_stake_to_pool of this BcTxResponse.


        :param tx_id_stake_to_pool: The tx_id_stake_to_pool of this BcTxResponse.  # noqa: E501
        :type: str
        """

        self._tx_id_stake_to_pool = tx_id_stake_to_pool

    @property
    def tx_id_mint_asset(self):
        """Gets the tx_id_mint_asset of this BcTxResponse.  # noqa: E501


        :return: The tx_id_mint_asset of this BcTxResponse.  # noqa: E501
        :rtype: str
        """
        return self._tx_id_mint_asset

    @tx_id_mint_asset.setter
    def tx_id_mint_asset(self, tx_id_mint_asset):
        """Sets the tx_id_mint_asset of this BcTxResponse.


        :param tx_id_mint_asset: The tx_id_mint_asset of this BcTxResponse.  # noqa: E501
        :type: str
        """

        self._tx_id_mint_asset = tx_id_mint_asset

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
        if issubclass(BcTxResponse, dict):
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
        if not isinstance(other, BcTxResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BcTxResponse):
            return True

        return self.to_dict() != other.to_dict()