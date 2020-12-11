# frozen_string_literal: true

# model role
class Role < ApplicationRecord
  has_many :users

  validates :name, presence: true, uniqueness: { case_sensitive: false }, length: { in: 3..50 }
end
