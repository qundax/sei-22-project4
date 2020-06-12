Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'onepage#landing'

  get '/homepage' => 'onepage#homepage'
end