
  json.array! @chats do |chat|
    json.partial! 'chat', chat: chat, user: chat.user
      json.likedby do
        json.array! chat.likes do |like|
          json.extract! like.user, :username
        end
      end
  end

