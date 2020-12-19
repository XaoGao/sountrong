class Song < ApplicationRecord
  belongs_to :album, counter_cache: :count_song
end
