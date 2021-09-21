Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  root to:"static_pages#root"


  namespace :api, defaults: {format: :json} do

    get "/explore", to: "chats#filter"
    get "/search", to:"chats#search"

    resources :chats 
    resources :users
    resource :session, only: [:new, :create, :destroy]
    





  end
end
