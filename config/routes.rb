Rails.application.routes.draw do
  resources :users, only: [:show] do
    resources :little_scripts, only: [:index, :new]
  end

  devise_for :users, path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout', password: 'secret', confirmation: 'verification', unlock: 'unblock', registration: 'register' }
  root to: 'dashboards#show'

  resource :dashboards, only: [:show]
  resources :pages, only: [:show, :guest]

  resources :little_scripts, only: [:create, :show, :edit, :update, :destroy] do
    get 'search', on: :collection

    resources :steps, only: [:index, :new ]
  end

  resources :steps, only: [:create, :edit, :update, :destroy]
  post 'steps', to: 'steps#create'
end
