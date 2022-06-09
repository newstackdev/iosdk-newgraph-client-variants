=begin
#newlife-creator-api-eu-dev

#No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: 2022-06-09T06:13:03Z

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.27

=end

require 'date'

module SwaggerClient
  class PostCreateResponse
    attr_accessor :cover_content_url

    attr_accessor :mood_id

    attr_accessor :created

    attr_accessor :author

    attr_accessor :latitude

    attr_accessor :moods

    attr_accessor :description

    attr_accessor :aspect_ratio

    attr_accessor :title

    attr_accessor :content

    attr_accessor :tags

    attr_accessor :license

    attr_accessor :content_url

    attr_accessor :blur_hash

    attr_accessor :newcoin_mint_tx

    attr_accessor :id

    attr_accessor :embed

    attr_accessor :updated

    attr_accessor :content_type

    attr_accessor :longitude

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'cover_content_url' => :'coverContentUrl',
        :'mood_id' => :'moodId',
        :'created' => :'created',
        :'author' => :'author',
        :'latitude' => :'latitude',
        :'moods' => :'moods',
        :'description' => :'description',
        :'aspect_ratio' => :'aspectRatio',
        :'title' => :'title',
        :'content' => :'content',
        :'tags' => :'tags',
        :'license' => :'license',
        :'content_url' => :'contentUrl',
        :'blur_hash' => :'blurHash',
        :'newcoin_mint_tx' => :'newcoinMintTx',
        :'id' => :'id',
        :'embed' => :'embed',
        :'updated' => :'updated',
        :'content_type' => :'contentType',
        :'longitude' => :'longitude'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'cover_content_url' => :'String',
        :'mood_id' => :'String',
        :'created' => :'String',
        :'author' => :'PostCreateResponseAuthor',
        :'latitude' => :'Float',
        :'moods' => :'Array<PostCreateResponseMoods>',
        :'description' => :'String',
        :'aspect_ratio' => :'Float',
        :'title' => :'String',
        :'content' => :'String',
        :'tags' => :'Array<MoodPagedListReadPublicResponseTags>',
        :'license' => :'String',
        :'content_url' => :'String',
        :'blur_hash' => :'String',
        :'newcoin_mint_tx' => :'String',
        :'id' => :'String',
        :'embed' => :'String',
        :'updated' => :'String',
        :'content_type' => :'String',
        :'longitude' => :'Float'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'coverContentUrl')
        self.cover_content_url = attributes[:'coverContentUrl']
      end

      if attributes.has_key?(:'moodId')
        self.mood_id = attributes[:'moodId']
      end

      if attributes.has_key?(:'created')
        self.created = attributes[:'created']
      end

      if attributes.has_key?(:'author')
        self.author = attributes[:'author']
      end

      if attributes.has_key?(:'latitude')
        self.latitude = attributes[:'latitude']
      end

      if attributes.has_key?(:'moods')
        if (value = attributes[:'moods']).is_a?(Array)
          self.moods = value
        end
      end

      if attributes.has_key?(:'description')
        self.description = attributes[:'description']
      end

      if attributes.has_key?(:'aspectRatio')
        self.aspect_ratio = attributes[:'aspectRatio']
      end

      if attributes.has_key?(:'title')
        self.title = attributes[:'title']
      end

      if attributes.has_key?(:'content')
        self.content = attributes[:'content']
      end

      if attributes.has_key?(:'tags')
        if (value = attributes[:'tags']).is_a?(Array)
          self.tags = value
        end
      end

      if attributes.has_key?(:'license')
        self.license = attributes[:'license']
      end

      if attributes.has_key?(:'contentUrl')
        self.content_url = attributes[:'contentUrl']
      end

      if attributes.has_key?(:'blurHash')
        self.blur_hash = attributes[:'blurHash']
      end

      if attributes.has_key?(:'newcoinMintTx')
        self.newcoin_mint_tx = attributes[:'newcoinMintTx']
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'embed')
        self.embed = attributes[:'embed']
      end

      if attributes.has_key?(:'updated')
        self.updated = attributes[:'updated']
      end

      if attributes.has_key?(:'contentType')
        self.content_type = attributes[:'contentType']
      end

      if attributes.has_key?(:'longitude')
        self.longitude = attributes[:'longitude']
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
          cover_content_url == o.cover_content_url &&
          mood_id == o.mood_id &&
          created == o.created &&
          author == o.author &&
          latitude == o.latitude &&
          moods == o.moods &&
          description == o.description &&
          aspect_ratio == o.aspect_ratio &&
          title == o.title &&
          content == o.content &&
          tags == o.tags &&
          license == o.license &&
          content_url == o.content_url &&
          blur_hash == o.blur_hash &&
          newcoin_mint_tx == o.newcoin_mint_tx &&
          id == o.id &&
          embed == o.embed &&
          updated == o.updated &&
          content_type == o.content_type &&
          longitude == o.longitude
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [cover_content_url, mood_id, created, author, latitude, moods, description, aspect_ratio, title, content, tags, license, content_url, blur_hash, newcoin_mint_tx, id, embed, updated, content_type, longitude].hash
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
