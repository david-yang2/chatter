
json.extract! @user, :username, :id, :email


json.chats  @user.chats, :body, :author_id
