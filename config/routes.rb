Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  root to:"static_pages#root"


  namespace :api, defaults: {format: :json} do

    get "/explore",     to: "chats#getfilter"
    post "/explore",    to: "chats#filter"
    get "/search",      to: "chats#getSearch"
    post "/search",     to: "chats#search"
    get "/liked",       to: "likes#userLiked"

    resources :chats 
    resources :users
    resources :likes
    resource :session, only: [:new, :create, :destroy]

  end
end
