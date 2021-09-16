class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :chats, :author_id
  end
end
