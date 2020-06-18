Rails.application.routes.draw do
  resources :photos
  resources :countdowns
  resources :events
  resources :couples
  devise_for :users do
    delete '/users/sign_out' => 'devise/sessions#destroy'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'onepage#landing'

  get '/create_couple' => 'onepage#create_couple'
  get '/homepage' => 'onepage#homepage'
  get '/calendar' => 'onepage#calendar'
  get '/countdown' => 'onepage#countdown'
  get '/photos-react' => 'onepage#photos'
end