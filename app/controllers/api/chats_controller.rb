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


    def getfilter
        @chats = Chat.includes(:user).order(created_at: :desc)
        render :index
    end

    def filter

        if (params[:filteredChat].length < 1)
            @chats = Chat.includes(:user).order(created_at: :desc)
        else 
            @chats = Chat.joins(:user).order(created_at: :desc).where(topic: params[:filteredChat])
        end

        render :index

        # @chats = Chat.includes(:user).where(topic: "Finance")
        # Author.includes(:books).where(books: { out_of_print: true })
    end

    def getSearch
        @chats = Chat.all
        render :index
    end
    
    def search

        @chats = Chat.where("lower(body) like ?", "%#{params[:search]}%".downcase).order(created_at: :desc)
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
        params.require(:chat).permit(:body, :author_id, :topic, :id, :imagepath)
    end
end