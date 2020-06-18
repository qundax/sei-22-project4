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

  get '/couples' => 'couples#index'
  get '/couples/new' => 'couples#new'
  get '/couples/:id' => 'couples#show'
  get '/couples/:id/edit' => 'couples#edit'
  post '/couples' => 'couples#create'
  put '/couples/:id' => 'couples#update'
  delete '/couples/:id' => 'couples#destroy'

  get '/events' => 'events#index'
  get '/events/new' => 'events#new'
  get '/events/:id' => 'events#show'
  get '/events/:id/edit' => 'events#edit'
  post '/events' => 'events#create'
  put '/events/:id' => 'events#update'
  delete '/events/:id' => 'events#destroy'

  get '/countdowns' => 'countdowns#index'
  get '/countdowns/new' => 'countdowns#new'
  get '/countdowns/:id' => 'countdowns#show'
  get '/countdowns/:id/edit' => 'countdowns#edit'
  post '/countdowns' => 'countdowns#create'
  put '/countdowns/:id' => 'countdowns#update'
  delete '/countdowns/:id' => 'countdowns#destroy'

  get '/photos' => 'photos#index'
  get '/photos/new' => 'photos#new'
  get '/photos/:id' => 'photos#show'
  get '/photos/:id/edit' => 'photos#edit'
  post '/photos' => 'photos#create'
  put '/photos/:id' => 'photos#update'
  delete '/photos/:id' => 'photos#destroy'
end