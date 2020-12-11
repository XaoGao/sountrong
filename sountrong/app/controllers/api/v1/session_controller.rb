class Api::V1::SessionController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    render json: { error: 'Не найден пользователь с указаным username' }, status: :bad_request if user.blank?

    if user.authenticate(params[:password])
      payload = { user_id: user.id, role: user.role.name }
      token = Authorize::WebToken.encode payload
      render json: { token: token }, status: :ok
    else
      render json: { error: 'Не правильный пароль' }, status: :unauthorized
    end
  end
end
