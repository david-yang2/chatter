
  json.array! @chats do |chat|
    json.partial! 'chat', chat: chat, user: chat.user
  end

