=begin
#newgraph-api-eu-dev

#No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: 2022-10-04T15:34:01Z

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.27

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SwaggerClient::UserTransferRequest
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'UserTransferRequest' do
  before do
    # run before each test
    @instance = SwaggerClient::UserTransferRequest.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of UserTransferRequest' do
    it 'should create an instance of UserTransferRequest' do
      expect(@instance).to be_instance_of(SwaggerClient::UserTransferRequest)
    end
  end
  describe 'test attribute "encrypted_payload"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "payload"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end