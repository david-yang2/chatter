class Like < ApplicationRecord

    # who like this chat?

    # this like belongs to the chat
    belongs_to :chat,
      primary_key: :id,         # Chat's id
      foreign_key: :chat_id,    # from Like's table,     chat_id = chat.id
      class_name: :Chat

    # the like was from this user id
    belongs_to :user,
      primary_key: :id,         # User's id
      foreign_key: :user_id,    # from Like's table,       user_id = user.id
      class_name: :User
  end
  