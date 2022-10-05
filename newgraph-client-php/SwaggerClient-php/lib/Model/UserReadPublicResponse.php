<?php
/**
 * UserReadPublicResponse
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
 * UserReadPublicResponse Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class UserReadPublicResponse implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'UserReadPublicResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'newcoin_ticker' => 'string',
        'youtube' => 'string',
        'powered' => 'float',
        'display_name' => 'string',
        'newcoin_acc_tx' => 'string',
        'latitude' => 'float',
        'description' => 'string',
        'newcoin_pool_id' => 'string',
        'tumblr' => 'string',
        'aspect_ratio' => 'float',
        'instagram' => 'string',
        'medium' => 'string',
        'newcoin_active_public_key' => 'string',
        'soundcloud' => 'string',
        'newcoin_public_key' => 'string',
        'powering' => 'float',
        'snapchat' => 'string',
        'apple' => 'string',
        'twitter' => 'string',
        'newcoin_owner_public_key' => 'string',
        'tiktok' => 'string',
        'reddit' => 'string',
        'youtube_id' => 'string',
        'id' => 'string',
        'newcoin_pool_stake' => 'float',
        'content_type' => 'string',
        'signal' => 'string',
        'longitude' => 'float',
        'newcoin_publisher_public_key' => 'string',
        'website' => 'string',
        'created' => 'string',
        'spotify' => 'string',
        'facebook' => 'string',
        'facebook_id' => 'string',
        'full_name' => 'string',
        'telegram' => 'string',
        'pinterest' => 'string',
        'verified_social_ids' => 'string[]',
        'newcoin_pool_tx' => 'string',
        'license' => 'string',
        'content_url' => 'string',
        'discord' => 'string',
        'blur_hash' => 'string',
        'consent_email' => 'string',
        'updated' => 'string',
        'username' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'newcoin_ticker' => null,
        'youtube' => null,
        'powered' => null,
        'display_name' => null,
        'newcoin_acc_tx' => null,
        'latitude' => null,
        'description' => null,
        'newcoin_pool_id' => null,
        'tumblr' => null,
        'aspect_ratio' => null,
        'instagram' => null,
        'medium' => null,
        'newcoin_active_public_key' => null,
        'soundcloud' => null,
        'newcoin_public_key' => null,
        'powering' => null,
        'snapchat' => null,
        'apple' => null,
        'twitter' => null,
        'newcoin_owner_public_key' => null,
        'tiktok' => null,
        'reddit' => null,
        'youtube_id' => null,
        'id' => null,
        'newcoin_pool_stake' => null,
        'content_type' => null,
        'signal' => null,
        'longitude' => null,
        'newcoin_publisher_public_key' => null,
        'website' => null,
        'created' => null,
        'spotify' => null,
        'facebook' => null,
        'facebook_id' => null,
        'full_name' => null,
        'telegram' => null,
        'pinterest' => null,
        'verified_social_ids' => null,
        'newcoin_pool_tx' => null,
        'license' => null,
        'content_url' => null,
        'discord' => null,
        'blur_hash' => null,
        'consent_email' => null,
        'updated' => null,
        'username' => null
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
        'newcoin_ticker' => 'newcoinTicker',
        'youtube' => 'youtube',
        'powered' => 'powered',
        'display_name' => 'displayName',
        'newcoin_acc_tx' => 'newcoinAccTx',
        'latitude' => 'latitude',
        'description' => 'description',
        'newcoin_pool_id' => 'newcoinPoolId',
        'tumblr' => 'tumblr',
        'aspect_ratio' => 'aspectRatio',
        'instagram' => 'instagram',
        'medium' => 'medium',
        'newcoin_active_public_key' => 'newcoinActivePublicKey',
        'soundcloud' => 'soundcloud',
        'newcoin_public_key' => 'newcoinPublicKey',
        'powering' => 'powering',
        'snapchat' => 'snapchat',
        'apple' => 'apple',
        'twitter' => 'twitter',
        'newcoin_owner_public_key' => 'newcoinOwnerPublicKey',
        'tiktok' => 'tiktok',
        'reddit' => 'reddit',
        'youtube_id' => 'youtubeId',
        'id' => 'id',
        'newcoin_pool_stake' => 'newcoinPoolStake',
        'content_type' => 'contentType',
        'signal' => 'signal',
        'longitude' => 'longitude',
        'newcoin_publisher_public_key' => 'newcoinPublisherPublicKey',
        'website' => 'website',
        'created' => 'created',
        'spotify' => 'spotify',
        'facebook' => 'facebook',
        'facebook_id' => 'facebookId',
        'full_name' => 'fullName',
        'telegram' => 'telegram',
        'pinterest' => 'pinterest',
        'verified_social_ids' => 'verifiedSocialIds',
        'newcoin_pool_tx' => 'newcoinPoolTx',
        'license' => 'license',
        'content_url' => 'contentUrl',
        'discord' => 'discord',
        'blur_hash' => 'blurHash',
        'consent_email' => 'consentEmail',
        'updated' => 'updated',
        'username' => 'username'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'newcoin_ticker' => 'setNewcoinTicker',
        'youtube' => 'setYoutube',
        'powered' => 'setPowered',
        'display_name' => 'setDisplayName',
        'newcoin_acc_tx' => 'setNewcoinAccTx',
        'latitude' => 'setLatitude',
        'description' => 'setDescription',
        'newcoin_pool_id' => 'setNewcoinPoolId',
        'tumblr' => 'setTumblr',
        'aspect_ratio' => 'setAspectRatio',
        'instagram' => 'setInstagram',
        'medium' => 'setMedium',
        'newcoin_active_public_key' => 'setNewcoinActivePublicKey',
        'soundcloud' => 'setSoundcloud',
        'newcoin_public_key' => 'setNewcoinPublicKey',
        'powering' => 'setPowering',
        'snapchat' => 'setSnapchat',
        'apple' => 'setApple',
        'twitter' => 'setTwitter',
        'newcoin_owner_public_key' => 'setNewcoinOwnerPublicKey',
        'tiktok' => 'setTiktok',
        'reddit' => 'setReddit',
        'youtube_id' => 'setYoutubeId',
        'id' => 'setId',
        'newcoin_pool_stake' => 'setNewcoinPoolStake',
        'content_type' => 'setContentType',
        'signal' => 'setSignal',
        'longitude' => 'setLongitude',
        'newcoin_publisher_public_key' => 'setNewcoinPublisherPublicKey',
        'website' => 'setWebsite',
        'created' => 'setCreated',
        'spotify' => 'setSpotify',
        'facebook' => 'setFacebook',
        'facebook_id' => 'setFacebookId',
        'full_name' => 'setFullName',
        'telegram' => 'setTelegram',
        'pinterest' => 'setPinterest',
        'verified_social_ids' => 'setVerifiedSocialIds',
        'newcoin_pool_tx' => 'setNewcoinPoolTx',
        'license' => 'setLicense',
        'content_url' => 'setContentUrl',
        'discord' => 'setDiscord',
        'blur_hash' => 'setBlurHash',
        'consent_email' => 'setConsentEmail',
        'updated' => 'setUpdated',
        'username' => 'setUsername'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'newcoin_ticker' => 'getNewcoinTicker',
        'youtube' => 'getYoutube',
        'powered' => 'getPowered',
        'display_name' => 'getDisplayName',
        'newcoin_acc_tx' => 'getNewcoinAccTx',
        'latitude' => 'getLatitude',
        'description' => 'getDescription',
        'newcoin_pool_id' => 'getNewcoinPoolId',
        'tumblr' => 'getTumblr',
        'aspect_ratio' => 'getAspectRatio',
        'instagram' => 'getInstagram',
        'medium' => 'getMedium',
        'newcoin_active_public_key' => 'getNewcoinActivePublicKey',
        'soundcloud' => 'getSoundcloud',
        'newcoin_public_key' => 'getNewcoinPublicKey',
        'powering' => 'getPowering',
        'snapchat' => 'getSnapchat',
        'apple' => 'getApple',
        'twitter' => 'getTwitter',
        'newcoin_owner_public_key' => 'getNewcoinOwnerPublicKey',
        'tiktok' => 'getTiktok',
        'reddit' => 'getReddit',
        'youtube_id' => 'getYoutubeId',
        'id' => 'getId',
        'newcoin_pool_stake' => 'getNewcoinPoolStake',
        'content_type' => 'getContentType',
        'signal' => 'getSignal',
        'longitude' => 'getLongitude',
        'newcoin_publisher_public_key' => 'getNewcoinPublisherPublicKey',
        'website' => 'getWebsite',
        'created' => 'getCreated',
        'spotify' => 'getSpotify',
        'facebook' => 'getFacebook',
        'facebook_id' => 'getFacebookId',
        'full_name' => 'getFullName',
        'telegram' => 'getTelegram',
        'pinterest' => 'getPinterest',
        'verified_social_ids' => 'getVerifiedSocialIds',
        'newcoin_pool_tx' => 'getNewcoinPoolTx',
        'license' => 'getLicense',
        'content_url' => 'getContentUrl',
        'discord' => 'getDiscord',
        'blur_hash' => 'getBlurHash',
        'consent_email' => 'getConsentEmail',
        'updated' => 'getUpdated',
        'username' => 'getUsername'
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
        $this->container['newcoin_ticker'] = isset($data['newcoin_ticker']) ? $data['newcoin_ticker'] : null;
        $this->container['youtube'] = isset($data['youtube']) ? $data['youtube'] : null;
        $this->container['powered'] = isset($data['powered']) ? $data['powered'] : null;
        $this->container['display_name'] = isset($data['display_name']) ? $data['display_name'] : null;
        $this->container['newcoin_acc_tx'] = isset($data['newcoin_acc_tx']) ? $data['newcoin_acc_tx'] : null;
        $this->container['latitude'] = isset($data['latitude']) ? $data['latitude'] : null;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['newcoin_pool_id'] = isset($data['newcoin_pool_id']) ? $data['newcoin_pool_id'] : null;
        $this->container['tumblr'] = isset($data['tumblr']) ? $data['tumblr'] : null;
        $this->container['aspect_ratio'] = isset($data['aspect_ratio']) ? $data['aspect_ratio'] : null;
        $this->container['instagram'] = isset($data['instagram']) ? $data['instagram'] : null;
        $this->container['medium'] = isset($data['medium']) ? $data['medium'] : null;
        $this->container['newcoin_active_public_key'] = isset($data['newcoin_active_public_key']) ? $data['newcoin_active_public_key'] : null;
        $this->container['soundcloud'] = isset($data['soundcloud']) ? $data['soundcloud'] : null;
        $this->container['newcoin_public_key'] = isset($data['newcoin_public_key']) ? $data['newcoin_public_key'] : null;
        $this->container['powering'] = isset($data['powering']) ? $data['powering'] : null;
        $this->container['snapchat'] = isset($data['snapchat']) ? $data['snapchat'] : null;
        $this->container['apple'] = isset($data['apple']) ? $data['apple'] : null;
        $this->container['twitter'] = isset($data['twitter']) ? $data['twitter'] : null;
        $this->container['newcoin_owner_public_key'] = isset($data['newcoin_owner_public_key']) ? $data['newcoin_owner_public_key'] : null;
        $this->container['tiktok'] = isset($data['tiktok']) ? $data['tiktok'] : null;
        $this->container['reddit'] = isset($data['reddit']) ? $data['reddit'] : null;
        $this->container['youtube_id'] = isset($data['youtube_id']) ? $data['youtube_id'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['newcoin_pool_stake'] = isset($data['newcoin_pool_stake']) ? $data['newcoin_pool_stake'] : null;
        $this->container['content_type'] = isset($data['content_type']) ? $data['content_type'] : null;
        $this->container['signal'] = isset($data['signal']) ? $data['signal'] : null;
        $this->container['longitude'] = isset($data['longitude']) ? $data['longitude'] : null;
        $this->container['newcoin_publisher_public_key'] = isset($data['newcoin_publisher_public_key']) ? $data['newcoin_publisher_public_key'] : null;
        $this->container['website'] = isset($data['website']) ? $data['website'] : null;
        $this->container['created'] = isset($data['created']) ? $data['created'] : null;
        $this->container['spotify'] = isset($data['spotify']) ? $data['spotify'] : null;
        $this->container['facebook'] = isset($data['facebook']) ? $data['facebook'] : null;
        $this->container['facebook_id'] = isset($data['facebook_id']) ? $data['facebook_id'] : null;
        $this->container['full_name'] = isset($data['full_name']) ? $data['full_name'] : null;
        $this->container['telegram'] = isset($data['telegram']) ? $data['telegram'] : null;
        $this->container['pinterest'] = isset($data['pinterest']) ? $data['pinterest'] : null;
        $this->container['verified_social_ids'] = isset($data['verified_social_ids']) ? $data['verified_social_ids'] : null;
        $this->container['newcoin_pool_tx'] = isset($data['newcoin_pool_tx']) ? $data['newcoin_pool_tx'] : null;
        $this->container['license'] = isset($data['license']) ? $data['license'] : null;
        $this->container['content_url'] = isset($data['content_url']) ? $data['content_url'] : null;
        $this->container['discord'] = isset($data['discord']) ? $data['discord'] : null;
        $this->container['blur_hash'] = isset($data['blur_hash']) ? $data['blur_hash'] : null;
        $this->container['consent_email'] = isset($data['consent_email']) ? $data['consent_email'] : null;
        $this->container['updated'] = isset($data['updated']) ? $data['updated'] : null;
        $this->container['username'] = isset($data['username']) ? $data['username'] : null;
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
     * Gets newcoin_ticker
     *
     * @return string
     */
    public function getNewcoinTicker()
    {
        return $this->container['newcoin_ticker'];
    }

    /**
     * Sets newcoin_ticker
     *
     * @param string $newcoin_ticker newcoin_ticker
     *
     * @return $this
     */
    public function setNewcoinTicker($newcoin_ticker)
    {
        $this->container['newcoin_ticker'] = $newcoin_ticker;

        return $this;
    }

    /**
     * Gets youtube
     *
     * @return string
     */
    public function getYoutube()
    {
        return $this->container['youtube'];
    }

    /**
     * Sets youtube
     *
     * @param string $youtube youtube
     *
     * @return $this
     */
    public function setYoutube($youtube)
    {
        $this->container['youtube'] = $youtube;

        return $this;
    }

    /**
     * Gets powered
     *
     * @return float
     */
    public function getPowered()
    {
        return $this->container['powered'];
    }

    /**
     * Sets powered
     *
     * @param float $powered powered
     *
     * @return $this
     */
    public function setPowered($powered)
    {
        $this->container['powered'] = $powered;

        return $this;
    }

    /**
     * Gets display_name
     *
     * @return string
     */
    public function getDisplayName()
    {
        return $this->container['display_name'];
    }

    /**
     * Sets display_name
     *
     * @param string $display_name display_name
     *
     * @return $this
     */
    public function setDisplayName($display_name)
    {
        $this->container['display_name'] = $display_name;

        return $this;
    }

    /**
     * Gets newcoin_acc_tx
     *
     * @return string
     */
    public function getNewcoinAccTx()
    {
        return $this->container['newcoin_acc_tx'];
    }

    /**
     * Sets newcoin_acc_tx
     *
     * @param string $newcoin_acc_tx newcoin_acc_tx
     *
     * @return $this
     */
    public function setNewcoinAccTx($newcoin_acc_tx)
    {
        $this->container['newcoin_acc_tx'] = $newcoin_acc_tx;

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
     * Gets newcoin_pool_id
     *
     * @return string
     */
    public function getNewcoinPoolId()
    {
        return $this->container['newcoin_pool_id'];
    }

    /**
     * Sets newcoin_pool_id
     *
     * @param string $newcoin_pool_id newcoin_pool_id
     *
     * @return $this
     */
    public function setNewcoinPoolId($newcoin_pool_id)
    {
        $this->container['newcoin_pool_id'] = $newcoin_pool_id;

        return $this;
    }

    /**
     * Gets tumblr
     *
     * @return string
     */
    public function getTumblr()
    {
        return $this->container['tumblr'];
    }

    /**
     * Sets tumblr
     *
     * @param string $tumblr tumblr
     *
     * @return $this
     */
    public function setTumblr($tumblr)
    {
        $this->container['tumblr'] = $tumblr;

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
     * Gets instagram
     *
     * @return string
     */
    public function getInstagram()
    {
        return $this->container['instagram'];
    }

    /**
     * Sets instagram
     *
     * @param string $instagram instagram
     *
     * @return $this
     */
    public function setInstagram($instagram)
    {
        $this->container['instagram'] = $instagram;

        return $this;
    }

    /**
     * Gets medium
     *
     * @return string
     */
    public function getMedium()
    {
        return $this->container['medium'];
    }

    /**
     * Sets medium
     *
     * @param string $medium medium
     *
     * @return $this
     */
    public function setMedium($medium)
    {
        $this->container['medium'] = $medium;

        return $this;
    }

    /**
     * Gets newcoin_active_public_key
     *
     * @return string
     */
    public function getNewcoinActivePublicKey()
    {
        return $this->container['newcoin_active_public_key'];
    }

    /**
     * Sets newcoin_active_public_key
     *
     * @param string $newcoin_active_public_key newcoin_active_public_key
     *
     * @return $this
     */
    public function setNewcoinActivePublicKey($newcoin_active_public_key)
    {
        $this->container['newcoin_active_public_key'] = $newcoin_active_public_key;

        return $this;
    }

    /**
     * Gets soundcloud
     *
     * @return string
     */
    public function getSoundcloud()
    {
        return $this->container['soundcloud'];
    }

    /**
     * Sets soundcloud
     *
     * @param string $soundcloud soundcloud
     *
     * @return $this
     */
    public function setSoundcloud($soundcloud)
    {
        $this->container['soundcloud'] = $soundcloud;

        return $this;
    }

    /**
     * Gets newcoin_public_key
     *
     * @return string
     */
    public function getNewcoinPublicKey()
    {
        return $this->container['newcoin_public_key'];
    }

    /**
     * Sets newcoin_public_key
     *
     * @param string $newcoin_public_key newcoin_public_key
     *
     * @return $this
     */
    public function setNewcoinPublicKey($newcoin_public_key)
    {
        $this->container['newcoin_public_key'] = $newcoin_public_key;

        return $this;
    }

    /**
     * Gets powering
     *
     * @return float
     */
    public function getPowering()
    {
        return $this->container['powering'];
    }

    /**
     * Sets powering
     *
     * @param float $powering powering
     *
     * @return $this
     */
    public function setPowering($powering)
    {
        $this->container['powering'] = $powering;

        return $this;
    }

    /**
     * Gets snapchat
     *
     * @return string
     */
    public function getSnapchat()
    {
        return $this->container['snapchat'];
    }

    /**
     * Sets snapchat
     *
     * @param string $snapchat snapchat
     *
     * @return $this
     */
    public function setSnapchat($snapchat)
    {
        $this->container['snapchat'] = $snapchat;

        return $this;
    }

    /**
     * Gets apple
     *
     * @return string
     */
    public function getApple()
    {
        return $this->container['apple'];
    }

    /**
     * Sets apple
     *
     * @param string $apple apple
     *
     * @return $this
     */
    public function setApple($apple)
    {
        $this->container['apple'] = $apple;

        return $this;
    }

    /**
     * Gets twitter
     *
     * @return string
     */
    public function getTwitter()
    {
        return $this->container['twitter'];
    }

    /**
     * Sets twitter
     *
     * @param string $twitter twitter
     *
     * @return $this
     */
    public function setTwitter($twitter)
    {
        $this->container['twitter'] = $twitter;

        return $this;
    }

    /**
     * Gets newcoin_owner_public_key
     *
     * @return string
     */
    public function getNewcoinOwnerPublicKey()
    {
        return $this->container['newcoin_owner_public_key'];
    }

    /**
     * Sets newcoin_owner_public_key
     *
     * @param string $newcoin_owner_public_key newcoin_owner_public_key
     *
     * @return $this
     */
    public function setNewcoinOwnerPublicKey($newcoin_owner_public_key)
    {
        $this->container['newcoin_owner_public_key'] = $newcoin_owner_public_key;

        return $this;
    }

    /**
     * Gets tiktok
     *
     * @return string
     */
    public function getTiktok()
    {
        return $this->container['tiktok'];
    }

    /**
     * Sets tiktok
     *
     * @param string $tiktok tiktok
     *
     * @return $this
     */
    public function setTiktok($tiktok)
    {
        $this->container['tiktok'] = $tiktok;

        return $this;
    }

    /**
     * Gets reddit
     *
     * @return string
     */
    public function getReddit()
    {
        return $this->container['reddit'];
    }

    /**
     * Sets reddit
     *
     * @param string $reddit reddit
     *
     * @return $this
     */
    public function setReddit($reddit)
    {
        $this->container['reddit'] = $reddit;

        return $this;
    }

    /**
     * Gets youtube_id
     *
     * @return string
     */
    public function getYoutubeId()
    {
        return $this->container['youtube_id'];
    }

    /**
     * Sets youtube_id
     *
     * @param string $youtube_id youtube_id
     *
     * @return $this
     */
    public function setYoutubeId($youtube_id)
    {
        $this->container['youtube_id'] = $youtube_id;

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
     * Gets newcoin_pool_stake
     *
     * @return float
     */
    public function getNewcoinPoolStake()
    {
        return $this->container['newcoin_pool_stake'];
    }

    /**
     * Sets newcoin_pool_stake
     *
     * @param float $newcoin_pool_stake newcoin_pool_stake
     *
     * @return $this
     */
    public function setNewcoinPoolStake($newcoin_pool_stake)
    {
        $this->container['newcoin_pool_stake'] = $newcoin_pool_stake;

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
     * Gets signal
     *
     * @return string
     */
    public function getSignal()
    {
        return $this->container['signal'];
    }

    /**
     * Sets signal
     *
     * @param string $signal signal
     *
     * @return $this
     */
    public function setSignal($signal)
    {
        $this->container['signal'] = $signal;

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
     * Gets newcoin_publisher_public_key
     *
     * @return string
     */
    public function getNewcoinPublisherPublicKey()
    {
        return $this->container['newcoin_publisher_public_key'];
    }

    /**
     * Sets newcoin_publisher_public_key
     *
     * @param string $newcoin_publisher_public_key newcoin_publisher_public_key
     *
     * @return $this
     */
    public function setNewcoinPublisherPublicKey($newcoin_publisher_public_key)
    {
        $this->container['newcoin_publisher_public_key'] = $newcoin_publisher_public_key;

        return $this;
    }

    /**
     * Gets website
     *
     * @return string
     */
    public function getWebsite()
    {
        return $this->container['website'];
    }

    /**
     * Sets website
     *
     * @param string $website website
     *
     * @return $this
     */
    public function setWebsite($website)
    {
        $this->container['website'] = $website;

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
     * Gets spotify
     *
     * @return string
     */
    public function getSpotify()
    {
        return $this->container['spotify'];
    }

    /**
     * Sets spotify
     *
     * @param string $spotify spotify
     *
     * @return $this
     */
    public function setSpotify($spotify)
    {
        $this->container['spotify'] = $spotify;

        return $this;
    }

    /**
     * Gets facebook
     *
     * @return string
     */
    public function getFacebook()
    {
        return $this->container['facebook'];
    }

    /**
     * Sets facebook
     *
     * @param string $facebook facebook
     *
     * @return $this
     */
    public function setFacebook($facebook)
    {
        $this->container['facebook'] = $facebook;

        return $this;
    }

    /**
     * Gets facebook_id
     *
     * @return string
     */
    public function getFacebookId()
    {
        return $this->container['facebook_id'];
    }

    /**
     * Sets facebook_id
     *
     * @param string $facebook_id facebook_id
     *
     * @return $this
     */
    public function setFacebookId($facebook_id)
    {
        $this->container['facebook_id'] = $facebook_id;

        return $this;
    }

    /**
     * Gets full_name
     *
     * @return string
     */
    public function getFullName()
    {
        return $this->container['full_name'];
    }

    /**
     * Sets full_name
     *
     * @param string $full_name full_name
     *
     * @return $this
     */
    public function setFullName($full_name)
    {
        $this->container['full_name'] = $full_name;

        return $this;
    }

    /**
     * Gets telegram
     *
     * @return string
     */
    public function getTelegram()
    {
        return $this->container['telegram'];
    }

    /**
     * Sets telegram
     *
     * @param string $telegram telegram
     *
     * @return $this
     */
    public function setTelegram($telegram)
    {
        $this->container['telegram'] = $telegram;

        return $this;
    }

    /**
     * Gets pinterest
     *
     * @return string
     */
    public function getPinterest()
    {
        return $this->container['pinterest'];
    }

    /**
     * Sets pinterest
     *
     * @param string $pinterest pinterest
     *
     * @return $this
     */
    public function setPinterest($pinterest)
    {
        $this->container['pinterest'] = $pinterest;

        return $this;
    }

    /**
     * Gets verified_social_ids
     *
     * @return string[]
     */
    public function getVerifiedSocialIds()
    {
        return $this->container['verified_social_ids'];
    }

    /**
     * Sets verified_social_ids
     *
     * @param string[] $verified_social_ids verified_social_ids
     *
     * @return $this
     */
    public function setVerifiedSocialIds($verified_social_ids)
    {
        $this->container['verified_social_ids'] = $verified_social_ids;

        return $this;
    }

    /**
     * Gets newcoin_pool_tx
     *
     * @return string
     */
    public function getNewcoinPoolTx()
    {
        return $this->container['newcoin_pool_tx'];
    }

    /**
     * Sets newcoin_pool_tx
     *
     * @param string $newcoin_pool_tx newcoin_pool_tx
     *
     * @return $this
     */
    public function setNewcoinPoolTx($newcoin_pool_tx)
    {
        $this->container['newcoin_pool_tx'] = $newcoin_pool_tx;

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
     * Gets discord
     *
     * @return string
     */
    public function getDiscord()
    {
        return $this->container['discord'];
    }

    /**
     * Sets discord
     *
     * @param string $discord discord
     *
     * @return $this
     */
    public function setDiscord($discord)
    {
        $this->container['discord'] = $discord;

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
     * Gets consent_email
     *
     * @return string
     */
    public function getConsentEmail()
    {
        return $this->container['consent_email'];
    }

    /**
     * Sets consent_email
     *
     * @param string $consent_email consent_email
     *
     * @return $this
     */
    public function setConsentEmail($consent_email)
    {
        $this->container['consent_email'] = $consent_email;

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
     * Gets username
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->container['username'];
    }

    /**
     * Sets username
     *
     * @param string $username username
     *
     * @return $this
     */
    public function setUsername($username)
    {
        $this->container['username'] = $username;

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


