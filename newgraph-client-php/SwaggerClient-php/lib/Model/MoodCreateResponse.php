<?php
/**
 * MoodCreateResponse
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * newgraph-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-10-04T15:34:01Z
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.27
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Client\Model;

use \ArrayAccess;
use \Swagger\Client\ObjectSerializer;

/**
 * MoodCreateResponse Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class MoodCreateResponse implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'MoodCreateResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'created' => 'string',
        'author' => '\Swagger\Client\Model\MoodPagedListReadPublicResponseAuthor',
        'latitude' => 'float',
        'description' => 'string',
        'aspect_ratio' => 'float',
        'title' => 'string',
        'posts' => '\Swagger\Client\Model\MoodPagedListReadPublicResponsePosts[]',
        'content' => 'string',
        'stake_to_access' => 'float',
        'tags' => '\Swagger\Client\Model\MoodPagedListReadPublicResponseTags[]',
        'content_url' => 'string',
        'posts_count' => 'float',
        'blur_hash' => 'string',
        'id' => 'string',
        'updated' => 'string',
        'content_type' => 'string',
        'longitude' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'created' => null,
        'author' => null,
        'latitude' => null,
        'description' => null,
        'aspect_ratio' => null,
        'title' => null,
        'posts' => null,
        'content' => null,
        'stake_to_access' => null,
        'tags' => null,
        'content_url' => null,
        'posts_count' => null,
        'blur_hash' => null,
        'id' => null,
        'updated' => null,
        'content_type' => null,
        'longitude' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'created' => 'created',
        'author' => 'author',
        'latitude' => 'latitude',
        'description' => 'description',
        'aspect_ratio' => 'aspectRatio',
        'title' => 'title',
        'posts' => 'posts',
        'content' => 'content',
        'stake_to_access' => 'stakeToAccess',
        'tags' => 'tags',
        'content_url' => 'contentUrl',
        'posts_count' => 'postsCount',
        'blur_hash' => 'blurHash',
        'id' => 'id',
        'updated' => 'updated',
        'content_type' => 'contentType',
        'longitude' => 'longitude'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'created' => 'setCreated',
        'author' => 'setAuthor',
        'latitude' => 'setLatitude',
        'description' => 'setDescription',
        'aspect_ratio' => 'setAspectRatio',
        'title' => 'setTitle',
        'posts' => 'setPosts',
        'content' => 'setContent',
        'stake_to_access' => 'setStakeToAccess',
        'tags' => 'setTags',
        'content_url' => 'setContentUrl',
        'posts_count' => 'setPostsCount',
        'blur_hash' => 'setBlurHash',
        'id' => 'setId',
        'updated' => 'setUpdated',
        'content_type' => 'setContentType',
        'longitude' => 'setLongitude'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'created' => 'getCreated',
        'author' => 'getAuthor',
        'latitude' => 'getLatitude',
        'description' => 'getDescription',
        'aspect_ratio' => 'getAspectRatio',
        'title' => 'getTitle',
        'posts' => 'getPosts',
        'content' => 'getContent',
        'stake_to_access' => 'getStakeToAccess',
        'tags' => 'getTags',
        'content_url' => 'getContentUrl',
        'posts_count' => 'getPostsCount',
        'blur_hash' => 'getBlurHash',
        'id' => 'getId',
        'updated' => 'getUpdated',
        'content_type' => 'getContentType',
        'longitude' => 'getLongitude'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['created'] = isset($data['created']) ? $data['created'] : null;
        $this->container['author'] = isset($data['author']) ? $data['author'] : null;
        $this->container['latitude'] = isset($data['latitude']) ? $data['latitude'] : null;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['aspect_ratio'] = isset($data['aspect_ratio']) ? $data['aspect_ratio'] : null;
        $this->container['title'] = isset($data['title']) ? $data['title'] : null;
        $this->container['posts'] = isset($data['posts']) ? $data['posts'] : null;
        $this->container['content'] = isset($data['content']) ? $data['content'] : null;
        $this->container['stake_to_access'] = isset($data['stake_to_access']) ? $data['stake_to_access'] : null;
        $this->container['tags'] = isset($data['tags']) ? $data['tags'] : null;
        $this->container['content_url'] = isset($data['content_url']) ? $data['content_url'] : null;
        $this->container['posts_count'] = isset($data['posts_count']) ? $data['posts_count'] : null;
        $this->container['blur_hash'] = isset($data['blur_hash']) ? $data['blur_hash'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['updated'] = isset($data['updated']) ? $data['updated'] : null;
        $this->container['content_type'] = isset($data['content_type']) ? $data['content_type'] : null;
        $this->container['longitude'] = isset($data['longitude']) ? $data['longitude'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets created
     *
     * @return string
     */
    public function getCreated()
    {
        return $this->container['created'];
    }

    /**
     * Sets created
     *
     * @param string $created created
     *
     * @return $this
     */
    public function setCreated($created)
    {
        $this->container['created'] = $created;

        return $this;
    }

    /**
     * Gets author
     *
     * @return \Swagger\Client\Model\MoodPagedListReadPublicResponseAuthor
     */
    public function getAuthor()
    {
        return $this->container['author'];
    }

    /**
     * Sets author
     *
     * @param \Swagger\Client\Model\MoodPagedListReadPublicResponseAuthor $author author
     *
     * @return $this
     */
    public function setAuthor($author)
    {
        $this->container['author'] = $author;

        return $this;
    }

    /**
     * Gets latitude
     *
     * @return float
     */
    public function getLatitude()
    {
        return $this->container['latitude'];
    }

    /**
     * Sets latitude
     *
     * @param float $latitude latitude
     *
     * @return $this
     */
    public function setLatitude($latitude)
    {
        $this->container['latitude'] = $latitude;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string $description description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets aspect_ratio
     *
     * @return float
     */
    public function getAspectRatio()
    {
        return $this->container['aspect_ratio'];
    }

    /**
     * Sets aspect_ratio
     *
     * @param float $aspect_ratio aspect_ratio
     *
     * @return $this
     */
    public function setAspectRatio($aspect_ratio)
    {
        $this->container['aspect_ratio'] = $aspect_ratio;

        return $this;
    }

    /**
     * Gets title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->container['title'];
    }

    /**
     * Sets title
     *
     * @param string $title title
     *
     * @return $this
     */
    public function setTitle($title)
    {
        $this->container['title'] = $title;

        return $this;
    }

    /**
     * Gets posts
     *
     * @return \Swagger\Client\Model\MoodPagedListReadPublicResponsePosts[]
     */
    public function getPosts()
    {
        return $this->container['posts'];
    }

    /**
     * Sets posts
     *
     * @param \Swagger\Client\Model\MoodPagedListReadPublicResponsePosts[] $posts posts
     *
     * @return $this
     */
    public function setPosts($posts)
    {
        $this->container['posts'] = $posts;

        return $this;
    }

    /**
     * Gets content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->container['content'];
    }

    /**
     * Sets content
     *
     * @param string $content content
     *
     * @return $this
     */
    public function setContent($content)
    {
        $this->container['content'] = $content;

        return $this;
    }

    /**
     * Gets stake_to_access
     *
     * @return float
     */
    public function getStakeToAccess()
    {
        return $this->container['stake_to_access'];
    }

    /**
     * Sets stake_to_access
     *
     * @param float $stake_to_access stake_to_access
     *
     * @return $this
     */
    public function setStakeToAccess($stake_to_access)
    {
        $this->container['stake_to_access'] = $stake_to_access;

        return $this;
    }

    /**
     * Gets tags
     *
     * @return \Swagger\Client\Model\MoodPagedListReadPublicResponseTags[]
     */
    public function getTags()
    {
        return $this->container['tags'];
    }

    /**
     * Sets tags
     *
     * @param \Swagger\Client\Model\MoodPagedListReadPublicResponseTags[] $tags tags
     *
     * @return $this
     */
    public function setTags($tags)
    {
        $this->container['tags'] = $tags;

        return $this;
    }

    /**
     * Gets content_url
     *
     * @return string
     */
    public function getContentUrl()
    {
        return $this->container['content_url'];
    }

    /**
     * Sets content_url
     *
     * @param string $content_url content_url
     *
     * @return $this
     */
    public function setContentUrl($content_url)
    {
        $this->container['content_url'] = $content_url;

        return $this;
    }

    /**
     * Gets posts_count
     *
     * @return float
     */
    public function getPostsCount()
    {
        return $this->container['posts_count'];
    }

    /**
     * Sets posts_count
     *
     * @param float $posts_count posts_count
     *
     * @return $this
     */
    public function setPostsCount($posts_count)
    {
        $this->container['posts_count'] = $posts_count;

        return $this;
    }

    /**
     * Gets blur_hash
     *
     * @return string
     */
    public function getBlurHash()
    {
        return $this->container['blur_hash'];
    }

    /**
     * Sets blur_hash
     *
     * @param string $blur_hash blur_hash
     *
     * @return $this
     */
    public function setBlurHash($blur_hash)
    {
        $this->container['blur_hash'] = $blur_hash;

        return $this;
    }

    /**
     * Gets id
     *
     * @return string
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param string $id id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets updated
     *
     * @return string
     */
    public function getUpdated()
    {
        return $this->container['updated'];
    }

    /**
     * Sets updated
     *
     * @param string $updated updated
     *
     * @return $this
     */
    public function setUpdated($updated)
    {
        $this->container['updated'] = $updated;

        return $this;
    }

    /**
     * Gets content_type
     *
     * @return string
     */
    public function getContentType()
    {
        return $this->container['content_type'];
    }

    /**
     * Sets content_type
     *
     * @param string $content_type content_type
     *
     * @return $this
     */
    public function setContentType($content_type)
    {
        $this->container['content_type'] = $content_type;

        return $this;
    }

    /**
     * Gets longitude
     *
     * @return float
     */
    public function getLongitude()
    {
        return $this->container['longitude'];
    }

    /**
     * Sets longitude
     *
     * @param float $longitude longitude
     *
     * @return $this
     */
    public function setLongitude($longitude)
    {
        $this->container['longitude'] = $longitude;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


