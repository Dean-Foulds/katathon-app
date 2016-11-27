Rails.application.routes.draw do
  root to: 'visitors#home'
  get '/index', to: 'visitors#index', as: :index
  get '/gallery', to: 'pages#gallery', as: :gallery
  get '/about', to: 'pages#about', as: :about
  devise_for :users
  resources :users
end
