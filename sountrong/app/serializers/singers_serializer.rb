class SingersSerializer
  include JSONAPI::Serializer
  include Rails.application.routes.url_helpers

  set_key_transform :camel_lower
  attributes :name, :count_of_albums

  attribute :main_image do |object|
    Rails.application.routes.url_helpers.rails_blob_path(object.main_image, only_path: true) if object.main_image.attached?
  end
end
