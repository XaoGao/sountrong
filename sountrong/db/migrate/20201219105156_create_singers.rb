class CreateSingers < ActiveRecord::Migration[6.0]
  def change
    create_table :singers do |t|
      t.string :name, default: '', null: false
      t.text :description, default: ''
      t.boolean :lock, defualt: false, null: false
      t.date :carier_start, null: false
      t.date :end_of_carier

      t.timestamps
    end
  end
end
