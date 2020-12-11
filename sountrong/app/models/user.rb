# frozen_string_literal: true

# model user
class User < ApplicationRecord
  has_secure_password
  belongs_to :role

  validates :first_name, presence: true, length: { maximum: 50 }
  validates :last_name,  presence: true, length: { maximum: 50 }
  validates :username, uniqueness: true, presence: true, length: { maximum: 50 }

  # before_save :set_role

  # def set_role
  #   self.role_id = Role.find_by(name: 'user').id if role_id.nil?
  # end
end
