class Chat < ApplicationRecord
    validates :body, presence: true
    validate :chat_too_long

    # belongs to an user
    belongs_to :user,
      primary_key: :id,         # User's id
      foreign_key: :author_id,  # from Chat's table, auther_id = user.id
      class_name: :User

    # has many likes
    has_many :likes, 
      primary_key: :id,           # chat's id
      foreign_key: :chat_id,      # from Like's table, chat_id = chat.id
      class_name: :Like           
    
    # make sure hars for body are not be greater than 140
    # current cap for tweets
    def chat_too_long
      if body.length > 280
        errors[:body] << "too long"
      end
    end
  end
  