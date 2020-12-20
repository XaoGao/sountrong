class Singer < ApplicationRecord
  has_many :albums
  has_one_attached :main_image

  validates :name, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 250 }
  validates :carier_start, presence: true
  validates :description, length: { maximum: 1000 }

  scope :all_active, -> { where(lock: false) }

  # def acceptable_image
  #   return unless main_image.attached?
  
  #   unless main_image.byte_size <= 1.megabyte
  #     errors.add(:main_image, "is too big")
  #   end
  
  #   acceptable_types = ["image/jpeg", "image/png"]
  #   unless acceptable_types.include?(main_image.content_type)
  #     errors.add(:main_image, "must be a JPEG or PNG")
  #   end
  # end
end
