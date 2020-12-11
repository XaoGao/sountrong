# frozen_string_literal: true

# module Authorize
module Authorize
  class AuthorizeServices
    # def authorized
    #   return json: { error: 'Пользователь не авторизован' }, status: :unauthorized unless logged_in?
    # end

    # private

    # def logged_in?
    #   !!logged_user
    # end

    # def logged_use
      
    # end

    # def decoded_token(request_header)
    #   if request_header
    #     token = request_header.split(' ')[1]
    #     begin
    #       WebToken.decode token
    #     rescue JWT::DecodeError
    #       nil
    #     end
    #   end
    # end

    # def logged_user
    #   if decoded_token
    #     user_id = decded_token[0]['user_id']
    #     @current_user = User.find_by(id: user_id)
    #   end
    # end
    
  end
end
