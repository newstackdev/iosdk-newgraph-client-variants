<?php
/**
 * BcDaoProposalExecuteRequest
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
 * BcDaoProposalExecuteRequest Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class BcDaoProposalExecuteRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'BcDaoProposalExecuteRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'proposal_author' => 'string',
        'proposal_id' => 'float',
        'dao_id' => 'string',
        'dao_owner' => 'string',
        'exec' => 'string',
        'exec_prv_key' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'proposal_author' => null,
        'proposal_id' => null,
        'dao_id' => null,
        'dao_owner' => null,
        'exec' => null,
        'exec_prv_key' => null
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
        'proposal_author' => 'proposal_author',
        'proposal_id' => 'proposal_id',
        'dao_id' => 'dao_id',
        'dao_owner' => 'dao_owner',
        'exec' => 'exec',
        'exec_prv_key' => 'exec_prv_key'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'proposal_author' => 'setProposalAuthor',
        'proposal_id' => 'setProposalId',
        'dao_id' => 'setDaoId',
        'dao_owner' => 'setDaoOwner',
        'exec' => 'setExec',
        'exec_prv_key' => 'setExecPrvKey'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'proposal_author' => 'getProposalAuthor',
        'proposal_id' => 'getProposalId',
        'dao_id' => 'getDaoId',
        'dao_owner' => 'getDaoOwner',
        'exec' => 'getExec',
        'exec_prv_key' => 'getExecPrvKey'
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
        $this->container['proposal_author'] = isset($data['proposal_author']) ? $data['proposal_author'] : null;
        $this->container['proposal_id'] = isset($data['proposal_id']) ? $data['proposal_id'] : null;
        $this->container['dao_id'] = isset($data['dao_id']) ? $data['dao_id'] : null;
        $this->container['dao_owner'] = isset($data['dao_owner']) ? $data['dao_owner'] : null;
        $this->container['exec'] = isset($data['exec']) ? $data['exec'] : null;
        $this->container['exec_prv_key'] = isset($data['exec_prv_key']) ? $data['exec_prv_key'] : null;
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
     * Gets proposal_author
     *
     * @return string
     */
    public function getProposalAuthor()
    {
        return $this->container['proposal_author'];
    }

    /**
     * Sets proposal_author
     *
     * @param string $proposal_author proposal_author
     *
     * @return $this
     */
    public function setProposalAuthor($proposal_author)
    {
        $this->container['proposal_author'] = $proposal_author;

        return $this;
    }

    /**
     * Gets proposal_id
     *
     * @return float
     */
    public function getProposalId()
    {
        return $this->container['proposal_id'];
    }

    /**
     * Sets proposal_id
     *
     * @param float $proposal_id proposal_id
     *
     * @return $this
     */
    public function setProposalId($proposal_id)
    {
        $this->container['proposal_id'] = $proposal_id;

        return $this;
    }

    /**
     * Gets dao_id
     *
     * @return string
     */
    public function getDaoId()
    {
        return $this->container['dao_id'];
    }

    /**
     * Sets dao_id
     *
     * @param string $dao_id dao_id
     *
     * @return $this
     */
    public function setDaoId($dao_id)
    {
        $this->container['dao_id'] = $dao_id;

        return $this;
    }

    /**
     * Gets dao_owner
     *
     * @return string
     */
    public function getDaoOwner()
    {
        return $this->container['dao_owner'];
    }

    /**
     * Sets dao_owner
     *
     * @param string $dao_owner dao_owner
     *
     * @return $this
     */
    public function setDaoOwner($dao_owner)
    {
        $this->container['dao_owner'] = $dao_owner;

        return $this;
    }

    /**
     * Gets exec
     *
     * @return string
     */
    public function getExec()
    {
        return $this->container['exec'];
    }

    /**
     * Sets exec
     *
     * @param string $exec exec
     *
     * @return $this
     */
    public function setExec($exec)
    {
        $this->container['exec'] = $exec;

        return $this;
    }

    /**
     * Gets exec_prv_key
     *
     * @return string
     */
    public function getExecPrvKey()
    {
        return $this->container['exec_prv_key'];
    }

    /**
     * Sets exec_prv_key
     *
     * @param string $exec_prv_key exec_prv_key
     *
     * @return $this
     */
    public function setExecPrvKey($exec_prv_key)
    {
        $this->container['exec_prv_key'] = $exec_prv_key;

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


