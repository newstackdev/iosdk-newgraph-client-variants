=begin
#newlife-creator-api-eu-dev

#No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: 2022-05-20T13:39:48Z

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.27

=end

require 'date'

module SwaggerClient
  class BcListDaoProposalsResponseRows
    attr_accessor :summary

    attr_accessor :proposer

    attr_accessor :vote_start

    attr_accessor :more

    attr_accessor :next_key

    attr_accessor :vote_end

    attr_accessor :id

    attr_accessor :title

    attr_accessor :vote_no

    attr_accessor :url

    attr_accessor :vote_yes

    attr_accessor :status

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'summary' => :'summary',
        :'proposer' => :'proposer',
        :'vote_start' => :'vote_start',
        :'more' => :'more',
        :'next_key' => :'next_key',
        :'vote_end' => :'vote_end',
        :'id' => :'id',
        :'title' => :'title',
        :'vote_no' => :'vote_no',
        :'url' => :'url',
        :'vote_yes' => :'vote_yes',
        :'status' => :'status'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'summary' => :'String',
        :'proposer' => :'String',
        :'vote_start' => :'String',
        :'more' => :'Object',
        :'next_key' => :'String',
        :'vote_end' => :'String',
        :'id' => :'Float',
        :'title' => :'String',
        :'vote_no' => :'BcListDaoProposalsResponseVoteNo',
        :'url' => :'String',
        :'vote_yes' => :'BcListDaoProposalsResponseVoteNo',
        :'status' => :'String'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'summary')
        self.summary = attributes[:'summary']
      end

      if attributes.has_key?(:'proposer')
        self.proposer = attributes[:'proposer']
      end

      if attributes.has_key?(:'vote_start')
        self.vote_start = attributes[:'vote_start']
      end

      if attributes.has_key?(:'more')
        self.more = attributes[:'more']
      end

      if attributes.has_key?(:'next_key')
        self.next_key = attributes[:'next_key']
      end

      if attributes.has_key?(:'vote_end')
        self.vote_end = attributes[:'vote_end']
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'title')
        self.title = attributes[:'title']
      end

      if attributes.has_key?(:'vote_no')
        self.vote_no = attributes[:'vote_no']
      end

      if attributes.has_key?(:'url')
        self.url = attributes[:'url']
      end

      if attributes.has_key?(:'vote_yes')
        self.vote_yes = attributes[:'vote_yes']
      end

      if attributes.has_key?(:'status')
        self.status = attributes[:'status']
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
          summary == o.summary &&
          proposer == o.proposer &&
          vote_start == o.vote_start &&
          more == o.more &&
          next_key == o.next_key &&
          vote_end == o.vote_end &&
          id == o.id &&
          title == o.title &&
          vote_no == o.vote_no &&
          url == o.url &&
          vote_yes == o.vote_yes &&
          status == o.status
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [summary, proposer, vote_start, more, next_key, vote_end, id, title, vote_no, url, vote_yes, status].hash
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