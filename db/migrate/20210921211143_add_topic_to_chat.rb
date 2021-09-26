class AddTopicToChat < ActiveRecord::Migration[5.2]
  def change
    add_column :chats, :topic, :string
  end
end
