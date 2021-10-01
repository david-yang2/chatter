class AddImagePathToChats < ActiveRecord::Migration[5.2]
  def change
    add_column :chats, :imagepath, :string
  end
end
