


json.extract! @user, :username, :id, :email, :created_at


#iterate through the user's chats
json.chats  @user.chats do |chat|

    #extract the chat's body, author_id and created at
    json.extract! chat, :body, :author_id, :created_at, :imagepath

    # find the user the chat belogns to and extract the username
    json.extract! chat.user, :username
end

# iterate through user's likes
json.likes @user.likes do |like|

    # find the liked chat and extract the body
    json.extract! like.chat, :body, :imagepath

    # find the liked chat and the user that the chat belongs to
    # extract the username
    json.extract! like.chat.user, :username
end


