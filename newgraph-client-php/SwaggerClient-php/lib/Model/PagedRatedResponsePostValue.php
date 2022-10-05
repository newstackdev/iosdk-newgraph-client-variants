<?php
/**
 * PagedRatedResponsePostValue
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
 * PagedRatedResponsePostValue Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class PagedRatedResponsePostValue implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'PagedRatedResponsePost_value';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'cover_content_url' => 'string',
        'mood_id' => 'string',
        'created' => 'string',
        'author' => '\Swagger\Client\Model\MoodPagedListReadPublicResponseAuthor',
        'latitude' => 'float',
        'moods' => '\Swagger\Client\Model\MoodPagedListReadPublicResponseMoods[]',
        'rating' => '\Swagger\Client\Model\PagedRatedResponseUserRating',
        'description' => 'string',
        'aspect_ratio' => 'float',
        'title' => 'string',
        'content' => 'string',
        'tags' => '\Swagger\Client\Model\MoodPagedListReadPublicResponseTags[]',
        'license' => 'string',
        'content_url' => 'string',
        'blur_hash' => 'string',
        'newcoin_mint_tx' => 'string',
        'id' => 'string',
        'embed' => 'string',
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
        'cover_content_url' => null,
        'mood_id' => null,
        'created' => null,
        'author' => null,
        'latitude' => null,
        'moods' => null,
        'rating' => null,
        'description' => null,
        'aspect_ratio' => null,
        'title' => null,
        'content' => null,
        'tags' => null,
        'license' => null,
        'content_url' => null,
        'blur_hash' => null,
        'newcoin_mint_tx' => null,
        'id' => null,
        'embed' => null,
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
        'cover_content_url' => 'coverContentUrl',
        'mood_id' => 'moodId',
        'created' => 'created',
        'author' => 'author',
        'latitude' => 'latitude',
        'moods' => 'moods',
        'rating' => 'rating',
        'description' => 'description',
        'aspect_ratio' => 'aspectRatio',
        'title' => 'title',
        'content' => 'content',
        'tags' => 'tags',
        'license' => 'license',
        'content_url' => 'contentUrl',
        'blur_hash' => 'blurHash',
        'newcoin_mint_tx' => 'newcoinMintTx',
        'id' => 'id',
        'embed' => 'embed',
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
        'cover_content_url' => 'setCoverContentUrl',
        'mood_id' => 'setMoodId',
        'created' => 'setCreated',
        'author' => 'setAuthor',
        'latitude' => 'setLatitude',
        'moods' => 'setMoods',
        'rating' => 'setRating',
        'description' => 'setDescription',
        'aspect_ratio' => 'setAspectRatio',
        'title' => 'setTitle',
        'content' => 'setContent',
        'tags' => 'setTags',
        'license' => 'setLicense',
        'content_url' => 'setContentUrl',
        'blur_hash' => 'setBlurHash',
        'newcoin_mint_tx' => 'setNewcoinMintTx',
        'id' => 'setId',
        'embed' => 'setEmbed',
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
        'cover_content_url' => 'getCoverContentUrl',
        'mood_id' => 'getMoodId',
        'created' => 'getCreated',
        'author' => 'getAuthor',
        'latitude' => 'getLatitude',
        'moods' => 'getMoods',
        'rating' => 'getRating',
        'description' => 'getDescription',
        'aspect_ratio' => 'getAspectRatio',
        'title' => 'getTitle',
        'content' => 'getContent',
        'tags' => 'getTags',
        'license' => 'getLicense',
        'content_url' => 'getContentUrl',
        'blur_hash' => 'getBlurHash',
        'newcoin_mint_tx' => 'getNewcoinMintTx',
        'id' => 'getId',
        'embed' => 'getEmbed',
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
        $this->container['cover_content_url'] = isset($data['cover_content_url']) ? $data['cover_content_url'] : null;
        $this->container['mood_id'] = isset($data['mood_id']) ? $data['mood_id'] : null;
        $this->container['created'] = isset($data['created']) ? $data['created'] : null;
        $this->container['author'] = isset($data['author']) ? $data['author'] : null;
        $this->container['latitude'] = isset($data['latitude']) ? $data['latitude'] : null;
        $this->container['moods'] = isset($data['moods']) ? $data['moods'] : null;
        $this->container['rating'] = isset($data['rating']) ? $data['rating'] : null;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['aspect_ratio'] = isset($data['aspect_ratio']) ? $data['aspect_ratio'] : null;
        $this->container['title'] = isset($data['title']) ? $data['title'] : null;
        $this->container['content'] = isset($data['content']) ? $data['content'] : null;
        $this->container['tags'] = isset($data['tags']) ? $data['tags'] : null;
        $this->container['license'] = isset($data['license']) ? $data['license'] : null;
        $this->container['content_url'] = isset($data['content_url']) ? $data['content_url'] : null;
        $this->container['blur_hash'] = isset($data['blur_hash']) ? $data['blur_hash'] : null;
        $this->container['newcoin_mint_tx'] = isset($data['newcoin_mint_tx']) ? $data['newcoin_mint_tx'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['embed'] = isset($data['embed']) ? $data['embed'] : null;
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
     * Gets cover_content_url
     *
     * @return string
     */
    public function getCoverContentUrl()
    {
        return $this->container['cover_content_url'];
    }

    /**
     * Sets cover_content_url
     *
     * @param string $cover_content_url cover_content_url
     *
     * @return $this
     */
    public function setCoverContentUrl($cover_content_url)
    {
        $this->container['cover_content_url'] = $cover_content_url;

        return $this;
    }

    /**
     * Gets mood_id
     *
     * @return string
     */
    public function getMoodId()
    {
        return $this->container['mood_id'];
    }

    /**
     * Sets mood_id
     *
     * @param string $mood_id mood_id
     *
     * @return $this
     */
    public function setMoodId($mood_id)
    {
        $this->container['mood_id'] = $mood_id;

        return $this;
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
     * Gets moods
     *
     * @return \Swagger\Client\Model\MoodPagedListReadPublicResponseMoods[]
     */
    public function getMoods()
    {
        return $this->container['moods'];
    }

    /**
     * Sets moods
     *
     * @param \Swagger\Client\Model\MoodPagedListReadPublicResponseMoods[] $moods moods
     *
     * @return $this
     */
    public function setMoods($moods)
    {
        $this->container['moods'] = $moods;

        return $this;
    }

    /**
     * Gets rating
     *
     * @return \Swagger\Client\Model\PagedRatedResponseUserRating
     */
    public function getRating()
    {
        return $this->container['rating'];
    }

    /**
     * Sets rating
     *
     * @param \Swagger\Client\Model\PagedRatedResponseUserRating $rating rating
     *
     * @return $this
     */
    public function setRating($rating)
    {
        $this->container['rating'] = $rating;

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
     * Gets license
     *
     * @return string
     */
    public function getLicense()
    {
        return $this->container['license'];
    }

    /**
     * Sets license
     *
     * @param string $license license
     *
     * @return $this
     */
    public function setLicense($license)
    {
        $this->container['license'] = $license;

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
     * Gets newcoin_mint_tx
     *
     * @return string
     */
    public function getNewcoinMintTx()
    {
        return $this->container['newcoin_mint_tx'];
    }

    /**
     * Sets newcoin_mint_tx
     *
     * @param string $newcoin_mint_tx newcoin_mint_tx
     *
     * @return $this
     */
    public function setNewcoinMintTx($newcoin_mint_tx)
    {
        $this->container['newcoin_mint_tx'] = $newcoin_mint_tx;

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
     * Gets embed
     *
     * @return string
     */
    public function getEmbed()
    {
        return $this->container['embed'];
    }

    /**
     * Sets embed
     *
     * @param string $embed embed
     *
     * @return $this
     */
    public function setEmbed($embed)
    {
        $this->container['embed'] = $embed;

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


