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


class BcListDaoProposalsResponse(object):
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
        'more': 'bool',
        'dao_id': 'str',
        'next_key': 'str',
        'rows': 'list[BcListDaoProposalsResponseRows]'
    }

    attribute_map = {
        'more': 'more',
        'dao_id': 'dao_id',
        'next_key': 'next_key',
        'rows': 'rows'
    }

    def __init__(self, more=None, dao_id=None, next_key=None, rows=None, _configuration=None):  # noqa: E501
        """BcListDaoProposalsResponse - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._more = None
        self._dao_id = None
        self._next_key = None
        self._rows = None
        self.discriminator = None

        if more is not None:
            self.more = more
        if dao_id is not None:
            self.dao_id = dao_id
        if next_key is not None:
            self.next_key = next_key
        if rows is not None:
            self.rows = rows

    @property
    def more(self):
        """Gets the more of this BcListDaoProposalsResponse.  # noqa: E501


        :return: The more of this BcListDaoProposalsResponse.  # noqa: E501
        :rtype: bool
        """
        return self._more

    @more.setter
    def more(self, more):
        """Sets the more of this BcListDaoProposalsResponse.


        :param more: The more of this BcListDaoProposalsResponse.  # noqa: E501
        :type: bool
        """

        self._more = more

    @property
    def dao_id(self):
        """Gets the dao_id of this BcListDaoProposalsResponse.  # noqa: E501


        :return: The dao_id of this BcListDaoProposalsResponse.  # noqa: E501
        :rtype: str
        """
        return self._dao_id

    @dao_id.setter
    def dao_id(self, dao_id):
        """Sets the dao_id of this BcListDaoProposalsResponse.


        :param dao_id: The dao_id of this BcListDaoProposalsResponse.  # noqa: E501
        :type: str
        """

        self._dao_id = dao_id

    @property
    def next_key(self):
        """Gets the next_key of this BcListDaoProposalsResponse.  # noqa: E501


        :return: The next_key of this BcListDaoProposalsResponse.  # noqa: E501
        :rtype: str
        """
        return self._next_key

    @next_key.setter
    def next_key(self, next_key):
        """Sets the next_key of this BcListDaoProposalsResponse.


        :param next_key: The next_key of this BcListDaoProposalsResponse.  # noqa: E501
        :type: str
        """

        self._next_key = next_key

    @property
    def rows(self):
        """Gets the rows of this BcListDaoProposalsResponse.  # noqa: E501


        :return: The rows of this BcListDaoProposalsResponse.  # noqa: E501
        :rtype: list[BcListDaoProposalsResponseRows]
        """
        return self._rows

    @rows.setter
    def rows(self, rows):
        """Sets the rows of this BcListDaoProposalsResponse.


        :param rows: The rows of this BcListDaoProposalsResponse.  # noqa: E501
        :type: list[BcListDaoProposalsResponseRows]
        """

        self._rows = rows

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
        if issubclass(BcListDaoProposalsResponse, dict):
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
        if not isinstance(other, BcListDaoProposalsResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BcListDaoProposalsResponse):
            return True

        return self.to_dict() != other.to_dict()
