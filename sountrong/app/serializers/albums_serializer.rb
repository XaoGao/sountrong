class AlbumsSerializer
  include JSONAPI::Serializer
  set_key_transform :camel_lower

  attributes :title, :year_of_issue, :count_song, :record_label
end
