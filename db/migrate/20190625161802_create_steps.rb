class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :name, null: false, default: " "
      t.integer :duration, default: 60
      t.integer :little_script_id
      t.references :little_script, foreign_key: true

      t.timestamps
    end
  end
end
