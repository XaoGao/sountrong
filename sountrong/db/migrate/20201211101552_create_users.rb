class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name, default: '', null: false
      t.string :last_name, default: '', null: false
      t.string :username, default: '', null: false

      t.string :password_digest, default: '', null: false

      t.boolean :lock, default: false, null: false

      t.references :role
      t.timestamps
    end
  end
end
