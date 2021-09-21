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

    def filter
        # @chats = Chat.includes(:user).where(topic: "Finance")
        @chats = Chat.includes(:user).where(topic: "Sports")

        # Author.includes(:books).where(books: { out_of_print: true })
        render :index

    end
    
    def search
        @chats = Chat.includes(:user).where(topic: "Finance")
        render :index

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
        params.require(:chat).permit(:body, :author_id, :topic)
    end
end