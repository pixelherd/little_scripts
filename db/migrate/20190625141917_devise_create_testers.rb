# frozen_string_literal: true

class DeviseCreateTesters < ActiveRecord::Migration[5.2]
  def change
    create_table :testers do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at
      t.timestamps null: false
    end

    add_index :testers, :email,                unique: true
    add_index :testers, :reset_password_token, unique: true
  end
end
