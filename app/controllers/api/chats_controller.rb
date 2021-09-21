class Api::ChatsController < ApplicationController

    def index
        @chats = Chat.includes(:user).order(created_at: :desc)

        # render :json => @chats, :include => {:user => {:only => :username}}
    end

    def show
        @chat = Chat.find(params[:id])
    end

    def create
        @chat = Chat.new(chat_params)
        @chats = Chat.includes(:user).order(created_at: :desc)
        if @chat.save
            render :index
        
        # if @chat.save
        #     render :show
        else 
            render json: @chat.errors.full_messages, status: 422
        end
    end

    def update
        @chat = Chat.find(params[:id])

        if @chat.update(chat_params)
            render :show
        else
            render json: @chat.errors.full_messages, status: 422
        end
    end

    def destroy
        @chat = Chat.find(params[:id])
        if @chat.destory
          render :show
        else 
          render json: @chat.errors.full_messages, status: 422
        end
      end
    
    private
    def chat_params
        params.require(:chat).permit(:body, :author_id)
    end
end