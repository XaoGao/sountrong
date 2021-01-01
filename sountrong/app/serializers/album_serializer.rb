class AlbumSerializer
  include JSONAPI::Serializer
  set_key_transform :camel_lower
  attributes :title, :description, :year_of_issue, :language, :country, :duration, :label_record, :count_song
end
