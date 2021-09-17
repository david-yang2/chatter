@chats.each do |chat|
  json.set! chat.id do
    json.partial! 'chat', chat: chat
  end
end
