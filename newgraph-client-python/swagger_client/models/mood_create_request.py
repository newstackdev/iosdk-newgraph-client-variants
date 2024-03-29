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


class MoodCreateRequest(object):
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
        'latitude': 'float',
        'description': 'str',
        'title': 'str',
        'longitude': 'float'
    }

    attribute_map = {
        'latitude': 'latitude',
        'description': 'description',
        'title': 'title',
        'longitude': 'longitude'
    }

    def __init__(self, latitude=None, description=None, title=None, longitude=None, _configuration=None):  # noqa: E501
        """MoodCreateRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._latitude = None
        self._description = None
        self._title = None
        self._longitude = None
        self.discriminator = None

        if latitude is not None:
            self.latitude = latitude
        self.description = description
        self.title = title
        if longitude is not None:
            self.longitude = longitude

    @property
    def latitude(self):
        """Gets the latitude of this MoodCreateRequest.  # noqa: E501


        :return: The latitude of this MoodCreateRequest.  # noqa: E501
        :rtype: float
        """
        return self._latitude

    @latitude.setter
    def latitude(self, latitude):
        """Sets the latitude of this MoodCreateRequest.


        :param latitude: The latitude of this MoodCreateRequest.  # noqa: E501
        :type: float
        """

        self._latitude = latitude

    @property
    def description(self):
        """Gets the description of this MoodCreateRequest.  # noqa: E501


        :return: The description of this MoodCreateRequest.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this MoodCreateRequest.


        :param description: The description of this MoodCreateRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and description is None:
            raise ValueError("Invalid value for `description`, must not be `None`")  # noqa: E501

        self._description = description

    @property
    def title(self):
        """Gets the title of this MoodCreateRequest.  # noqa: E501


        :return: The title of this MoodCreateRequest.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this MoodCreateRequest.


        :param title: The title of this MoodCreateRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and title is None:
            raise ValueError("Invalid value for `title`, must not be `None`")  # noqa: E501

        self._title = title

    @property
    def longitude(self):
        """Gets the longitude of this MoodCreateRequest.  # noqa: E501


        :return: The longitude of this MoodCreateRequest.  # noqa: E501
        :rtype: float
        """
        return self._longitude

    @longitude.setter
    def longitude(self, longitude):
        """Sets the longitude of this MoodCreateRequest.


        :param longitude: The longitude of this MoodCreateRequest.  # noqa: E501
        :type: float
        """

        self._longitude = longitude

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
        if issubclass(MoodCreateRequest, dict):
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
        if not isinstance(other, MoodCreateRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, MoodCreateRequest):
            return True

        return self.to_dict() != other.to_dict()
