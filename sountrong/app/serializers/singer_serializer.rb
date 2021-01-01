class SingerSerializer
  include JSONAPI::Serializer

  set_key_transform :camel_lower
  attributes :name, :description, :carier_start, :end_of_carier, :count_of_albums

  attribute :albums do |object|
    AlbumsSerializer.new(object.albums)
  end
end
