class ApplicationController < ActionController::API
  def auth_header_request
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header_request
      begin
        Authorize::WebToken.decode auth_header_request.split(' ')[1]
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def user_from_token
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @current_user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!user_from_token
  end

  def authorized
    render json: { error: 'Пользователь должен авторизоваться' }, status: :unauthorized unless logged_in?
  end
end
