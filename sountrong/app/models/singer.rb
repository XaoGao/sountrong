class Singer < ApplicationRecord
  has_many :albums
  has_one_attached :main_image

  validates :name, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 250 }
  validates :carier_start, presence: true
  validates :description, length: { maximum: 1000 }
  # validate :acceptable_image

  scope :all_active, -> { where(lock: false) }

  def acceptable_image
    return unless main_image.attached?

    errors.add(:main_image, 'is too big') unless main_image.byte_size <= 1.megabyte

    acceptable_types = ['image/jpeg', 'image/png']
    errors.add(:main_image, 'must be a JPEG or PNG') unless acceptable_types.include?(main_image.content_type)
  end
end
