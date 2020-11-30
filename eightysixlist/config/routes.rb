Rails.application.routes.draw do
  resources :restaurants
  resources :posts
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  put '/posts/:post_id/posts/:id', to: 'posts#add_post'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
