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


class CreativeSearchResponseSource(object):
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
        'image': 'str',
        'meta': 'CreativeSearchResponseSourceMeta',
        'aesthetics': 'object',
        'content': 'object'
    }

    attribute_map = {
        'image': 'image',
        'meta': 'meta',
        'aesthetics': 'aesthetics',
        'content': 'content'
    }

    def __init__(self, image=None, meta=None, aesthetics=None, content=None, _configuration=None):  # noqa: E501
        """CreativeSearchResponseSource - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._image = None
        self._meta = None
        self._aesthetics = None
        self._content = None
        self.discriminator = None

        if image is not None:
            self.image = image
        if meta is not None:
            self.meta = meta
        if aesthetics is not None:
            self.aesthetics = aesthetics
        if content is not None:
            self.content = content

    @property
    def image(self):
        """Gets the image of this CreativeSearchResponseSource.  # noqa: E501


        :return: The image of this CreativeSearchResponseSource.  # noqa: E501
        :rtype: str
        """
        return self._image

    @image.setter
    def image(self, image):
        """Sets the image of this CreativeSearchResponseSource.


        :param image: The image of this CreativeSearchResponseSource.  # noqa: E501
        :type: str
        """

        self._image = image

    @property
    def meta(self):
        """Gets the meta of this CreativeSearchResponseSource.  # noqa: E501


        :return: The meta of this CreativeSearchResponseSource.  # noqa: E501
        :rtype: CreativeSearchResponseSourceMeta
        """
        return self._meta

    @meta.setter
    def meta(self, meta):
        """Sets the meta of this CreativeSearchResponseSource.


        :param meta: The meta of this CreativeSearchResponseSource.  # noqa: E501
        :type: CreativeSearchResponseSourceMeta
        """

        self._meta = meta

    @property
    def aesthetics(self):
        """Gets the aesthetics of this CreativeSearchResponseSource.  # noqa: E501


        :return: The aesthetics of this CreativeSearchResponseSource.  # noqa: E501
        :rtype: object
        """
        return self._aesthetics

    @aesthetics.setter
    def aesthetics(self, aesthetics):
        """Sets the aesthetics of this CreativeSearchResponseSource.


        :param aesthetics: The aesthetics of this CreativeSearchResponseSource.  # noqa: E501
        :type: object
        """

        self._aesthetics = aesthetics

    @property
    def content(self):
        """Gets the content of this CreativeSearchResponseSource.  # noqa: E501


        :return: The content of this CreativeSearchResponseSource.  # noqa: E501
        :rtype: object
        """
        return self._content

    @content.setter
    def content(self, content):
        """Sets the content of this CreativeSearchResponseSource.


        :param content: The content of this CreativeSearchResponseSource.  # noqa: E501
        :type: object
        """

        self._content = content

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
        if issubclass(CreativeSearchResponseSource, dict):
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
        if not isinstance(other, CreativeSearchResponseSource):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CreativeSearchResponseSource):
            return True

        return self.to_dict() != other.to_dict()
