class Api::V1::RegistrationController < ApplicationController
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

  private

  def user_params
    params.require(:registration).permit(:first_name, :last_name, :username, :password)
  end
end
