json.array! @likes do |like|
    json.extract! like, :user_id, :chat_id
    json.extract! like.chat.user, :username
end