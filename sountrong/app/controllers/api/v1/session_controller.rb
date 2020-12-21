# frozen_string_literal: true

# SessionController
class Api::V1::SessionController < Api::BaseController
  def create
    user = User.find_by(username: params[:username])
    render_bad_request 'Не найден пользователь с указаным username' and return if user.blank?

    if user.authenticate(params[:password])
      payload = { user_id: user.id, username: user.username, role: user.role.name }
      token = Authorize::WebToken.encode payload
      render json: { token: token }, status: :ok
    else
      render_unauthorized 'Не правильный пароль'
    end
  end
end
