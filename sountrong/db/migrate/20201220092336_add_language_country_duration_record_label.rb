class AddLanguageCountryDurationRecordLabel < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :language, :string, default: '', null: false
    add_column :albums, :country, :string, default: '', null: false
    add_column :albums, :duration, :string, default: '', null: false
    add_column :albums, :record_label, :string, default: '', null: false
  end
end
