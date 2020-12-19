class AddCountSongToAlbum < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :count_song, :integer, default: 0, null: false
  end
end
