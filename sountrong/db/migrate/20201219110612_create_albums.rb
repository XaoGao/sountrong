class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.string :title, default: '', null: false
      t.text :description
      t.date :year_of_issue, null: false
      t.references :singer

      t.timestamps
    end
  end
end
