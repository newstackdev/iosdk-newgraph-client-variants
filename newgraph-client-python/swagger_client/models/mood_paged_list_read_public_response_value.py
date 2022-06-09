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


class MoodPagedListReadPublicResponseValue(object):
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
        'author': 'MoodPagedListReadPublicResponseAuthor',
        'latitude': 'float',
        'description': 'str',
        'aspect_ratio': 'float',
        'title': 'str',
        'posts': 'list[MoodPagedListReadPublicResponsePosts]',
        'content': 'str',
        'stake_to_access': 'float',
        'tags': 'list[MoodPagedListReadPublicResponseTags]',
        'content_url': 'str',
        'posts_count': 'float',
        'blur_hash': 'str',
        'id': 'str',
        'updated': 'str',
        'content_type': 'str',
        'longitude': 'float'
    }

    attribute_map = {
        'created': 'created',
        'author': 'author',
        'latitude': 'latitude',
        'description': 'description',
        'aspect_ratio': 'aspectRatio',
        'title': 'title',
        'posts': 'posts',
        'content': 'content',
        'stake_to_access': 'stakeToAccess',
        'tags': 'tags',
        'content_url': 'contentUrl',
        'posts_count': 'postsCount',
        'blur_hash': 'blurHash',
        'id': 'id',
        'updated': 'updated',
        'content_type': 'contentType',
        'longitude': 'longitude'
    }

    def __init__(self, created=None, author=None, latitude=None, description=None, aspect_ratio=None, title=None, posts=None, content=None, stake_to_access=None, tags=None, content_url=None, posts_count=None, blur_hash=None, id=None, updated=None, content_type=None, longitude=None, _configuration=None):  # noqa: E501
        """MoodPagedListReadPublicResponseValue - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._created = None
        self._author = None
        self._latitude = None
        self._description = None
        self._aspect_ratio = None
        self._title = None
        self._posts = None
        self._content = None
        self._stake_to_access = None
        self._tags = None
        self._content_url = None
        self._posts_count = None
        self._blur_hash = None
        self._id = None
        self._updated = None
        self._content_type = None
        self._longitude = None
        self.discriminator = None

        if created is not None:
            self.created = created
        if author is not None:
            self.author = author
        if latitude is not None:
            self.latitude = latitude
        if description is not None:
            self.description = description
        if aspect_ratio is not None:
            self.aspect_ratio = aspect_ratio
        if title is not None:
            self.title = title
        if posts is not None:
            self.posts = posts
        if content is not None:
            self.content = content
        if stake_to_access is not None:
            self.stake_to_access = stake_to_access
        if tags is not None:
            self.tags = tags
        if content_url is not None:
            self.content_url = content_url
        if posts_count is not None:
            self.posts_count = posts_count
        if blur_hash is not None:
            self.blur_hash = blur_hash
        if id is not None:
            self.id = id
        if updated is not None:
            self.updated = updated
        if content_type is not None:
            self.content_type = content_type
        if longitude is not None:
            self.longitude = longitude

    @property
    def created(self):
        """Gets the created of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The created of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: str
        """
        return self._created

    @created.setter
    def created(self, created):
        """Sets the created of this MoodPagedListReadPublicResponseValue.


        :param created: The created of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: str
        """

        self._created = created

    @property
    def author(self):
        """Gets the author of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The author of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: MoodPagedListReadPublicResponseAuthor
        """
        return self._author

    @author.setter
    def author(self, author):
        """Sets the author of this MoodPagedListReadPublicResponseValue.


        :param author: The author of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: MoodPagedListReadPublicResponseAuthor
        """

        self._author = author

    @property
    def latitude(self):
        """Gets the latitude of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The latitude of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: float
        """
        return self._latitude

    @latitude.setter
    def latitude(self, latitude):
        """Sets the latitude of this MoodPagedListReadPublicResponseValue.


        :param latitude: The latitude of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: float
        """

        self._latitude = latitude

    @property
    def description(self):
        """Gets the description of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The description of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this MoodPagedListReadPublicResponseValue.


        :param description: The description of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def aspect_ratio(self):
        """Gets the aspect_ratio of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The aspect_ratio of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: float
        """
        return self._aspect_ratio

    @aspect_ratio.setter
    def aspect_ratio(self, aspect_ratio):
        """Sets the aspect_ratio of this MoodPagedListReadPublicResponseValue.


        :param aspect_ratio: The aspect_ratio of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: float
        """

        self._aspect_ratio = aspect_ratio

    @property
    def title(self):
        """Gets the title of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The title of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this MoodPagedListReadPublicResponseValue.


        :param title: The title of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: str
        """

        self._title = title

    @property
    def posts(self):
        """Gets the posts of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The posts of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: list[MoodPagedListReadPublicResponsePosts]
        """
        return self._posts

    @posts.setter
    def posts(self, posts):
        """Sets the posts of this MoodPagedListReadPublicResponseValue.


        :param posts: The posts of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: list[MoodPagedListReadPublicResponsePosts]
        """

        self._posts = posts

    @property
    def content(self):
        """Gets the content of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The content of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: str
        """
        return self._content

    @content.setter
    def content(self, content):
        """Sets the content of this MoodPagedListReadPublicResponseValue.


        :param content: The content of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: str
        """

        self._content = content

    @property
    def stake_to_access(self):
        """Gets the stake_to_access of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The stake_to_access of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: float
        """
        return self._stake_to_access

    @stake_to_access.setter
    def stake_to_access(self, stake_to_access):
        """Sets the stake_to_access of this MoodPagedListReadPublicResponseValue.


        :param stake_to_access: The stake_to_access of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: float
        """

        self._stake_to_access = stake_to_access

    @property
    def tags(self):
        """Gets the tags of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The tags of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: list[MoodPagedListReadPublicResponseTags]
        """
        return self._tags

    @tags.setter
    def tags(self, tags):
        """Sets the tags of this MoodPagedListReadPublicResponseValue.


        :param tags: The tags of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: list[MoodPagedListReadPublicResponseTags]
        """

        self._tags = tags

    @property
    def content_url(self):
        """Gets the content_url of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The content_url of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: str
        """
        return self._content_url

    @content_url.setter
    def content_url(self, content_url):
        """Sets the content_url of this MoodPagedListReadPublicResponseValue.


        :param content_url: The content_url of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: str
        """

        self._content_url = content_url

    @property
    def posts_count(self):
        """Gets the posts_count of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The posts_count of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: float
        """
        return self._posts_count

    @posts_count.setter
    def posts_count(self, posts_count):
        """Sets the posts_count of this MoodPagedListReadPublicResponseValue.


        :param posts_count: The posts_count of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: float
        """

        self._posts_count = posts_count

    @property
    def blur_hash(self):
        """Gets the blur_hash of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The blur_hash of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: str
        """
        return self._blur_hash

    @blur_hash.setter
    def blur_hash(self, blur_hash):
        """Sets the blur_hash of this MoodPagedListReadPublicResponseValue.


        :param blur_hash: The blur_hash of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: str
        """

        self._blur_hash = blur_hash

    @property
    def id(self):
        """Gets the id of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The id of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this MoodPagedListReadPublicResponseValue.


        :param id: The id of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def updated(self):
        """Gets the updated of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The updated of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: str
        """
        return self._updated

    @updated.setter
    def updated(self, updated):
        """Sets the updated of this MoodPagedListReadPublicResponseValue.


        :param updated: The updated of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: str
        """

        self._updated = updated

    @property
    def content_type(self):
        """Gets the content_type of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The content_type of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: str
        """
        return self._content_type

    @content_type.setter
    def content_type(self, content_type):
        """Sets the content_type of this MoodPagedListReadPublicResponseValue.


        :param content_type: The content_type of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :type: str
        """

        self._content_type = content_type

    @property
    def longitude(self):
        """Gets the longitude of this MoodPagedListReadPublicResponseValue.  # noqa: E501


        :return: The longitude of this MoodPagedListReadPublicResponseValue.  # noqa: E501
        :rtype: float
        """
        return self._longitude

    @longitude.setter
    def longitude(self, longitude):
        """Sets the longitude of this MoodPagedListReadPublicResponseValue.


        :param longitude: The longitude of this MoodPagedListReadPublicResponseValue.  # noqa: E501
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
        if issubclass(MoodPagedListReadPublicResponseValue, dict):
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
        if not isinstance(other, MoodPagedListReadPublicResponseValue):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, MoodPagedListReadPublicResponseValue):
            return True

        return self.to_dict() != other.to_dict()
