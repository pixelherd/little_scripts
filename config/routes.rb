Rails.application.routes.draw do
  resources :users
  devise_for :testers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#index'

  resources :testers, only: :index

end
