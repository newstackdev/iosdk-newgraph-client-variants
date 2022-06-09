<?php
/**
 * SyncContactsRequestContacts
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * newlife-creator-api-eu-dev
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2022-05-20T13:39:48Z
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
 * SyncContactsRequestContacts Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class SyncContactsRequestContacts implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'SyncContactsRequest_contacts';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'birthday' => 'string',
        'identifier' => 'string',
        'android_account_name' => 'string',
        'display_name' => 'string',
        'prefix' => 'string',
        'given_name' => 'string',
        'job_title' => 'string',
        'phones' => '\Swagger\Client\Model\SyncContactsRequestPhones[]',
        'avatar' => 'string',
        'suffix' => 'string',
        'postal_addresses' => '\Swagger\Client\Model\SyncContactsRequestPostalAddresses[]',
        'emails' => '\Swagger\Client\Model\SyncContactsRequestPhones[]',
        'android_account_type' => 'string',
        'family_name' => 'string',
        'middle_name' => 'string',
        'company' => 'string',
        'android_account_type_raw' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'birthday' => null,
        'identifier' => null,
        'android_account_name' => null,
        'display_name' => null,
        'prefix' => null,
        'given_name' => null,
        'job_title' => null,
        'phones' => null,
        'avatar' => null,
        'suffix' => null,
        'postal_addresses' => null,
        'emails' => null,
        'android_account_type' => null,
        'family_name' => null,
        'middle_name' => null,
        'company' => null,
        'android_account_type_raw' => null
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
        'birthday' => 'birthday',
        'identifier' => 'identifier',
        'android_account_name' => 'androidAccountName',
        'display_name' => 'displayName',
        'prefix' => 'prefix',
        'given_name' => 'givenName',
        'job_title' => 'jobTitle',
        'phones' => 'phones',
        'avatar' => 'avatar',
        'suffix' => 'suffix',
        'postal_addresses' => 'postalAddresses',
        'emails' => 'emails',
        'android_account_type' => 'androidAccountType',
        'family_name' => 'familyName',
        'middle_name' => 'middleName',
        'company' => 'company',
        'android_account_type_raw' => 'androidAccountTypeRaw'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'birthday' => 'setBirthday',
        'identifier' => 'setIdentifier',
        'android_account_name' => 'setAndroidAccountName',
        'display_name' => 'setDisplayName',
        'prefix' => 'setPrefix',
        'given_name' => 'setGivenName',
        'job_title' => 'setJobTitle',
        'phones' => 'setPhones',
        'avatar' => 'setAvatar',
        'suffix' => 'setSuffix',
        'postal_addresses' => 'setPostalAddresses',
        'emails' => 'setEmails',
        'android_account_type' => 'setAndroidAccountType',
        'family_name' => 'setFamilyName',
        'middle_name' => 'setMiddleName',
        'company' => 'setCompany',
        'android_account_type_raw' => 'setAndroidAccountTypeRaw'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'birthday' => 'getBirthday',
        'identifier' => 'getIdentifier',
        'android_account_name' => 'getAndroidAccountName',
        'display_name' => 'getDisplayName',
        'prefix' => 'getPrefix',
        'given_name' => 'getGivenName',
        'job_title' => 'getJobTitle',
        'phones' => 'getPhones',
        'avatar' => 'getAvatar',
        'suffix' => 'getSuffix',
        'postal_addresses' => 'getPostalAddresses',
        'emails' => 'getEmails',
        'android_account_type' => 'getAndroidAccountType',
        'family_name' => 'getFamilyName',
        'middle_name' => 'getMiddleName',
        'company' => 'getCompany',
        'android_account_type_raw' => 'getAndroidAccountTypeRaw'
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
        $this->container['birthday'] = isset($data['birthday']) ? $data['birthday'] : null;
        $this->container['identifier'] = isset($data['identifier']) ? $data['identifier'] : null;
        $this->container['android_account_name'] = isset($data['android_account_name']) ? $data['android_account_name'] : null;
        $this->container['display_name'] = isset($data['display_name']) ? $data['display_name'] : null;
        $this->container['prefix'] = isset($data['prefix']) ? $data['prefix'] : null;
        $this->container['given_name'] = isset($data['given_name']) ? $data['given_name'] : null;
        $this->container['job_title'] = isset($data['job_title']) ? $data['job_title'] : null;
        $this->container['phones'] = isset($data['phones']) ? $data['phones'] : null;
        $this->container['avatar'] = isset($data['avatar']) ? $data['avatar'] : null;
        $this->container['suffix'] = isset($data['suffix']) ? $data['suffix'] : null;
        $this->container['postal_addresses'] = isset($data['postal_addresses']) ? $data['postal_addresses'] : null;
        $this->container['emails'] = isset($data['emails']) ? $data['emails'] : null;
        $this->container['android_account_type'] = isset($data['android_account_type']) ? $data['android_account_type'] : null;
        $this->container['family_name'] = isset($data['family_name']) ? $data['family_name'] : null;
        $this->container['middle_name'] = isset($data['middle_name']) ? $data['middle_name'] : null;
        $this->container['company'] = isset($data['company']) ? $data['company'] : null;
        $this->container['android_account_type_raw'] = isset($data['android_account_type_raw']) ? $data['android_account_type_raw'] : null;
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
     * Gets birthday
     *
     * @return string
     */
    public function getBirthday()
    {
        return $this->container['birthday'];
    }

    /**
     * Sets birthday
     *
     * @param string $birthday birthday
     *
     * @return $this
     */
    public function setBirthday($birthday)
    {
        $this->container['birthday'] = $birthday;

        return $this;
    }

    /**
     * Gets identifier
     *
     * @return string
     */
    public function getIdentifier()
    {
        return $this->container['identifier'];
    }

    /**
     * Sets identifier
     *
     * @param string $identifier identifier
     *
     * @return $this
     */
    public function setIdentifier($identifier)
    {
        $this->container['identifier'] = $identifier;

        return $this;
    }

    /**
     * Gets android_account_name
     *
     * @return string
     */
    public function getAndroidAccountName()
    {
        return $this->container['android_account_name'];
    }

    /**
     * Sets android_account_name
     *
     * @param string $android_account_name android_account_name
     *
     * @return $this
     */
    public function setAndroidAccountName($android_account_name)
    {
        $this->container['android_account_name'] = $android_account_name;

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
     * Gets prefix
     *
     * @return string
     */
    public function getPrefix()
    {
        return $this->container['prefix'];
    }

    /**
     * Sets prefix
     *
     * @param string $prefix prefix
     *
     * @return $this
     */
    public function setPrefix($prefix)
    {
        $this->container['prefix'] = $prefix;

        return $this;
    }

    /**
     * Gets given_name
     *
     * @return string
     */
    public function getGivenName()
    {
        return $this->container['given_name'];
    }

    /**
     * Sets given_name
     *
     * @param string $given_name given_name
     *
     * @return $this
     */
    public function setGivenName($given_name)
    {
        $this->container['given_name'] = $given_name;

        return $this;
    }

    /**
     * Gets job_title
     *
     * @return string
     */
    public function getJobTitle()
    {
        return $this->container['job_title'];
    }

    /**
     * Sets job_title
     *
     * @param string $job_title job_title
     *
     * @return $this
     */
    public function setJobTitle($job_title)
    {
        $this->container['job_title'] = $job_title;

        return $this;
    }

    /**
     * Gets phones
     *
     * @return \Swagger\Client\Model\SyncContactsRequestPhones[]
     */
    public function getPhones()
    {
        return $this->container['phones'];
    }

    /**
     * Sets phones
     *
     * @param \Swagger\Client\Model\SyncContactsRequestPhones[] $phones phones
     *
     * @return $this
     */
    public function setPhones($phones)
    {
        $this->container['phones'] = $phones;

        return $this;
    }

    /**
     * Gets avatar
     *
     * @return string
     */
    public function getAvatar()
    {
        return $this->container['avatar'];
    }

    /**
     * Sets avatar
     *
     * @param string $avatar avatar
     *
     * @return $this
     */
    public function setAvatar($avatar)
    {
        $this->container['avatar'] = $avatar;

        return $this;
    }

    /**
     * Gets suffix
     *
     * @return string
     */
    public function getSuffix()
    {
        return $this->container['suffix'];
    }

    /**
     * Sets suffix
     *
     * @param string $suffix suffix
     *
     * @return $this
     */
    public function setSuffix($suffix)
    {
        $this->container['suffix'] = $suffix;

        return $this;
    }

    /**
     * Gets postal_addresses
     *
     * @return \Swagger\Client\Model\SyncContactsRequestPostalAddresses[]
     */
    public function getPostalAddresses()
    {
        return $this->container['postal_addresses'];
    }

    /**
     * Sets postal_addresses
     *
     * @param \Swagger\Client\Model\SyncContactsRequestPostalAddresses[] $postal_addresses postal_addresses
     *
     * @return $this
     */
    public function setPostalAddresses($postal_addresses)
    {
        $this->container['postal_addresses'] = $postal_addresses;

        return $this;
    }

    /**
     * Gets emails
     *
     * @return \Swagger\Client\Model\SyncContactsRequestPhones[]
     */
    public function getEmails()
    {
        return $this->container['emails'];
    }

    /**
     * Sets emails
     *
     * @param \Swagger\Client\Model\SyncContactsRequestPhones[] $emails emails
     *
     * @return $this
     */
    public function setEmails($emails)
    {
        $this->container['emails'] = $emails;

        return $this;
    }

    /**
     * Gets android_account_type
     *
     * @return string
     */
    public function getAndroidAccountType()
    {
        return $this->container['android_account_type'];
    }

    /**
     * Sets android_account_type
     *
     * @param string $android_account_type android_account_type
     *
     * @return $this
     */
    public function setAndroidAccountType($android_account_type)
    {
        $this->container['android_account_type'] = $android_account_type;

        return $this;
    }

    /**
     * Gets family_name
     *
     * @return string
     */
    public function getFamilyName()
    {
        return $this->container['family_name'];
    }

    /**
     * Sets family_name
     *
     * @param string $family_name family_name
     *
     * @return $this
     */
    public function setFamilyName($family_name)
    {
        $this->container['family_name'] = $family_name;

        return $this;
    }

    /**
     * Gets middle_name
     *
     * @return string
     */
    public function getMiddleName()
    {
        return $this->container['middle_name'];
    }

    /**
     * Sets middle_name
     *
     * @param string $middle_name middle_name
     *
     * @return $this
     */
    public function setMiddleName($middle_name)
    {
        $this->container['middle_name'] = $middle_name;

        return $this;
    }

    /**
     * Gets company
     *
     * @return string
     */
    public function getCompany()
    {
        return $this->container['company'];
    }

    /**
     * Sets company
     *
     * @param string $company company
     *
     * @return $this
     */
    public function setCompany($company)
    {
        $this->container['company'] = $company;

        return $this;
    }

    /**
     * Gets android_account_type_raw
     *
     * @return string
     */
    public function getAndroidAccountTypeRaw()
    {
        return $this->container['android_account_type_raw'];
    }

    /**
     * Sets android_account_type_raw
     *
     * @param string $android_account_type_raw android_account_type_raw
     *
     * @return $this
     */
    public function setAndroidAccountTypeRaw($android_account_type_raw)
    {
        $this->container['android_account_type_raw'] = $android_account_type_raw;

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

