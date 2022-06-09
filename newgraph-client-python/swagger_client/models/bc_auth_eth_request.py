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


class BcAuthEthRequest(object):
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
        'nft_index': 'str',
        'collection_address': 'str',
        'address': 'str',
        'signature': 'str',
        'nonce': 'str',
        'timestamp': 'str'
    }

    attribute_map = {
        'nft_index': 'nftIndex',
        'collection_address': 'collectionAddress',
        'address': 'address',
        'signature': 'signature',
        'nonce': 'nonce',
        'timestamp': 'timestamp'
    }

    def __init__(self, nft_index=None, collection_address=None, address=None, signature=None, nonce=None, timestamp=None, _configuration=None):  # noqa: E501
        """BcAuthEthRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._nft_index = None
        self._collection_address = None
        self._address = None
        self._signature = None
        self._nonce = None
        self._timestamp = None
        self.discriminator = None

        self.nft_index = nft_index
        self.collection_address = collection_address
        self.address = address
        self.signature = signature
        if nonce is not None:
            self.nonce = nonce
        self.timestamp = timestamp

    @property
    def nft_index(self):
        """Gets the nft_index of this BcAuthEthRequest.  # noqa: E501


        :return: The nft_index of this BcAuthEthRequest.  # noqa: E501
        :rtype: str
        """
        return self._nft_index

    @nft_index.setter
    def nft_index(self, nft_index):
        """Sets the nft_index of this BcAuthEthRequest.


        :param nft_index: The nft_index of this BcAuthEthRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and nft_index is None:
            raise ValueError("Invalid value for `nft_index`, must not be `None`")  # noqa: E501

        self._nft_index = nft_index

    @property
    def collection_address(self):
        """Gets the collection_address of this BcAuthEthRequest.  # noqa: E501


        :return: The collection_address of this BcAuthEthRequest.  # noqa: E501
        :rtype: str
        """
        return self._collection_address

    @collection_address.setter
    def collection_address(self, collection_address):
        """Sets the collection_address of this BcAuthEthRequest.


        :param collection_address: The collection_address of this BcAuthEthRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and collection_address is None:
            raise ValueError("Invalid value for `collection_address`, must not be `None`")  # noqa: E501

        self._collection_address = collection_address

    @property
    def address(self):
        """Gets the address of this BcAuthEthRequest.  # noqa: E501


        :return: The address of this BcAuthEthRequest.  # noqa: E501
        :rtype: str
        """
        return self._address

    @address.setter
    def address(self, address):
        """Sets the address of this BcAuthEthRequest.


        :param address: The address of this BcAuthEthRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and address is None:
            raise ValueError("Invalid value for `address`, must not be `None`")  # noqa: E501

        self._address = address

    @property
    def signature(self):
        """Gets the signature of this BcAuthEthRequest.  # noqa: E501


        :return: The signature of this BcAuthEthRequest.  # noqa: E501
        :rtype: str
        """
        return self._signature

    @signature.setter
    def signature(self, signature):
        """Sets the signature of this BcAuthEthRequest.


        :param signature: The signature of this BcAuthEthRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and signature is None:
            raise ValueError("Invalid value for `signature`, must not be `None`")  # noqa: E501

        self._signature = signature

    @property
    def nonce(self):
        """Gets the nonce of this BcAuthEthRequest.  # noqa: E501


        :return: The nonce of this BcAuthEthRequest.  # noqa: E501
        :rtype: str
        """
        return self._nonce

    @nonce.setter
    def nonce(self, nonce):
        """Sets the nonce of this BcAuthEthRequest.


        :param nonce: The nonce of this BcAuthEthRequest.  # noqa: E501
        :type: str
        """

        self._nonce = nonce

    @property
    def timestamp(self):
        """Gets the timestamp of this BcAuthEthRequest.  # noqa: E501


        :return: The timestamp of this BcAuthEthRequest.  # noqa: E501
        :rtype: str
        """
        return self._timestamp

    @timestamp.setter
    def timestamp(self, timestamp):
        """Sets the timestamp of this BcAuthEthRequest.


        :param timestamp: The timestamp of this BcAuthEthRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and timestamp is None:
            raise ValueError("Invalid value for `timestamp`, must not be `None`")  # noqa: E501

        self._timestamp = timestamp

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
        if issubclass(BcAuthEthRequest, dict):
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
        if not isinstance(other, BcAuthEthRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BcAuthEthRequest):
            return True

        return self.to_dict() != other.to_dict()
