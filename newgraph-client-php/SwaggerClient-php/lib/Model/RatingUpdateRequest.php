<?php
/**
 * RatingUpdateRequest
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
 * OpenAPI spec version: 2022-06-09T06:13:03Z
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
 * RatingUpdateRequest Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class RatingUpdateRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'RatingUpdateRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'target_id' => 'string',
        'context_type' => 'string',
        'context_value' => 'string',
        'value' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'target_id' => null,
        'context_type' => null,
        'context_value' => null,
        'value' => null
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
        'target_id' => 'targetId',
        'context_type' => 'contextType',
        'context_value' => 'contextValue',
        'value' => 'value'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'target_id' => 'setTargetId',
        'context_type' => 'setContextType',
        'context_value' => 'setContextValue',
        'value' => 'setValue'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'target_id' => 'getTargetId',
        'context_type' => 'getContextType',
        'context_value' => 'getContextValue',
        'value' => 'getValue'
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
        $this->container['target_id'] = isset($data['target_id']) ? $data['target_id'] : null;
        $this->container['context_type'] = isset($data['context_type']) ? $data['context_type'] : null;
        $this->container['context_value'] = isset($data['context_value']) ? $data['context_value'] : null;
        $this->container['value'] = isset($data['value']) ? $data['value'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['value'] === null) {
            $invalidProperties[] = "'value' can't be null";
        }
        if (($this->container['value'] > 100)) {
            $invalidProperties[] = "invalid value for 'value', must be smaller than or equal to 100.";
        }

        if (($this->container['value'] < 0)) {
            $invalidProperties[] = "invalid value for 'value', must be bigger than or equal to 0.";
        }

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
     * Gets target_id
     *
     * @return string
     */
    public function getTargetId()
    {
        return $this->container['target_id'];
    }

    /**
     * Sets target_id
     *
     * @param string $target_id target_id
     *
     * @return $this
     */
    public function setTargetId($target_id)
    {
        $this->container['target_id'] = $target_id;

        return $this;
    }

    /**
     * Gets context_type
     *
     * @return string
     */
    public function getContextType()
    {
        return $this->container['context_type'];
    }

    /**
     * Sets context_type
     *
     * @param string $context_type context_type
     *
     * @return $this
     */
    public function setContextType($context_type)
    {
        $this->container['context_type'] = $context_type;

        return $this;
    }

    /**
     * Gets context_value
     *
     * @return string
     */
    public function getContextValue()
    {
        return $this->container['context_value'];
    }

    /**
     * Sets context_value
     *
     * @param string $context_value context_value
     *
     * @return $this
     */
    public function setContextValue($context_value)
    {
        $this->container['context_value'] = $context_value;

        return $this;
    }

    /**
     * Gets value
     *
     * @return float
     */
    public function getValue()
    {
        return $this->container['value'];
    }

    /**
     * Sets value
     *
     * @param float $value value
     *
     * @return $this
     */
    public function setValue($value)
    {

        if (($value > 100)) {
            throw new \InvalidArgumentException('invalid value for $value when calling RatingUpdateRequest., must be smaller than or equal to 100.');
        }
        if (($value < 0)) {
            throw new \InvalidArgumentException('invalid value for $value when calling RatingUpdateRequest., must be bigger than or equal to 0.');
        }

        $this->container['value'] = $value;

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


