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


class BcAccCreateRequest(object):
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
        'newacc_pub_active_key': 'str',
        'newacc_pub_owner_key': 'str',
        'payer_prv_key': 'str',
        'xfer': 'bool',
        'stake_cpu': 'str',
        'new_user': 'str',
        'stake_ram': 'float',
        'payer': 'str',
        'stake_net': 'str'
    }

    attribute_map = {
        'newacc_pub_active_key': 'newacc_pub_active_key',
        'newacc_pub_owner_key': 'newacc_pub_owner_key',
        'payer_prv_key': 'payer_prv_key',
        'xfer': 'xfer',
        'stake_cpu': 'stake_cpu',
        'new_user': 'newUser',
        'stake_ram': 'stake_ram',
        'payer': 'payer',
        'stake_net': 'stake_net'
    }

    def __init__(self, newacc_pub_active_key=None, newacc_pub_owner_key=None, payer_prv_key=None, xfer=None, stake_cpu=None, new_user=None, stake_ram=None, payer=None, stake_net=None, _configuration=None):  # noqa: E501
        """BcAccCreateRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._newacc_pub_active_key = None
        self._newacc_pub_owner_key = None
        self._payer_prv_key = None
        self._xfer = None
        self._stake_cpu = None
        self._new_user = None
        self._stake_ram = None
        self._payer = None
        self._stake_net = None
        self.discriminator = None

        self.newacc_pub_active_key = newacc_pub_active_key
        self.newacc_pub_owner_key = newacc_pub_owner_key
        self.payer_prv_key = payer_prv_key
        if xfer is not None:
            self.xfer = xfer
        if stake_cpu is not None:
            self.stake_cpu = stake_cpu
        self.new_user = new_user
        if stake_ram is not None:
            self.stake_ram = stake_ram
        self.payer = payer
        if stake_net is not None:
            self.stake_net = stake_net

    @property
    def newacc_pub_active_key(self):
        """Gets the newacc_pub_active_key of this BcAccCreateRequest.  # noqa: E501


        :return: The newacc_pub_active_key of this BcAccCreateRequest.  # noqa: E501
        :rtype: str
        """
        return self._newacc_pub_active_key

    @newacc_pub_active_key.setter
    def newacc_pub_active_key(self, newacc_pub_active_key):
        """Sets the newacc_pub_active_key of this BcAccCreateRequest.


        :param newacc_pub_active_key: The newacc_pub_active_key of this BcAccCreateRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and newacc_pub_active_key is None:
            raise ValueError("Invalid value for `newacc_pub_active_key`, must not be `None`")  # noqa: E501

        self._newacc_pub_active_key = newacc_pub_active_key

    @property
    def newacc_pub_owner_key(self):
        """Gets the newacc_pub_owner_key of this BcAccCreateRequest.  # noqa: E501


        :return: The newacc_pub_owner_key of this BcAccCreateRequest.  # noqa: E501
        :rtype: str
        """
        return self._newacc_pub_owner_key

    @newacc_pub_owner_key.setter
    def newacc_pub_owner_key(self, newacc_pub_owner_key):
        """Sets the newacc_pub_owner_key of this BcAccCreateRequest.


        :param newacc_pub_owner_key: The newacc_pub_owner_key of this BcAccCreateRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and newacc_pub_owner_key is None:
            raise ValueError("Invalid value for `newacc_pub_owner_key`, must not be `None`")  # noqa: E501

        self._newacc_pub_owner_key = newacc_pub_owner_key

    @property
    def payer_prv_key(self):
        """Gets the payer_prv_key of this BcAccCreateRequest.  # noqa: E501


        :return: The payer_prv_key of this BcAccCreateRequest.  # noqa: E501
        :rtype: str
        """
        return self._payer_prv_key

    @payer_prv_key.setter
    def payer_prv_key(self, payer_prv_key):
        """Sets the payer_prv_key of this BcAccCreateRequest.


        :param payer_prv_key: The payer_prv_key of this BcAccCreateRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and payer_prv_key is None:
            raise ValueError("Invalid value for `payer_prv_key`, must not be `None`")  # noqa: E501

        self._payer_prv_key = payer_prv_key

    @property
    def xfer(self):
        """Gets the xfer of this BcAccCreateRequest.  # noqa: E501


        :return: The xfer of this BcAccCreateRequest.  # noqa: E501
        :rtype: bool
        """
        return self._xfer

    @xfer.setter
    def xfer(self, xfer):
        """Sets the xfer of this BcAccCreateRequest.


        :param xfer: The xfer of this BcAccCreateRequest.  # noqa: E501
        :type: bool
        """

        self._xfer = xfer

    @property
    def stake_cpu(self):
        """Gets the stake_cpu of this BcAccCreateRequest.  # noqa: E501


        :return: The stake_cpu of this BcAccCreateRequest.  # noqa: E501
        :rtype: str
        """
        return self._stake_cpu

    @stake_cpu.setter
    def stake_cpu(self, stake_cpu):
        """Sets the stake_cpu of this BcAccCreateRequest.


        :param stake_cpu: The stake_cpu of this BcAccCreateRequest.  # noqa: E501
        :type: str
        """

        self._stake_cpu = stake_cpu

    @property
    def new_user(self):
        """Gets the new_user of this BcAccCreateRequest.  # noqa: E501


        :return: The new_user of this BcAccCreateRequest.  # noqa: E501
        :rtype: str
        """
        return self._new_user

    @new_user.setter
    def new_user(self, new_user):
        """Sets the new_user of this BcAccCreateRequest.


        :param new_user: The new_user of this BcAccCreateRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and new_user is None:
            raise ValueError("Invalid value for `new_user`, must not be `None`")  # noqa: E501

        self._new_user = new_user

    @property
    def stake_ram(self):
        """Gets the stake_ram of this BcAccCreateRequest.  # noqa: E501


        :return: The stake_ram of this BcAccCreateRequest.  # noqa: E501
        :rtype: float
        """
        return self._stake_ram

    @stake_ram.setter
    def stake_ram(self, stake_ram):
        """Sets the stake_ram of this BcAccCreateRequest.


        :param stake_ram: The stake_ram of this BcAccCreateRequest.  # noqa: E501
        :type: float
        """

        self._stake_ram = stake_ram

    @property
    def payer(self):
        """Gets the payer of this BcAccCreateRequest.  # noqa: E501


        :return: The payer of this BcAccCreateRequest.  # noqa: E501
        :rtype: str
        """
        return self._payer

    @payer.setter
    def payer(self, payer):
        """Sets the payer of this BcAccCreateRequest.


        :param payer: The payer of this BcAccCreateRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and payer is None:
            raise ValueError("Invalid value for `payer`, must not be `None`")  # noqa: E501

        self._payer = payer

    @property
    def stake_net(self):
        """Gets the stake_net of this BcAccCreateRequest.  # noqa: E501


        :return: The stake_net of this BcAccCreateRequest.  # noqa: E501
        :rtype: str
        """
        return self._stake_net

    @stake_net.setter
    def stake_net(self, stake_net):
        """Sets the stake_net of this BcAccCreateRequest.


        :param stake_net: The stake_net of this BcAccCreateRequest.  # noqa: E501
        :type: str
        """

        self._stake_net = stake_net

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
        if issubclass(BcAccCreateRequest, dict):
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
        if not isinstance(other, BcAccCreateRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BcAccCreateRequest):
            return True

        return self.to_dict() != other.to_dict()
