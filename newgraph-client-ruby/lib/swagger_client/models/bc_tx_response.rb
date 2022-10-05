=begin
#newgraph-api-eu-dev

#No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: 2022-10-04T15:34:01Z

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.27

=end

require 'date'

module SwaggerClient
  class BcTxResponse
    attr_accessor :tx_id_create_tpl

    attr_accessor :tx_id_create_pool

    attr_accessor :tx_id_create_acc

    attr_accessor :tx_id_create_col

    attr_accessor :tx_id_create_sch

    attr_accessor :tx_id_stake_to_pool

    attr_accessor :tx_id_mint_asset

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'tx_id_create_tpl' => :'TxID_createTpl',
        :'tx_id_create_pool' => :'TxID_createPool',
        :'tx_id_create_acc' => :'TxID_createAcc',
        :'tx_id_create_col' => :'TxID_createCol',
        :'tx_id_create_sch' => :'TxID_createSch',
        :'tx_id_stake_to_pool' => :'TxID_stakeToPool',
        :'tx_id_mint_asset' => :'TxID_mintAsset'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'tx_id_create_tpl' => :'String',
        :'tx_id_create_pool' => :'String',
        :'tx_id_create_acc' => :'String',
        :'tx_id_create_col' => :'String',
        :'tx_id_create_sch' => :'String',
        :'tx_id_stake_to_pool' => :'String',
        :'tx_id_mint_asset' => :'String'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'TxID_createTpl')
        self.tx_id_create_tpl = attributes[:'TxID_createTpl']
      end

      if attributes.has_key?(:'TxID_createPool')
        self.tx_id_create_pool = attributes[:'TxID_createPool']
      end

      if attributes.has_key?(:'TxID_createAcc')
        self.tx_id_create_acc = attributes[:'TxID_createAcc']
      end

      if attributes.has_key?(:'TxID_createCol')
        self.tx_id_create_col = attributes[:'TxID_createCol']
      end

      if attributes.has_key?(:'TxID_createSch')
        self.tx_id_create_sch = attributes[:'TxID_createSch']
      end

      if attributes.has_key?(:'TxID_stakeToPool')
        self.tx_id_stake_to_pool = attributes[:'TxID_stakeToPool']
      end

      if attributes.has_key?(:'TxID_mintAsset')
        self.tx_id_mint_asset = attributes[:'TxID_mintAsset']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          tx_id_create_tpl == o.tx_id_create_tpl &&
          tx_id_create_pool == o.tx_id_create_pool &&
          tx_id_create_acc == o.tx_id_create_acc &&
          tx_id_create_col == o.tx_id_create_col &&
          tx_id_create_sch == o.tx_id_create_sch &&
          tx_id_stake_to_pool == o.tx_id_stake_to_pool &&
          tx_id_mint_asset == o.tx_id_mint_asset
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [tx_id_create_tpl, tx_id_create_pool, tx_id_create_acc, tx_id_create_col, tx_id_create_sch, tx_id_stake_to_pool, tx_id_mint_asset].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.swagger_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end # or else data not found in attributes(hash), not an issue as the data can be optional
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :DateTime
        DateTime.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :BOOLEAN
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        temp_model = SwaggerClient.const_get(type).new
        temp_model.build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        next if value.nil?
        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end
end
