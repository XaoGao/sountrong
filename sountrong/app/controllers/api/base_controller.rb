class Api::BaseController < ApplicationController
  before_action :snake_case_params

  def render_bad_request(message)
    render json: { error: message }, status: :bad_request
  end

  def render_no_content
    render json: {}, status: :no_content
  end

  def render_unauthorized(message = '')
    render json: { error: message }, status: :unauthorized
  end

  private

  def snake_case_params
    request.parameters.deep_transform_keys!(&:underscore)
  end
end
