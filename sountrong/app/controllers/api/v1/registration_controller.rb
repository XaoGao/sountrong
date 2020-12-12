# frozen_string_literal: true

# RegistrationController
class Api::V1::RegistrationController < ApplicationController
  before_action :authorized, only: ['update']
  def create
    @user = User.new user_params

    default_role = Role.find_by(name: 'user')
    if default_role.present?
      @user.role = default_role
    else
      render json: { error: 'Системная ошибка в ходе создания пользователя' }, status: :bad_request
    end

    if @user.save
      render json: { message: 'Успешно зарегистрировались' }, status: :ok
    else
      render json: { error: "Ошибка регистриации пользователя, errors: #{@user.errors.full_messages}" }, status: :bad_request
    end
  end

  def update
    @user = User.find_by(username: params[:username])
    return render json: { error: 'Не найден пользователь' }, status: :bad_request if @user.blank?

    @current_user.attributes = user_params
    @current_user.skip_password = true

    if @current_user.save
      render json: { message: 'Профиль пользователя обновлен' }, status: :ok
    else
      render json: { error: "Ошибка при обновлении пользователя, errors: #{@user.errors.full_messages}" }, status: :bad_request
    end
  end

  private

  def user_params
    params.require(:registration).permit(:first_name, :last_name, :username, :password)
  end
end
