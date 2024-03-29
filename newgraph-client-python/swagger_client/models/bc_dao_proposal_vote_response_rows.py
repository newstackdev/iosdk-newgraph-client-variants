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


class BcDaoProposalVoteResponseRows(object):
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
        'proposal_type': 'str',
        'quantity': 'BcListDaoProposalsResponseVoteNo',
        'proposal_id': 'float',
        'dao_id': 'float',
        'id': 'str',
        'lock_end_date': 'str'
    }

    attribute_map = {
        'proposal_type': 'proposal_type',
        'quantity': 'quantity',
        'proposal_id': 'proposal_id',
        'dao_id': 'dao_id',
        'id': 'id',
        'lock_end_date': 'lock_end_date'
    }

    def __init__(self, proposal_type=None, quantity=None, proposal_id=None, dao_id=None, id=None, lock_end_date=None, _configuration=None):  # noqa: E501
        """BcDaoProposalVoteResponseRows - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._proposal_type = None
        self._quantity = None
        self._proposal_id = None
        self._dao_id = None
        self._id = None
        self._lock_end_date = None
        self.discriminator = None

        if proposal_type is not None:
            self.proposal_type = proposal_type
        if quantity is not None:
            self.quantity = quantity
        if proposal_id is not None:
            self.proposal_id = proposal_id
        if dao_id is not None:
            self.dao_id = dao_id
        if id is not None:
            self.id = id
        if lock_end_date is not None:
            self.lock_end_date = lock_end_date

    @property
    def proposal_type(self):
        """Gets the proposal_type of this BcDaoProposalVoteResponseRows.  # noqa: E501


        :return: The proposal_type of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :rtype: str
        """
        return self._proposal_type

    @proposal_type.setter
    def proposal_type(self, proposal_type):
        """Sets the proposal_type of this BcDaoProposalVoteResponseRows.


        :param proposal_type: The proposal_type of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :type: str
        """

        self._proposal_type = proposal_type

    @property
    def quantity(self):
        """Gets the quantity of this BcDaoProposalVoteResponseRows.  # noqa: E501


        :return: The quantity of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :rtype: BcListDaoProposalsResponseVoteNo
        """
        return self._quantity

    @quantity.setter
    def quantity(self, quantity):
        """Sets the quantity of this BcDaoProposalVoteResponseRows.


        :param quantity: The quantity of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :type: BcListDaoProposalsResponseVoteNo
        """

        self._quantity = quantity

    @property
    def proposal_id(self):
        """Gets the proposal_id of this BcDaoProposalVoteResponseRows.  # noqa: E501


        :return: The proposal_id of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :rtype: float
        """
        return self._proposal_id

    @proposal_id.setter
    def proposal_id(self, proposal_id):
        """Sets the proposal_id of this BcDaoProposalVoteResponseRows.


        :param proposal_id: The proposal_id of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :type: float
        """

        self._proposal_id = proposal_id

    @property
    def dao_id(self):
        """Gets the dao_id of this BcDaoProposalVoteResponseRows.  # noqa: E501


        :return: The dao_id of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :rtype: float
        """
        return self._dao_id

    @dao_id.setter
    def dao_id(self, dao_id):
        """Sets the dao_id of this BcDaoProposalVoteResponseRows.


        :param dao_id: The dao_id of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :type: float
        """

        self._dao_id = dao_id

    @property
    def id(self):
        """Gets the id of this BcDaoProposalVoteResponseRows.  # noqa: E501


        :return: The id of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this BcDaoProposalVoteResponseRows.


        :param id: The id of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def lock_end_date(self):
        """Gets the lock_end_date of this BcDaoProposalVoteResponseRows.  # noqa: E501


        :return: The lock_end_date of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :rtype: str
        """
        return self._lock_end_date

    @lock_end_date.setter
    def lock_end_date(self, lock_end_date):
        """Sets the lock_end_date of this BcDaoProposalVoteResponseRows.


        :param lock_end_date: The lock_end_date of this BcDaoProposalVoteResponseRows.  # noqa: E501
        :type: str
        """

        self._lock_end_date = lock_end_date

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
        if issubclass(BcDaoProposalVoteResponseRows, dict):
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
        if not isinstance(other, BcDaoProposalVoteResponseRows):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BcDaoProposalVoteResponseRows):
            return True

        return self.to_dict() != other.to_dict()
