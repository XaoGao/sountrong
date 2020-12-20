class SingerSerializer
  include JSONAPI::Serializer
  set_key_transform :camel
  attributes :name, :description, :carier_start, :end_of_carier, :count_of_albums
end
