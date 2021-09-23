class Api::LikesController < ApplicationController

    def index
        @likes = Like.all
        render :index
    end

    def create

        @like = Like.create(like_params)

        if @like.save!
            render :index
        end
            render json: @@like.errors.full_messages, status: 422
        end

    def userLiked
        @user = User.find(current_user.id)
        @likes = @user.likes
        render :userLiked
    end
    


    private

    def like_params
        params.require(:like).permit(:user_id, :chat_id)
    end
end