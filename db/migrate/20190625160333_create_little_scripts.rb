class CreateLittleScripts < ActiveRecord::Migration[5.2]
  def change
    create_table :little_scripts do |t|
      t.string :name, unique: true, null: false, default: " "
      t.string :user_id, null: false
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
