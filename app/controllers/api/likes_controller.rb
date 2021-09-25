class Api::LikesController < ApplicationController

    def index
        @likes = Like.all
        render :index
    end

    def create

        @like = Like.new(like_params)

        if @like.save!
            render :index
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def userLiked
        @user = User.find(current_user.id)
        @likes = @user.likes.order(created_at: :desc)
        render :userLiked
    end
    
    private

    def like_params
        params.require(:like).permit(:user_id, :chat_id, :created_at)
    end
end