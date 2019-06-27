Rails.application.routes.draw do
  devise_for :testers
  resource :dashboards, only: [:show]
  root to: 'dashboards#show'

  resources :testers, only: :index

  resources :pages, only: [:show, :guest]

  resources :users, only: [:show] do

    resources :little_scripts, only: [:index, :new]
  end

  resources :little_scripts, only: [:create, :show, :edit, :update, :destroy] do
    get 'search', on: :collection

    resources :steps, only: [:index, :new ]
  end

  resources :steps, only: [:create, :edit, :update, :destroy]
  post 'steps', to: 'steps#create'
end
