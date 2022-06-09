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


class MoodPagedListReadPublicResponseTags(object):
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
        'rel': 'list[MoodPagedListReadPublicResponseRel]',
        'id': 'str',
        'value': 'str'
    }

    attribute_map = {
        'rel': '_rel',
        'id': 'id',
        'value': 'value'
    }

    def __init__(self, rel=None, id=None, value=None, _configuration=None):  # noqa: E501
        """MoodPagedListReadPublicResponseTags - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._rel = None
        self._id = None
        self._value = None
        self.discriminator = None

        if rel is not None:
            self.rel = rel
        if id is not None:
            self.id = id
        if value is not None:
            self.value = value

    @property
    def rel(self):
        """Gets the rel of this MoodPagedListReadPublicResponseTags.  # noqa: E501


        :return: The rel of this MoodPagedListReadPublicResponseTags.  # noqa: E501
        :rtype: list[MoodPagedListReadPublicResponseRel]
        """
        return self._rel

    @rel.setter
    def rel(self, rel):
        """Sets the rel of this MoodPagedListReadPublicResponseTags.


        :param rel: The rel of this MoodPagedListReadPublicResponseTags.  # noqa: E501
        :type: list[MoodPagedListReadPublicResponseRel]
        """

        self._rel = rel

    @property
    def id(self):
        """Gets the id of this MoodPagedListReadPublicResponseTags.  # noqa: E501


        :return: The id of this MoodPagedListReadPublicResponseTags.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this MoodPagedListReadPublicResponseTags.


        :param id: The id of this MoodPagedListReadPublicResponseTags.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def value(self):
        """Gets the value of this MoodPagedListReadPublicResponseTags.  # noqa: E501


        :return: The value of this MoodPagedListReadPublicResponseTags.  # noqa: E501
        :rtype: str
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this MoodPagedListReadPublicResponseTags.


        :param value: The value of this MoodPagedListReadPublicResponseTags.  # noqa: E501
        :type: str
        """

        self._value = value

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
        if issubclass(MoodPagedListReadPublicResponseTags, dict):
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
        if not isinstance(other, MoodPagedListReadPublicResponseTags):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, MoodPagedListReadPublicResponseTags):
            return True

        return self.to_dict() != other.to_dict()
