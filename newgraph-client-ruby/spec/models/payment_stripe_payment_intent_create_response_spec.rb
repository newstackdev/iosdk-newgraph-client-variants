=begin
#newlife-creator-api-eu-dev

#No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: 2022-05-20T13:39:48Z

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.27

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for SwaggerClient::PaymentStripePaymentIntentCreateResponse
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'PaymentStripePaymentIntentCreateResponse' do
  before do
    # run before each test
    @instance = SwaggerClient::PaymentStripePaymentIntentCreateResponse.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of PaymentStripePaymentIntentCreateResponse' do
    it 'should create an instance of PaymentStripePaymentIntentCreateResponse' do
      expect(@instance).to be_instance_of(SwaggerClient::PaymentStripePaymentIntentCreateResponse)
    end
  end
  describe 'test attribute "client_secret"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end