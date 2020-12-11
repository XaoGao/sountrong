# frozen_string_literal: true

# module Authorize
module Authorize
  # Static class for create jwt token and decode jwt token
  class WebToken
    SECRET_KEY = Rails.application.secret_key_base

    # Create jwt token.
    #
    # payload   - Hash - information witch you want to put in jwt token
    #             must include user_id, role
    # exp_token - An optional param whtch set time life token
    #             default value 20 hours
    #
    # Example
    #
    #   WebToken.encode({"sub": "1234567890", "name": "John Doe", "iat": 1516239022}, 10)
    #   Result = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    #
    # Return jwt token in String format
    def self.encode(payload, exp_token = 20.hour.from_now)
      payload[:exp] = exp_token.to_i
      JWT.encode(payload, SECRET_KEY, 'HS256')
    end

    # Decode json web token.
    #
    # token - Not null String, present jwt
    #
    # Example
    #
    #   WebToken.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
    #   Result = {"sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
    #
    # Return Hash witch include information from token
    def self.decode(token)
      JWT.decode(token, SECRET_KEY, true, { algorithm: 'HS256' })
    end
  end
end
