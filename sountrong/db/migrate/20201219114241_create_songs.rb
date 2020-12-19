class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :name, default: '', null: false
      t.references :album
      
      t.timestamps
    end
  end
end
