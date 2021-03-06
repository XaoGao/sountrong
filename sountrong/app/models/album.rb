class Album < ApplicationRecord
  belongs_to :singer, counter_cache: :count_of_albums
  has_many :songs
  has_one_attached :main_image

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
