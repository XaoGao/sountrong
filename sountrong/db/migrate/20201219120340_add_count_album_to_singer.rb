class AddCountAlbumToSinger < ActiveRecord::Migration[6.0]
  def change
    add_column :singers, :count_of_albums, :integer, null: false, default: 0
    remove_column :singers, :lock
    add_column :singers, :lock, :boolean, default: false, null: false
  end
end
