json.extract! @user, :username, :id

json.chats  @user.chats, :body, :author_id, :imagepath

