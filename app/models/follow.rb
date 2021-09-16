class Follow < ApplicationRecord

    #who is following the user
    belongs_to :follower,
      primary_key: :id,
      foreign_key: :follower_id,
      class_name: :User
    
    #who is the user following
    belongs_to :followee,
      primary_key: :id,
      foreign_key: :followee_id,
      class_name: :User
  end