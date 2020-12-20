class SingersSerializer
  include JSONAPI::Serializer
  attributes :name, :count_of_albums
end
