Rails.application.routes.draw do
  resources :photos
  resources :countdowns
  resources :events
  resources :couples
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'onepage#landing'

  get '/homepage' => 'onepage#homepage'
  get '/calendar' => 'onepage#calendar'
  get '/countdown' => 'onepage#countdown'
  get '/photos' => 'onepage#photos'
end