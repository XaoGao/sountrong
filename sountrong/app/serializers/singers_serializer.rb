class SingersSerializer
  include JSONAPI::Serializer
  set_key_transform :camel_lower
  attributes :name, :count_of_albums
end
